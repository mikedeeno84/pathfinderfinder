const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");
const parsingDir = path.join(process.cwd(), "/src/parsing/spells");
const spellFiles = fs.readdirSync(parsingDir);
const spellDetails = spellFiles.map((fileName) => {
  const text = fs.readFileSync(path.join(parsingDir, fileName), "utf-8");
  let $ = cheerio.load(text);
  const body = $("#ctl00_MainContent_DetailedOutput");
  return parseSpell($, body);
});
const spellMap = {};
spellDetails.forEach((spell) => {
  spellMap[spell.title] = spell;
});
const spellDetailsString = JSON.stringify(spellMap, null, 2);
const writePath = path.join(parsingDir, "/../") + "spells.json";
fs.writeFileSync(writePath, spellDetailsString);
console.log("hi");
function parseSpellHeader($, spellBody) {
  const title = $(spellBody.children()[0])[0].children[1].data;
  const [type, level] = $($(spellBody.children()[0])[0].children[2])
    .text()
    .split(" ");
  return {
    title,
    type,
    level,
  };
}
function parseSpellAttributes($, spellBody) {
  let mike = "me";
  const traits = [];
  $(".trait").each((index, element) => {
    traits.push($(element).text());
  });
  const attributeTitleEls = [];
  let passedHR = false;
  spellBody.children().each((i, element) => {
    if (!passedHR) {
      let $el = $(element);
      if (element.type === "tag" && element.name === "hr") {
        passedHR = true;
        return;
      } else if (element.type === "tag" && element.name === "b") {
        attributeTitleEls.push($el);
      }
    }
  });
  const attributes = attributeTitleEls.map(($el) => {
    let propName = $el.text().toLowerCase();
    let values = '';
    let currentEl = $el[0].nextSibling;
    if (propName === "cast") {
      values = getCastProp($el);

    } else {
      let tagName;
      do {
        try {
          let text = currentEl.data || $(currentEl).text();
          tagName = currentEl.name ? currentEl.name.toLowerCase(): null;
          values += (' ' + text);
        } catch (e) {
          tagName = "";
        }
        currentEl = currentEl.nextSibling;
      } while (!['br', 'hr'].includes(tagName) && currentEl);
      values = values.trim()
    }
    return {
      [propName]: values,
    };
  });
  let attributeProps = {};
  attributes.forEach((attr) => {
    attributeProps = { ...attributeProps, ...attr };
  });
  return { traits, ...attributeProps };
}
function parseSpellText($, spellBody) {
  const spellTextBoundary = spellBody.find("hr");
  let currnentChunk = spellTextBoundary[0].nextSibling;
  const text = [];
  let textChunk = "";
  do {
    if (currnentChunk.name && currnentChunk.name.toLowerCase() === "hr") {
      if (textChunk) text.push(textChunk);
      textChunk = "";
    } else {
      if ($(currnentChunk).text() || currnentChunk.data) {
        let thisText = currnentChunk.data || $(currnentChunk).text();
        textChunk += " " + thisText;
      }
    }
    currnentChunk = currnentChunk.nextSibling;
  } while (currnentChunk)
  if (textChunk) text.push(textChunk);
  return text;
}
function parseSpell($, spellBody) {
  return {
    ...parseSpellHeader($, spellBody),
    ...parseSpellAttributes($, spellBody),
    text: parseSpellText($, spellBody),
  };
}
function getCastProp(castTitleEl) {
  let currentNext = castTitleEl[0].nextSibling;
  let counter = 1;
  let keepGoing = true;
  let action;
  let castTraits;
  while (keepGoing || counter < 10) {
    counter++;
    if (
      currentNext &&
      currentNext.type === "tag" &&
      currentNext.name.toLowerCase() === "img"
    ) {
      action = currentNext.attribs.alt;
      keepGoing = false;
    }
    try {
      currentNext = currentNext.nextSibling;
    } catch (e) {
      break;
    }
  }
  keepGoing = true;
  counter = 1;
  currentNext = castTitleEl[0].nextSibling;
  while (keepGoing || counter < 10) {
    counter++;
    if (
      currentNext &&
      currentNext.type === "text" &&
      currentNext.data &&
      !!currentNext.data.trim()
    ) {
      castTraits = currentNext.data.trim().split(", ");
      keepGoing = false;
    } else {
      try {
        currentNext = currentNext.nextSibling;
      } catch (e) {
        break;
      }
    }
  }
  return {
    action,
    castTraits,
  };
}

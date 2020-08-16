const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');


const selectedIds = [
    // '1960'
  ]
let i = 1;
let moreIds = [];
while (i<=2200) {

    moreIds.push(i);
    i++;
}
let ids = selectedIds.concat(moreIds);
const errors = {};
let count = 0;
let rawFeats;

// try {
//     rawFeats = fs.readFileSync('feats.json');
// } catch (error) {
//     console.log('no feats found starting from scratch')
// }

// const feats = rawFeats ? JSON.parse(rawFeats) : {};
const feats = {};
makeLotsOfRequests(ids);

// setTimeout(() => {
//     const data = JSON.stringify(feats, null, 2)
//     const entries = Object.entries(errors);
//     const fiveHundreds = [];
//     const filteredEntries = entries.map(entry => {
//         const error = entry[1];
//         error.id = entry[0];
//         return error;
//     }).filter(error => {
//         if (error.message === "Request failed with status code 500") {
//             fiveHundreds.push(error);
//         }
//         return error.message !== "Request failed with status code 500";
//     });
//     console.log('500 errors:', fiveHundreds.length)
//     const errorData = JSON.stringify(filteredEntries, null, 2)
//     fs.writeFileSync('feats.json', data);
//     fs.writeFileSync('errors.json', errorData);
// }, 80000);

function makeLotsOfRequests(ids) {
    const axiosPromises = ids.filter(id => !feats[id]).map(id => axios.get(`https://2e.aonprd.com/Feats.aspx?ID=${id}`));
    try {
        callResults = await Promise.all(axiosPromises);
        callResults.forEach(assembleTheThing)

    } catch (e) {
        console.error('there be a problem yar!', e);
    }
}
function parseResponse(axiosRes) {
        const returnData = {};
                try {
                let $ = cheerio.load(axiosRes.data);
                const body = $('#ctl00_MainContent_DetailedOutput').html()
                body.replace('&#x2019;', "'");
                body = gloriousTextPurifier(body, true);
                console.log(body);
                const name = $('h1.title').children('a').text();
                const level = $('h1.title').children('span').text().split(' ')[1];
                const actionImage = $('h1.title').children('img')[0]
                const actions = actionImage ? actionImage.attribs.alt.toLowerCase().replace(' ', '_') : null;
                const traits = $('span.trait').toArray().map(trait => {
                    return trait.firstChild.firstChild.data;
                });
                const text = $('#ctl00_MainContent_DetailedOutput').html().split('<hr>')[1];
                const feat = {
                    name,
                    level,
                    traits,
                    actions,
                    id
                }
                parseText(text, feat);
                const lists = [];
                $('#ctl00_MainContent_DetailedOutput').children().toArray().forEach(item => {
                    try {
                    if (item.name === 'b' && !feat[item.children[0].data.toLowerCase().replace(' ', '_')]) {
                        const title = item.children[0].data.toLowerCase().replace(' ', '_');
                        let content;
                        if (title === 'archetype') {
                            content = item.next.next.children[0].children[0].data;
                        } else if (title === 'source') {
                            content = item.next.next.children[0].children[0].data;
                        } else if (title === 'activate') {
                            content = {
                                actions: item.next.next.attribs.alt.toLowerCase().replace(' ', '_'),
                                name: item.next.next.next.next.data.trim().replace(';', '')
                            }
                            if (content.requirements) {
                                skipList.push('requirements');
                            }
                            if (content.effect) {
                                skipList.push('effect');
                            }
                        } else  {
                            if (item.next && item.next.data) {
                                content = item.next.data.trim();
                            } else if (title === 'special') {
                                content = item.next.next.data.trim();
                                if (item.next.next.next.next) {
                                    moreContent = item.next.next.next.next.data.trim();
                                    content = [content, moreContent];
                                }
                            }
                        }
                        if (feat[title]) {
                            feat[title + '_alt'] = content;
                        } else {
                            feat[title] = content;
                        }
                    } 
                    } catch (error) {
                        console.log(error);
                    }
                    if (item.name === 'ul') {
                        try {
                            handleList(item, feat, lists);
                        } catch (error) {
                            console.log(error);
                        }
                    }
                });
                if (feat.activate) {
                    const activateChildren = [
                        'trigger',
                        'effect',
                        'requirements'
                    ];
                    activateChildren.forEach(child => {
                        if (feat[child]) {
                            feat.activate[child] = feat[child].replace(';', '');
                            delete feat[child];
                        }
                    });
                }
                returnData.feat = feat;
            } catch (error) {
                returnData.error = error;
            }
    return returnData;

}

function parseText(text, feat) {
    const paragraphs = text.split('<br><br>');
    const editedParagraphs = [];
    for (let i = 0; i < paragraphs.length; i++) {
        const paragraph = paragraphs[i];
        const pureParagraph = gloriousTextPurifier(paragraph);
        const purgedParagraph = gloriousTextPurger(pureParagraph);
        if (!purgedParagraph.startsWith('<b>')) {
            editedParagraphs.push(purgedParagraph);
        }
    }
    feat.text = editedParagraphs;
}

function handleList(item, feat) {
    feat.list = item.children.map(child => {
        if (child.children[0].data) {
            return child.children[0].data;
        }
        const label = child.children[0].children[0].data;
        const text = child.children[1].data;
        return { label, text };
    });
}

function gloriousTextPurifier(text, limit) {
    const splitText = text.split('</a>');
    const gloriousWhole = [];
    console.log('hello');
    for (let i = 0; i < splitText.length; i++) {
        console.log(splitText)
      let letters = splitText[i];
      if (letters.includes('<a')) {
        const splitLetters = letters.split('<a');
        const impureHalf = splitLetters[1];
        const pureHalf = splitLetters[0];
        const impureIndex = impureHalf.indexOf('>');
        const purifiedHalf = impureHalf.slice(impureIndex + 1);
        const pureSegment = pureHalf + purifiedHalf;
        gloriousWhole.push(pureSegment);
      } else {
        gloriousWhole.push(letters);
      }
    }
    const onePureWhole = gloriousWhole.join('');
    // console.log(onePureWhole)
    return onePureWhole;
}

// function gloriousLinkPurifier(text) {
//     const splitText = text.split('</a>');
//     const gloriousWhole = [];
//     for (let i = 0; i < splitText.length; i++) {
//       let letters = splitText[i];
//       if (letters.includes('<a')) {
//         const splitLetters = letters.split('<a');
//         const impureHalf = splitLetters[1];
//         const pureHalf = splitLetters[0];
//         const impureIndex = impureHalf.indexOf('>');
//         const purifiedHalf = impureHalf.slice(impureIndex + 1);
//         const pureSegment = pureHalf + purifiedHalf;
//         gloriousWhole.push(pureSegment);
//       } else {
//         gloriousWhole.push(letters);
//       }
//     }
//     const onePureWhole = gloriousWhole.join('');
//     return onePureWhole;
// }

function gloriousTextPurger(text) {
    const splitText = text.split('</ul>');
    const gloriousWhole = [];
    for (let i = 0; i < splitText.length; i++) {
      let letters = splitText[i];
      if (letters.includes('<ul')) {
        const splitLetters = letters.split('<ul');
        const impureHalf = splitLetters[1];
        const pureHalf = splitLetters[0];
        const impureIndex = impureHalf.indexOf('>');
        const purifiedHalf = impureHalf.slice(impureIndex + 1);
        const pureSegment = pureHalf + purifiedHalf;
        gloriousWhole.push(pureSegment);
      } else {
        gloriousWhole.push(letters);
      }
    }
    const onePureWhole = gloriousWhole.join('');
    return onePureWhole;
}
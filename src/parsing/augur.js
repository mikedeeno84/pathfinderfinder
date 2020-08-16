const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');
const { parse } = require('path');


const selectedIds = [
    '1844', '610'
    // '2032',
    // '1861',
    // '889',
    // '318'
  ]
let i = 1;
let moreIds = [];
// while (i<=2200) {

//     moreIds.push(i);
//     i++;
// }
let ids = selectedIds.concat(moreIds);
const errors = {};
// let count = 0;
// let rawFeats;

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
    ids.forEach(id => {
        if (!feats[id]) {
            axios.get(`https://2e.aonprd.com/Feats.aspx?ID=${id}`)
            .then(response => {
                try {
                let $ = cheerio.load(response.data);
                const body = $('#ctl00_MainContent_DetailedOutput').html();
                const cleanBody = body.split('&apos;').join('\'');
                const segments = cleanBody.split('<br>');
                const header = segments[0];
                const { name, level, action, traits } = parseHeader(header);
                let { requirements, prerequisites, source, grantedAction, special, frequency } = parseOtherKeywords(segments);
                const { description } = parseDescription(segments);
                if (!grantedAction) {
                    try {
                    grantedAction = parseMultipleGrantedActions(cleanBody);
                    } catch (error) {
                        console.log(error);
                    }
                }
                const feat = {
                    name,
                    level,
                    action,
                    traits,
                    requirements,
                    prerequisites,
                    source,
                    grantedAction,
                    description,
                    special,
                    frequency
                }
                console.log(feat);
            } catch(error) {
                errors[id] = error;
            }
            }, error =>{
                errors[id] = error;
            });
        }
    });
}

function parseMultipleGrantedActions(body) {
    const segments = body.split('<h3').filter(segment => {
        return segment.includes('</h3>')
    });
    const grantedActions = segments.map(parseGrantedAction);
    return grantedActions;
}

function parseGrantedAction(segment) {
    const pieces = segment.split('</h3>');
    const actionHeaderPiece = pieces[0];
    const bodyPiece = pieces[1];
    const { name, action } = parseActionHeader(actionHeaderPiece);
    const { traits } = parseActionBody(bodyPiece);
    return {
        name,
        action,
        traits
    }
}

function parseActionBody(piece) {
    const traits = extractGrantedActionTraits(piece);
    return traits;
}

function extractGrantedActionTraits(piece) {
    const traitFragments = piece.split('</a>');
    const filteredTraitFragments = traitFragments.filter(fragment => fragment.includes('class="trait"'));
    const traits = filteredTraitFragments.map(traitFragment => {
        return traitFragment.split(" Trait")[0].split('alt="')[1];
    });
    return { traits };
}

function parseActionHeader(piece) {
    const atoms = piece.split('</a>');
    const nameAtoms = atoms[0].split('>');
    const lastNameIndex = nameAtoms.length - 1;
    const name = nameAtoms[lastNameIndex];
    const actionAtoms = atoms[1];
    let action;
    if (actionAtoms) {
        const actionFragment = actionAtoms.split('alt="')[1];
        if (actionFragment) {
            action = actionFragment.split('" style')[0].toLowerCase().replace(' ', '_');
        }
    }

    return { name, action };
}

function parseOtherKeywords(segments) {
    const keywordSegments = segments.filter(segment => segment.startsWith('<b>'));
    const keywords = {};
    keywordSegments.forEach(segment => {
        if (segment.includes('Source')) {
            keywords.source = extractSource(segment);
        } else if (segment.includes('Activate')) { 
            keywords.activate = extractGrantedAction(segment);
        } else if (segment.includes('Prerequisites')) {
            keywords.prerequisites = removeTags(extractGeneric(segment));
        } else if (segment.includes('Requirements')) {
            keywords.requirements = removeTags(extractGeneric(segment));
        } else if (segment.includes('Special')) {
            keywords.special = removeTags(extractGeneric(segment));
        } else if (segment.includes('Frequency')) {
            console.log(segment);
            keywords.frequency = removeTags(extractGeneric(segment));
        }
    });
    return keywords;
}

function parseDescription(segments) {
    const descriptionSegments = segments.filter(segment => {
        return !segment.startsWith('<b>') && !segment.startsWith('<h1') && segment.length;
    })
    const description = descriptionSegments.map(paragraph => removeTags(paragraph));
    return { description }
}

function extractGrantedAction(segment) {
    const { name, action } = extractNameAndAction(segment);
    const { requirements, effect, trigger } = extractOtherGrantedKeywords(segment);
    return {
        name,
        action,
        requirements,
        effect,
        trigger
    }
}

function extractOtherGrantedKeywords(segment) {
    const keywords = {};
    const pieces = segment.split('<b>');
    pieces.forEach(segment => {
        if (segment.includes('Requirements')) {
            keywords.requirements = removeTags(extractGeneric(segment)).replace(';', '');
        } else if (segment.includes('Effect')) {
            keywords.effect = removeTags(extractGeneric(segment)).replace(';', '');
        } else if (segment.includes('Trigger')) {
            keywords.trigger = removeTags(extractGeneric(segment)).replace(';', '');
        }
    });
    return keywords;
}

function extractNameAndAction(segment) {
    const name = segment.split('.png"> ')[1].split(';')[0];
    const action = segment.split('alt="')[1].split('" style')[0].toLowerCase().replace(' ', '_');
    return {
        name,
        action
    }
}

function extractGeneric(segment) {
    return segment.split('</b>')[1].trim();
}

function extractSource(segment) {
    const pieces = segment.replace('</i>','').replace('</a>','').split('<i>');
    return pieces[1];
}

function parseHeader(header) {
    const traitSegments = header.split('</a>');
    const nameSegment = header.split('</h1>')[0];
    const traits = parseTraitSegments(traitSegments);
    const { name, level, action } = parseNameLevelAndAction(nameSegment);
    return { name, level, action, traits };
}

function parseNameLevelAndAction(segment) {
    const pieces = segment.split('</a>');
    const namePiece = pieces[1];
    const levelAndActionPiece = pieces[2];
    const name = extractName(namePiece);
    const level = extractLevel(levelAndActionPiece);
    let action;
    if (levelAndActionPiece.includes('Action') || levelAndActionPiece.includes('Reaction')) {
        action = extractAction(levelAndActionPiece);
    }
    return { name, level, action };
}

function extractAction(piece) {
    const cleanPiece = piece.replace('</span>', '').replace('<img alt="', '').trim();
    return cleanPiece.split('"')[0].toLowerCase().replace(' ', '_');
}

function extractName(piece) {
    return piece.split('>')[1];
}

function extractLevel(piece) {
    const cleanPiece = piece.replace('</span>', '').replace('<img alt="', '');
    return cleanPiece.split('Feat ')[1];
}

function parseTraitSegments(segments) {
    const traitSegments = segments.filter(segment => segment.includes('trait'));
    const traits = traitSegments.map(extractTrait);
    return traits;
}

function extractTrait(segment) {
    const pieces = segment.split('>');
    const lastIndex = pieces.length - 1;
    const trait = pieces[lastIndex];
    return trait;
}

function parseName(segment) {
    const pieces = segment.split('>');
    const name = pieces[1];
    return name;
}

function parseOtherHeaderAttributes(segment) {
    const pieces = segment.split('</h1>');
    const levelSegment = pieces[0];
    const traitsSegment = pieces[1];
    const level = parseLevel(levelSegment);
    const traits = parseTraits(traitsSegment);
    return {
        level: level,
        traits: traits
    };
}

function parseLevel(segment) {
    return removeTags(segment).split(' ')[1];
}

function parseTraits(segment) {
    const pieces = segment.split('<a href="Traits.aspx?ID=');
    const traits = pieces.map(getTraitFromPiece);
    return [];
}

function removeTags(input) {
    return input.replace(/<\/?[^>]*\>/g, '').trim();
}

function getTraitFromPiece(piece) {
    // piece.indexOf('>')
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
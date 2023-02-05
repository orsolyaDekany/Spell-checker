import allowedWords from "./basic_words.json";

// Get the words from the JSON in one array
const basicwordlist = new Set([...Object.values(allowedWords).reduce(function (a, b) {
  return a.concat(b);
})])

// Check if it is a BASIC English word
const isBasicEnglish = (word) => {
  return basicwordlist.has(word);
}

// Check spell for the input
const checkSpell = (sentence) => {
  const words = sentence.split(' ');
  let incorrectWords = [];

  for (const word of words) {
    if (!isBasicEnglish(word)) {
      incorrectWords.push(word)
    }

  }
  return incorrectWords;
}

export default checkSpell;
const hdbs = require("handlebars");

function getRandomWord() {
  return Math.floor(Math.random() * 7);
}
const subjects = [
  "shark",
  "popcorn",
  "poison",
  "fork",
  "cherry",
  "toothbrush",
  "cannon",
];
const punchline = [
  "watch movie with",
  "spread some love",
  "put on cake",
  "clean toilets",
  "go to the moon",
  "achieve world piece",
  "help people learn programing",
];
function drawCard() {
  const cardData = {
    subjects: subjects[getRandomWord()],
    punchline: punchline[getRandomWord()],
  };
  const card = "{{subjects}} is great to {{punchline}}";
  const temp = hdbs.compile(card);
  const result = temp(cardData);
  return result;
}
console.log(drawCard());

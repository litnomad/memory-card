export const initialData = [
  {
    id: 1,
    term: "moon tarot",
    hasClicked: false,
  },
  {
    id: 2,
    term: "sun tarot",
    hasClicked: false,
  },
  {
    id: 3,
    term: "star tarot",
    hasClicked: false,
  },
  {
    id: 4,
    term: "devil tarot",
    hasClicked: false,
  },
  {
    id: 5,
    term: "world tarot",
    hasClicked: false,
  },
  {
    id: 6,
    term: "fool tarot",
    hasClicked: false,
  },
  {
    id: 7,
    term: "justice tarot",
    hasClicked: false,
  },
  {
    id: 8,
    term: "priestess tarot",
    hasClicked: false,
  },
  {
    id: 9,
    term: "tower tarot",
    hasClicked: false,
  },
  {
    id: 10,
    term: "wheel tarot",
    hasClicked: false,
  },
  {
    id: 11,
    term: "judgement tarot",
    hasClicked: false,
  },
  {
    id: 12,
    term: "lovers tarot",
    hasClicked: false,
  },
];

export function shuffle(array) {
  let m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

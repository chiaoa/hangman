
function appendNewLetter(parentElement) {
  button = document.createElement("button");
  button.classList.add("button")
  button.innerHTML = `<button type="submit"></button>`
  parentElement.appendChild(button);
  return button;
}


function createLetters(parentElement) {
  // let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  let letters = [];
    for (let i=0; i <= 25; i++) {
      newLetter = appendNewLetter(parentElement);
      newLetter.classList.add("letter");
      button.innerHTML= alphabet[i];
      letter = alphabet[i];
      newLetterObject = {
        index: i,
        element: newLetter,
        text: letter
      };
      letters.push(newLetterObject);
    }
  return letters;
}

createLetters(document.getElementById("alphabet"));

let anime = ["tokyo ghoul", "banana fish", "my hero academia", "bungo stray dogs", "violet evergarden", "the promised neverland", "demon slayer", "jujutsu kaisen", "maid sama", "fruits basket", "haikyuu", "free", "black clover", "naruto", "bleach", "attack on titan", "anohana", "your name", "garden of words", "a whisker away", "black butler", "jojo's bizarre adventure", "cowboy bebop", "evangelion", "erased", "hunter x hunter", "one piece", "inuyasha", "sk8", "spy x family", "The Millionaire Detective", "sasaki and miyano", "spiritpact", "kakegurui", "death note", "horimiya", "howl's moving castle", "toradora", "dororo", "durarara", "a silent voice", "kotaro lives alone", "one punch man", "fullmetal alchemist", "heaven's official blessing", "sword art online", "yuri on ice", "noragami"];

function shuffleWordBank() {
  shuffledWords = _.shuffle(anime);
  word = shuffledWords[0];
  return word;
}

shuffleWordBank();
console.log(word);
document.getElementById("word").innerHTML = word;

// button onclick to function
// function "if class of button is contained in word, then reveal letter, if not return" + deactivate button

function refreshPage() {
  window.location.reload();
}
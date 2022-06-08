const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result-text");

btn.addEventListener("click", countVowel);

function countVowel() {
  let vowelCount = 0;
  let wordVal = word.value.toLocaleLowerCase();

  for (let i = 0; i < wordVal.length; i++) {
    let letter = wordVal[i];
    if (letter.match(/([a,e,i,o,u,à,á,é,í,ó,ú,ã,õ,])/)) {
      vowelCount++;
    }
  }
  result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
}

//Using reverse method
function reverseWords(sentence) {
  let arr = sentence.split(' ');
  let revArr = [];
  for (let i=0; i < arr.length; i++) {
    revArr += arr[i].split('').reverse().join('') + ' ';
  }
  console.log(revArr);
}
reverseWords('This is my sentence that I am reversing using the reverse method which is the easiest way');

//Without reverse method
function reverseWordsManual(sentence) {
  let arr = sentence.split(' ');
  let revArr = [];
  let revWord = [];
  for (let i=0; i < arr.length; i++) {
    revWord = arr[i].split('');
    let temp = '';
    for (let x = revWord.length - 1; x >= 0; x--) {
      temp += revWord[x];
    }
    revArr += temp + ' ';
  }
  console.log(revArr);
}
reverseWordsManual("This is my sentence that I am reversing using two for loops and no reverse method");

//Using forEach
function reverseWordsForEach(sentence) {
  let wordsArr = sentence.split(' ');
  let reversedWordsArr = [];
  wordsArr.forEach(word => {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    };
    reversedWordsArr.push(reversedWord);
  });
  console.log(reversedWordsArr.join(' '));
}
reverseWordsForEach("Here we are using the forEach loop");
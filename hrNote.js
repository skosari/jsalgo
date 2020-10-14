var note = "we are testing this";
var mag1 = "will it work in this text if we are coding this correctly and then testing this correctly";
var mag2 = "this excerpt wont work for sure so our output should be false";

function harmlessRansomNote(noteText, magazineText) {
  //assume no punctuation and all letters are lower-case
  //Use a hash-table
  let magazineArr = magazineText.split(' ');
  let magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++
  })

  let noteArr = noteText.split(' ');
  let notePossible = true;
  noteArr.forEach(x => {
    if (magazineObj[x]) {
      magazineObj[x]--;
      if (magazineObj[x] < 0) notePossible = false;
    }
    else notePossible = false;
  })
  console.log(notePossible);
}

harmlessRansomNote(note, mag1);
harmlessRansomNote(note, mag2);

///////Test Functions//////////
var sentence = "this is a test that I am doing for this hash example"
function test(input){
  let object = {};
  let array = input.split(' ');
  array.forEach(word => {
    if (!object[word]) object[word] = 0;
    object[word]++
  })
  console.log(object)
}
//test(sentence);

var sentence2 ="this is my second sentence in which i take the sentence and make it an object and then count the objects in the sentence in an object";

function test2(x) {
  let object2 = {}
  let array2 = sentence2.split(' ');
  array2.forEach(x => {
    if (!object2[x]) object2[x] = 0;
    object2[x]++
  })
  console.log(object2)
}
//test2(sentence2);

var sentence3 = "ok ok ok ok yes";
function test3(x) {
  let object = {};
  let array = sentence3.split(' ');
  array.forEach(x => {
    if (!object[x]) object[x] = 0;
    object[x]++
  })
  console.log(object)
}
//test3(sentence3);

let sentence4 = "what are you still doing this for for";
function test4(word){
  let array = word.split(' ');
  let object = {};
  array.forEach(x => {
    if (!object[x]) object[x] = 0;
    object[x]++
  })
  console.log(object)
}
//test4(sentence4);

var sentence5 = "ok i i i will will get it this time time time";
function test5(word) {
  let object = {}
  let array = word.split(' ');
  array.forEach(x => {
    if (!object[x]) object[x] = 0;
    object[x]++
  })
  console.log(object)
}
//test5(sentence5);


////////////Big O Notation/////////////
//Constant runtime (time it takes to run is horizontal x axis)
//Big 0 Notation: "O (1)"
function log(array) {
  console.log(array[0]);
  console.log(array[1]);
}
//log([1,2,3,4]);
//log([1,2,3,4,5,6,7,8,9,10]);

//Linear runtime (runtime increases proportionally to how many elements it must run)
//Big O Notation: O(n)
function logAll(array) {
  for (var i=0; i < array.length; i++) {
    console.log(array[i])
  }
}
//logAll([1,2,3,4,5]);
//logAll([1,2,3,4,5,6]);
//logAll([1,2,3,4,5,6,7]);

//Exponential runtime (input size increases runtime increases exponentially so use this with care as it can become very inefficient)
//Big O Notation: O(n^2)
function addAndLog(array) {
  for (var i=0; i <array.length; i++) {
    for (var j=0; j<array.length; j++) {
      console.log(array[i] + array[j])
    }
  }
}
//addAndLog(['A', 'B', 'C']); //9 pairs logged out
//addAndLog(['A', 'B', 'C', 'D']); //16 pairs logged out
//addAndLog(['A', 'B', 'C', 'D', 'E']); //25 pairs logged out

//Logarithmic runtime (very efficient)
//Big O Notation: O(log n)
function binarySearch(array, key) {
  let low = 0;
  let high = array.length - 1;
  let mid;
  let element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid  - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
//example: find where the word House is in the dictionary
//Open the dictionary in the middle and you are in the M section. You know that H is before M so you turn a bunch of pages back and find you are in the F section. You know H is after F so you now turn forward a stack of pages until you are in the H section. Essentially instead of starting in the beginning and going through every letter you use logic to find H in three moves instead of 8. The larger the input size the lower the rate of search it will take to get to your answer ex: 4000 elements will take 12 inputs/moves and 6000 elements will take 14 inputs/moves....
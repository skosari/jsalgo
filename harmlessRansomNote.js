var sourceNote = "Today I walked to the wework office in Hollywood on Vine St. It was a full house as far as im concerned but the place was at about 35% capacity which makes "
var ransomNote1 = "I was full"
var ransomNote2 = "I want to leave town"
harmlessRansomNote(sourceNote, ransomNote1, ' Note 1');
harmlessRansomNote(sourceNote, ransomNote2, ' Note 2');

function harmlessRansomNote (magazineText, noteText,whichOne) {
  //we split both the note and magazine into a flat array with each word holding a single index in order
  let noteArr = noteText.split(' ');
  let magazineArr = magazineText.split(' ');
  //figure out what words we have available to us in our magazineText. Use a hash table to achieve this. we want to have every word in the magazineArr[] as a property our magazineObj{}, and for each word to have its value appear as how many times it occurs in the magazine text like the below example:
  // {this: 1, is: 1, all:1, the: 2, magazine: 2, text: 1}
  let magazineObj = {};
  //loop through the magazine text and place each word as an object key and set its value to the # of times it occurs
  magazineArr.forEach(word=>{
    //read the line below as magazine Object at the current word
    if(!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++
  })
  //THIS GIVES YOU THE SAME OBJECT BUT USES THE reduce() method
  // console.log(magazineArr.reduce((tally, word)=>{
  //   tally[word] = (tally[word] || 0) + 1
  //   return tally
  // },{})) //array.reduce(function(total, currentValue, currentIndex, arr), {initialValue an empty object above})

  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    } 
    else noteIsPossible = false;
  })
  return noteIsPossible, console.log(whichOne + noteIsPossible)
}





//The cipher will shift the letters of our wstr num times. It will also lop back around if it reaches the end of the alphabet. It should also be able to handle negative numbers. 

function caesarCipher(str, num) {
  num = num % 26;//In case our number is higher than 26 or lower than -26 this will give us the correct shift number so were not looping through too many times
  let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let strArr = str.toLowerCase().split('');
  let newStr = '';
  for (let i = 0; i < strArr.length; i++) {
    let currentLetter = strArr[i];
    if (currentLetter === ' ') {
      newStr += currentLetter;
      continue;//add spaces and continue-dont stop if our if is true
    }
    let currentIndex = alpha.indexOf(currentLetter);//find index of letter against alphabet
    let newIndex = currentIndex + num;//cipher key number we want to shift
    if (newIndex > 25) newIndex = newIndex - 26;//Loop back around too high
    if (newIndex < 0) newIndex = 26 + newIndex;//Loop back around too low
    if (str[i] === str[i].toUpperCase()) {
      newStr += alpha[newIndex].toUpperCase();
    } 
    else newStr += alpha[newIndex];//If we have upper case letter this will turn our shifted letters into uppercase
  }
  console.log(newStr);
  //console.log(strArr);
}
//.replace(/[^a-zA-z]/g, '')
caesarCipher('Zoo Keeper', 2)//Bqq Mggrgt
caesarCipher('Big Car', -16)//Lsq Mkb
caesarCipher('Javascript', -900)//Tkfkcmbszd
function isPalindromeRegex(string) {
  let arr = string.replace(/[^a-zA-Z]|\s+/g, '').toLowerCase().split("");
  let rev = [...arr].reverse();
  if (arr.join('') == rev.join('')) {
    console.log(string + " is a Palindrome");
  } else console.log(string + " is NOT a Palindrome");
};
isPalindromeRegex("Madam I'm, Adam");

function isPalindrome(string) {
  let charArr = string.toLowerCase().split('')
  let validChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let lettersArr = [];
  charArr.forEach(x => {
    if (validChar.indexOf(x) > -1) lettersArr.push(x);
  });
  if (lettersArr.join('') == lettersArr.reverse().join('')){
    console.log(string + " is a Palindrome")
  } else console.log(string + " is NOT a Palindrome");
}
// isPalindrome("Madam I'm Adam");
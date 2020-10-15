function isPalindromeRegex(string) {
  var arr = string.replace(/[^a-zA-Z]|\s+/g, '').toLowerCase().split("");
  var rev = [...arr].reverse();
  if (arr.join('') == rev.join('')) {
    console.log(string + " is a Palindrome");
  }else console.log(string + " is not a Palindrome");

};
isPalindromeRegex("Madam I'm, Adam");
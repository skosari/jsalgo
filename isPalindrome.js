function isPalindrome(string) {
  var arr = string.replace(/[^a-zA-Z]|\s+/g, '').toLowerCase().split("");
  
  console.log(arr);
};
isPalindrome("Madam I'm, Adam");
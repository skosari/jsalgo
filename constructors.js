
//constructor function
function User(firstName, lastName, age, gender) { 
  this.firstName = firstName; //Our firstName parameter will be set to firstName that is passed in
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

var user1 = new User('Siamak', 'Kosari', 39, 'Male');
var user2 = new User('Yankov', 'Smirnoff', 88, 'Male')

//console.log(user1)
//console.log(user2)

//prototype functions
User.prototype.emailDomain = '@gmail.com';

console.log(user1.emailDomain) //will show the @gmail.com domain but if we only console log the user1 object we only see the orignal object properties. in our browser we see the prototype caleed the dunder_proto as the last item in the object in a dropdown

//Adding a method to your dunder proto
User.prototype.getEmailAddress = function() {
  return this.firstName + this.emailDomain;
}
console.log(user1.getEmailAddress())//notice that its a function call otherwise known as your method you created
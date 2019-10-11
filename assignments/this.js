/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: The window binding is the default action for the `this` keyword
* 2. 
Implicit Binding: If the `this` keyword is inside an object, then it binds to the object itself.
* 3. 
Explicit Binding: Tells the functions the context of the `this` keyword using call, apply, or bind.
* 4. 
New Binding: If invoked, the `this` keyword binds to the object that is constructed.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding

const me = {
	name: "Joshua Rieth",
	age: 19,
	sayName: function() {
		console.log(this.name);
	}
};

me.sayName();

// Principle 3

// code example for New Binding

const Person = function(obj) {
	this.name = obj.name;
	this.age = obj.age;
};

Person.prototype.sayName = function() {
	console.log(this.name);
};

const joshua = new Person({
	name: "Joshua Rieth",
	age: 19
});

joshua.sayName();

// Principle 4

// code example for Explicit Binding

function favSubject(subject1, subject2, subject3) {
	console.log(
		`My name is ${this.name} and I like ${subject1}, ${subject2}, and ${subject3}.`
	);
}

const Joshua = {
	name: "Joshua Rieth",
	age: 19
};

const subjects = ["Computer Science", "Music", "Reading"];

//.apply() allows for multiple arguments.
favSubject.apply(Joshua, subjects);

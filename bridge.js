// Implementor 
function sayHello() {
	this.greet = function (str) {
		alert('Hello, '+str);
	};
}
// Implementor 
function sayHi() {
	this.greet = function (str) {
		alert('Hi, '+str);
	};
}


// Abstraction
function friend() {
	var greeting;
	this.setGreeting = function (greetingImp) {
		greeting = greetingImp;
	};
	this.getGreeting = function () {
		return greeting;
	};
}

// Refined Abstraction
function David() {
	this.greet = function () {
		this.getGreeting().greet('I am David.');
	};
}
David.prototype = new friend();

// Refined Abstraction
function Lucy() {
	this.greet = function () {
		this.getGreeting().greet('I am Lucy.');
	};
}
Lucy.prototype = new friend();

var d = new David();
d.setGreeting(new sayHi());
d.greet();
d.setGreeting(new sayHello());
d.greet();

var l = new Lucy();
l.setGreeting(new sayHi());
l.greet();
l.setGreeting(new sayHello());
l.greet();
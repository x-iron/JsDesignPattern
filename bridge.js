// Implementor 
function sayHello(str) {
    alert('Hello, ' + str);
}
// Implementor 
function sayHi(str) {
    alert('Hi, ' + str);
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
        this.getGreeting()('I am David.');
    };
}
David.prototype = new friend();

// Refined Abstraction
function Lucy() {
    this.greet = function () {
        this.getGreeting()('I am Lucy.');
    };
}
Lucy.prototype = new friend();

var d = new David();
d.setGreeting(sayHi);
d.greet();
d.setGreeting(sayHello);
d.greet();

var l = new Lucy();
l.setGreeting(sayHi);
l.greet();
l.setGreeting(sayHello);
l.greet();

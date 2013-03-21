// Adaptee
function Bird() {
    this.fly = function (miles) {
        alert('fly ' + miles + ' miles');
    };
}

// Adapter (Object Adapter Pattern)
function Bird2AnimalAdaptor1(bird) {
    this.move = function (miles) {
        bird.fly(miles);
    };
}

// Adapter (prototype Adapter Pattern)
function Bird2AnimalAdaptor2() {
    this.move = function (miles) {
        this.fly(miles);
    };
}
Bird2AnimalAdaptor2.prototype = new Bird();

function Animal() {
    this.move = function (miles) {
        alert('move ' + miles + ' miles');
    };
}

var animals = [];
animals.push(new Bird2AnimalAdaptor1(new Bird()));
animals.push(new Bird2AnimalAdaptor2());
animals.push(new Animal());
for (var i = 0; i < animals.length; i++) {
    animals[i].move(10);
}

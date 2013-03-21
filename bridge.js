(function() {
    var pName = 'Bridge';
    Patterns.adopt(function(log) {
// Implementor
        function sayHello(str) {
            log('Hello, ' + str);
        }

// Implementor
        function sayHi(str) {
            log('Hi, ' + str);
        }


// Abstraction
        function Friend() {
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

        David.prototype = new Friend();

// Refined Abstraction
        function Lucy() {
            this.greet = function () {
                this.getGreeting()('I am Lucy.');
            };
        }

        Lucy.prototype = new Friend();

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
    }, pName);
})();
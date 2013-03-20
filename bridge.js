function imp() {
    this.show = function (str) {
        alert(str);
    };
}
  function imp2() {
    this.show = function (str) {
        alert(str+'!');
    };
}
var i = new imp2();

function abstract() {
    var i;
    this.setImp = function (imp) {
        i = imp;
    };
    this.getImp = function () {
        return i;
    };
}
var abs = new abstract();
abs.setImp(i);
function refined() {
    this.work = function (str) {
        this.getImp().show(str);
    };
}
refined.prototype = abs;

var ref = new refined();
ref.work('hello');

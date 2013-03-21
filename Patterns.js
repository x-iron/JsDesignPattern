var Patterns = {};
(function() {
    var items = {};

    function logFactory(name) {
        return function(text) {
            console.log('[' + name + ']: ' + text);
        };
    }

    Patterns.adopt = function(fn, name) {

        items[name] = function() {
            fn(logFactory(name));
        };
    };
    Patterns.getAvailablePatterns = function() {
        return items;
    };
    Patterns.getPatternsByName = function(name) {
        return items[name];
    };
})();

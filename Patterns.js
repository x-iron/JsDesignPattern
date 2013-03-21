var Patterns = {};
(function() {
    var items = {};
    Patterns.adopt = function(fn, name) {
        function logFactory() {
            return function(text) {
                console.log('[' + name + ']: ' + text);
            };
        }

        items[name] = function() {
            fn(logFactory());
        };
    };
    Patterns.getAvailablePatterns = function() {
        return items;
    };
    Patterns.getPatternsByName = function(name) {
        return items[name];
    };
})();

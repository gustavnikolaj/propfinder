(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof module === 'object') {
        module.exports = factory();
    } else {
        global.propfinder = factory();
    }
})(this, function () {

    return function propfinder(obj, path) {
        var pathComponents = path.split('.');
        var result = obj;
        var index = 0;

        while (result !== undefined && index < pathComponents.length) {
            result = result[pathComponents[index]];
            index += 1;
        }

        return result;
    };

});

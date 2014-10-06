(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof module === 'object') {
        module.exports = factory();
    } else {
        global.propfinder = factory();
    }
})(this, function () {

    return function propfinder(path, obj, cb) {
        if (arguments.length === 1) {
            return function (obj, cb) {
                return propfinder(path, obj, cb);
            };
        }

        if (obj === null) {
            return undefined;
        }

        var pathComponents = path.split('.');
        var result = obj;
        var index = 0;

        while (result !== undefined && index < pathComponents.length) {
            result = result[pathComponents[index]];
            index += 1;
        }

        if (result !== undefined && typeof cb === 'function') {
            return cb(result);
        } else {
            return result;
        }
    };

});

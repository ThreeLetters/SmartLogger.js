var fs = require('fs');
var styleme = require('styleme');
class logger {
    constructor(config) {

        this.lvl = config.level || 0;
        this.presets = config.presets || {};
        this.path = config.path + "/" + Date.now + ".txt";
        this.init();
    }

    init() {


    }
    log( /**/ ) {
        arguments = Array.prototype.slice.call(arguments);
        var i = 0;
        var options = this.presets;
        if (typeof arguments[0] == "object") {
            i = 1;
            var opt = arguments[0];
            for (var i in opt) options[i] = opt[i] || options[i];
        }

        for (; i < arguments.length; i++) {
            var text = arguments[i],
                head = options.head || "";

            if (options.style) text = text.styleMe();

            console.log(head + text);

            if (!options.log && (!options.logCat || options.logCat <= this.lvl)) this._log(text, head, options)
        }
    }
    debug( /**/ ) {


    }
    _log(txt, head, options) {





    }
    tracer() {

        var error = new Error();
        var stack = error.stack;
        if (!stack) return false;

        stack = stack.split("\n")
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validatorJson(data) {
    return /^[\],:{}\s]*$/.test(data
        .replace(/\\["\\\/bfnrtu]/g, '@')
        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''));
}
exports.default = validatorJson;

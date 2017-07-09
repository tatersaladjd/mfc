define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function convertToBoolean(input) {
        try {
            return JSON.parse(input);
        }
        catch (e) {
            return undefined;
        }
    }
    exports.convertToBoolean = convertToBoolean;
    function convertToNumber(input) {
        try {
            return JSON.parse(input);
        }
        catch (e) {
            return undefined;
        }
    }
    exports.convertToNumber = convertToNumber;
});
//# sourceMappingURL=util.js.map
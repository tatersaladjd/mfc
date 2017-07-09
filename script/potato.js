define(["require", "exports", "jquery", "./PotatoExtractor"], function (require, exports, jQuery, PotatoExtractor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });


    class Potato {
        constructor() {
            jQuery(document).ready(() => {
                alert('ready;');
                var ex = new PotatoExtractor_1.PotatoExtractor();
                var tater = ex.dig();
                console.log('Hello from potato.ts');
                if (tater.facts.size > 0) {
                    console.log('Let\'s see what we dug up\r\n.');
                    tater.facts.forEach((value, label) => {
                        console.log(label, "=", value);
                    });
                }
            });
        }
    }
    var tater = new Potato();
    alert('loaded');
});
//# sourceMappingURL=potato.js.map
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RawPotato {
        add_facts(facts) {
            if (facts == undefined || facts == null)
                return;
            if (facts.keys == undefined || facts.keys == null)
                return;
            facts.forEach((value, label) => {
                this.facts.set(label, value);
            });
        }
    }
    exports.RawPotato = RawPotato;
});
//# sourceMappingURL=RawPotato.js.map
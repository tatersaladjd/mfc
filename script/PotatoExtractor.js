define(["require", "exports", "./RawPotato", "jquery"], function (require, exports, RawPotato_1, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PotatoExtractor {
        dig() {
            var _self = this;
            var tater = new RawPotato_1.RawPotato();
            tater.add_facts(_self.extract_facts("#blurb_container"));
            tater.add_facts(_self.extract_facts("#last_login_string_container"));
            tater.add_facts(_self.extract_facts("#unix_last_updated_container"));
            tater.add_facts(_self.extract_facts("#profile_about_me"));
            return tater;
        }
        parse_height(s_ht) {
            return 0;
        }
        extract_facts(selector) {
            var _self = this;
            var facts = new Map();
            var labels = $(selector).find("id$=label");
            labels.each(function (ix, el) {
                var label = _self.label_fixup(_self.immediate_text(el));
                var value = jQuery(el).find("~ [id$=value]").first().text();
                facts.set(label, value);
            });
            return facts;
        }
        label_fixup(label) {
            //TODO: rename the labels of interest. Be silly.
            return label;
        }
        immediate_text(el) {
            return $(el).clone()
                .children()
                .remove()
                .end()
                .text();
        }
    }
    exports.PotatoExtractor = PotatoExtractor;
});
//# sourceMappingURL=PotatoExtractor.js.map
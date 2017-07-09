import { RawPotato } from './RawPotato';
import * as util from './util';
import * as $ from "jquery"


export class PotatoExtractor {

    dig(): RawPotato {
        var _self = this;
        var tater = new RawPotato();

        tater.add_facts(_self.extract_facts("#blurb_container"));
        tater.add_facts(_self.extract_facts("#last_login_string_container"));
        tater.add_facts(_self.extract_facts("#unix_last_updated_container"));
        tater.add_facts(_self.extract_facts("#profile_about_me"));


        return tater;
    }
    parse_height(s_ht: string): number {
        return 0;
    }

    extract_facts(selector: string): Map<string, string> {
        var _self = this;
        var facts = new Map<string, string>();
        var labels = $(selector).find("id$=label");
        labels.each(function (ix: number, el: HTMLElement) {
            var label = _self.label_fixup(_self.immediate_text(el));
            var value = jQuery(el).find("~ [id$=value]").first().text();
            facts.set(label, value);
        });
        return facts;
    }
    label_fixup(label: string) {
        //TODO: rename the labels of interest. Be silly.
        return label;
    }
    immediate_text(el: HTMLElement) {
        return $(el).clone()
            .children()
            .remove()
            .end()
            .text();
    }
}

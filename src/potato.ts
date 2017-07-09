import * as jQuery from "jquery";
import { PotatoExtractor } from "./PotatoExtractor";

/*export * from './PotatoCooker';
export * from './PotatoExtractor';
export * from './PotatoGallery';
export * from './PotatoGalleryEntry';
export * from './PotatoTalk';
export * from './RawPotato';
*/

class Potato {
    constructor() {

        jQuery(document).ready(() => {
            alert('ready;')
            var ex = new PotatoExtractor();
            var tater = ex.dig();
            console.log('Hello from potato.ts');
            if (tater.facts.size > 0) {
                console.log('Let\'s see what we dug up\r\n.');
                tater.facts.forEach((value: string, label: string) => {
                    console.log(label, "=", value);
                })

            }
        });
    }

}

var tater = new Potato();
alert('loaded')
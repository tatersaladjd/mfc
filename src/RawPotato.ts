import { PotatoGallery } from './PotatoGallery'
import { PotatoTalk } from './PotatoTalk'

export class RawPotato {
    user_name: string;
    headline: string;
    /*    
        user_name: string;
        gender: string;
        last_login_description: string;
        member_type: string;
        online: boolean;
        body_type: string;
        ethnicity: string;
        hair: string;
        eyes: string;
        weight: string;
        height_in_inches: number;
        age: number;
        city: string;
        country: string;
        sexual_preference: string;
        smoking: string;
        drinking: string;
        drugs: string;
        marital_status: string;
        occupation: string;
        school: string;
        favorite_food: string;
        pets: string;
        automobile: string;
        hobbies: string;
        meaning_of_life: string;
        five_things: string;
        books: string;
        for_fun: string;
        songs: string;
        movies: string;
        craziest_thing: string;
        be_anywhere: string;
        talents: string;
        perfect_mate: string;
        perfect_date: string;
        turn_ons: string;
        reasons_to_know_me: string;
    */
    facts: Map<string, string>;
    galleries: PotatoGallery[];
    talks: PotatoTalk[];

    add_facts(facts: Map<string, string>): void {
        if (facts == undefined || facts == null) return;
        if (facts.keys == undefined || facts.keys == null) return;
        facts.forEach((value: string, label: string) => {
            this.facts.set(label, value);
        });
    }
}

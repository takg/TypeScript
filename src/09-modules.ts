// Importing named exports
import { castSpell, brewPotion, schoolName } from "./magicUtils";

// Importing default export
import Wizard from "./wizard";

console.log("Welcome to", schoolName); 
// Output: Welcome to Hogwarts School of Witchcraft and Wizardry

console.log(castSpell("Expelliarmus")); 
// Output: Casting Expelliarmus spell! 🔮

console.log(brewPotion("Polyjuice"));   
// Output: Brewing Polyjuice potion! 🧪

// Using default export class
const harry = new Wizard("Harry Potter", "Gryffindor");
console.log(harry.introduce()); 
// Output: I am Harry Potter from Gryffindor house.

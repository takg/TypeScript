export default class Wizard {
    constructor(public name: string, public house: string) {}

    introduce(): string {
        return `I am ${this.name} from ${this.house} house.`;
    }
}

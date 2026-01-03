// 1. Generic function
/*
- What this file teaches beginners about generics:
- Generic functions: make functions reusable for any type.
- Generic classes: hold any type of data while keeping type safety.
- Generic interfaces: define flexible key-value pairs.
- Generic constraints: restrict generics to certain types (like objects with length).
- Real-life use cases: working with arrays, key-value pairs, reusable containers.
*/
function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Harry")); // Output: Harry
console.log(identity<number>(25));      // Output: 25
console.log(identity<boolean>(true));   // Output: true

// 2. Generic function with arrays
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

const numbers = [1, 2, 3];
const names = ["Harry", "Hermione", "Ron"];

console.log(getFirstElement(numbers)); // Output: 1
console.log(getFirstElement(names));   // Output: Harry

// 3. Generic class
class DataHolder<T> {
    private data: T;

    constructor(value: T) {
        this.data = value;
    }

    getData(): T {
        return this.data;
    }

    setData(value: T): void {
        this.data = value;
    }
}

const numberHolder = new DataHolder<number>(100);
console.log(numberHolder.getData()); // Output: 100
numberHolder.setData(200);
console.log(numberHolder.getData()); // Output: 200

const nameHolder = new DataHolder<string>("Harry");
console.log(nameHolder.getData()); // Output: Harry

// 4. Generic interface
interface Pair<K, V> {
    key: K;
    value: V;
}

const person: Pair<string, number> = { key: "Harry", value: 30 };
console.log(person); // Output: { key: 'Harry', value: 30 }

// 5. Generic constraints
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(item: T): void {
    console.log(`Length is: ${item.length}`);
}

logLength([1, 2, 3, 4]);      // Output: Length is: 4
logLength("Hello Harry");      // Output: Length is: 11
// logLength(123);             //  Error: number does not have length

// 6. Real-life example: generic function for arrays
function wrapInArray<T>(value: T): T[] {
    return [value];
}

console.log(wrapInArray("Harry")); // Output: ["Harry"]
console.log(wrapInArray(42));      // Output: [42]

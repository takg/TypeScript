/*
- How to define an interface and use it to type objects.
- Optional properties with ?.
- Readonly properties to prevent modification.
- Function types inside interfaces.
- Extending interfaces to create more specific types.
- Indexable interfaces for arrays or objects with dynamic keys.
*/
// 1. Basic interface
interface Person {
    name: string;
    age: number;
    greet(): void; // function in interface
}

// Using the interface
const harry: Person = {
    name: "Harry",
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
};

harry.greet(); // Output: Hello, my name is Harry and I am 25 years old.

// 2. Interface with optional property
interface Vehicle {
    brand: string;
    model: string;
    year?: number; // optional property
}

const car1: Vehicle = {
    brand: "Toyota",
    model: "Corolla",
};

const car2: Vehicle = {
    brand: "Honda",
    model: "Civic",
    year: 2020,
};

console.log(car1, car2);

// 3. Readonly properties in interface
interface Book {
    readonly title: string;
    author: string;
}

const book: Book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
};

// book.title = "New Title"; // ❌ Error: Cannot assign to 'title' because it is a read-only property
book.author = "Someone Else"; // ✅ allowed

console.log(book);

// 4. Interface with function type
interface Calculator {
    (x: number, y: number): number; // function signature
}

const add: Calculator = (x, y) => x + y;
const multiply: Calculator = (x, y) => x * y;

console.log(add(5, 3));       // Output: 8
console.log(multiply(4, 6));  // Output: 24

// 5. Extending interfaces
interface Employee extends Person {
    employeeId: number;
    department: string;
}

const emp: Employee = {
    name: "Harry",
    age: 30,
    employeeId: 101,
    department: "IT",
    greet() {
        console.log(`Hi, I'm ${this.name} from ${this.department} department.`);
    },
};

emp.greet(); // Output: Hi, I'm Harry from IT department.

// 6. Indexable interface (for dynamic properties)
interface StringArray {
    [index: number]: string;
}

const colors: StringArray = ["Red", "Green", "Blue"];
console.log(colors[0]); // Output: Red
console.log(colors[2]); // Output: Blue

/*
- Union types (|): a variable or parameter can have multiple types.
- Intersection types (&): combine multiple types into one; must satisfy all properties.
- Using unions in functions: type narrowing with typeof or discriminated unions.
- Using intersections in objects and functions: create richer types by merging multiple interfaces.
- Real-life examples: employees, users with different roles.
*/

// 1. Union types
// A variable can hold multiple possible types
let value: string | number;

value = "Harry";
console.log("Value as string:", value); // Output: Harry

value = 25;
console.log("Value as number:", value); // Output: 25

// Using union in functions
function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(`ID as string: ${id.toUpperCase()}`);
    } else {
        console.log(`ID as number: ${id}`);
    }
}

printId("harry123"); // Output: ID as string: HARRY123
printId(101);        // Output: ID as number: 101

// 2. Union with arrays
let mixedArray: (string | number)[] = ["Harry", 25, "Hermione", 30];
console.log("Mixed array:", mixedArray); 
// Output: Mixed array: [ 'Harry', 25, 'Hermione', 30 ]

// 3. Intersection types
// Combines multiple types into one (must satisfy all)
interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: number;
    department: string;
}

type EmployeePerson = Person & Employee; // Intersection type

const harry: EmployeePerson = {
    name: "Harry",
    age: 30,
    employeeId: 101,
    department: "IT",
};

console.log("EmployeePerson:", harry);
// Output: EmployeePerson: { name: 'Harry', age: 30, employeeId: 101, department: 'IT' }

// 4. Intersection in functions
function printEmployeeDetails(emp: Person & Employee) {
    console.log(`${emp.name}, age ${emp.age}, works in ${emp.department}, ID: ${emp.employeeId}`);
}

printEmployeeDetails(harry); 
// Output: Harry, age 30, works in IT, ID: 101

// 5. Real-life example: Union and Intersection
type Admin = {
    role: "admin";
    privileges: string[];
};

type Guest = {
    role: "guest";
    visitReason: string;
};

type User = Admin | Guest; // Union: user can be Admin OR Guest

function showUserInfo(user: User) {
    console.log(`Role: ${user.role}`);
    if (user.role === "admin") {
        console.log(`Privileges: ${user.privileges.join(", ")}`);
    } else {
        console.log(`Visit reason: ${user.visitReason}`);
    }
}

const adminUser: User = { role: "admin", privileges: ["manage users", "edit content"] };
const guestUser: User = { role: "guest", visitReason: "view content" };

showUserInfo(adminUser);
/*
Output:
Role: admin
Privileges: manage users, edit content
*/

showUserInfo(guestUser);
/*
Output:
Role: guest
Visit reason: view content
*/

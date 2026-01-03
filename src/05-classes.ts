// 05-classes.ts

// 1. Base class: Person
class Person {
    constructor(public name: string, public age: number) {}

    introduce(): void {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Harry", 30);
person1.introduce(); // Output: Hi, my name is Harry and I am 30 years old.

// 2. Derived class: Employee
class Employee extends Person {
    constructor(name: string, age: number, public employeeId: number, public department: string) {
        super(name, age);
    }

    work(): void {
        console.log(`${this.name} is working in ${this.department} department.`);
    }
}

const emp = new Employee("Harry", 30, 101, "IT");
emp.introduce(); // Hi, my name is Harry and I am 30 years old.
emp.work();      // Harry is working in IT department.

// 3. Derived class: Manager (inherits from Employee)
class Manager extends Employee {
    constructor(name: string, age: number, employeeId: number, department: string, public teamSize: number) {
        super(name, age, employeeId, department);
    }

    manageTeam(): void {
        console.log(`${this.name} manages a team of ${this.teamSize} employees.`);
    }
}

const mgr = new Manager("Harry", 35, 102, "IT", 5);
mgr.introduce();    // Hi, my name is Harry and I am 35 years old.
mgr.work();         // Harry is working in IT department.
mgr.manageTeam();   // Harry manages a team of 5 employees.

// 4. Another real-life class: Customer (inherits from Person)
class Customer extends Person {
    constructor(name: string, age: number, public customerId: number) {
        super(name, age);
    }

    buyProduct(product: string): void {
        console.log(`${this.name} (Customer ID: ${this.customerId}) bought ${product}.`);
    }
}

const cust = new Customer("Harry", 28, 5001);
cust.introduce();          // Hi, my name is Harry and I am 28 years old.
cust.buyProduct("Laptop"); // Harry (Customer ID: 5001) bought Laptop.

// 5. Static property example (Company info)
class Company {
    static companyName: string = "TechCorp";

    static showCompany(): void {
        console.log(`Company: ${Company.companyName}`);
    }
}

Company.showCompany(); // Company: TechCorp

# 📘 TypeScript Basics – Learning Repository

This repository is created to **learn and practice TypeScript fundamentals** step by step.  
It covers core concepts with **simple examples**, making it suitable for beginners as well as developers coming from **JavaScript, C++, Java, or Python** backgrounds.

---

## 🎯 Objectives

- Understand why TypeScript is used
- Learn core TypeScript syntax and types
- Write type-safe JavaScript code
- Prepare for frontend (Angular/React) and backend (Node.js) usage
- Build a strong foundation for real-world projects

---

## 🛠 Prerequisites

- Basic JavaScript knowledge
- Node.js (v16+ recommended)
- npm or yarn

## ⚙️ Setup Instructions

Clone the repository:

```bash
git clone https://github.com/your-username/typescript-basics.git
cd typescript-basics
```

Install TypeScript globally (optional but recommended):
```bash
npm install -g typescript
```

Install dependencies:
```bash
npm install
```

Compile TypeScript:
```bash
tsc
```

Run compiled JavaScript:
```bash
node dist/index.js
```
## 📂 Project Structure

typescript-basics/  
│  
├── src/  
│   ├── [01-hello-world.ts](https://github.com/takg/TypeScript/blob/main/src/01-hello_world.ts)  
│   ├── [02-types.ts](https://github.com/takg/TypeScript/blob/main/src/02-types.ts)  
│   ├── 03-functions.ts  
│   ├── 04-interfaces.ts  
│   ├── 05-classes.ts  
│   ├── 06-enums.ts  
│   ├── 07-generics.ts  
│   ├── 08-union-intersection.ts  
│   ├── 09-modules.ts  
│   └── 10-async-await.ts  
│  
├── dist/              # Compiled JavaScript output  
├── tsconfig.json      # TypeScript configuration  
├── package.json  
└── README.md  

## 📘 Topics Covered
🔹 Basics

Hello World

TypeScript vs JavaScript

Compilation process

🔹 Types

number, string, boolean

any, unknown, void, never

Arrays & Tuples

🔹 Functions

Function typing

Optional & default parameters

Arrow functions

🔹 Interfaces & Types

Interface definition

Type aliases

Extending interfaces

🔹 Classes & OOP

Classes & constructors

Access modifiers (public, private, protected)

Inheritance

Readonly properties

🔹 Advanced Types

Union & intersection types

Enums

Generics

🔹 Modules

import / export

Namespaces

🔹 Async Programming

Promises

async / await

## 🧪 How to Run Individual Files

Compile a specific file:
```
tsc src/01-hello-world.ts
```

Run it:
```
node src/01-hello-world.js
```
## 📌 Useful Commands

| Command        | Description           |
| -------------- | --------------------- |
| `tsc`          | Compile TypeScript    |
| `tsc --watch`  | Compile in watch mode |
| `tsc --init`   | Create tsconfig.json  |
| `node file.js` | Run JavaScript        |

## 🤝 Contribution

This repository is for learning purposes.
Feel free to fork, experiment, and enhance it with more examples.

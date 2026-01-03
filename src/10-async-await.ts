// 1. Simple async function
async function sayHello(): Promise<string> {
    return "Hello, Harry!";
}

sayHello().then((message) => console.log(message)); 
// Output: Hello, Harry!

// 2. Async function with await
function delay(ms: number) {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

async function greetWithDelay() {
    console.log("Starting...");
    await delay(2000); // wait for 2 seconds
    console.log("Hello after 2 seconds!");
}

greetWithDelay();
// Output:
// Starting...
// (after 2 seconds) Hello after 2 seconds!

// 3. Async function that fetches data (simulated)
interface User {
    id: number;
    name: string;
}

function fetchUser(userId: number): Promise<User> {
    const users: User[] = [
        { id: 1, name: "Harry" },
        { id: 2, name: "Hermione" },
        { id: 3, name: "Ron" },
    ];

    return new Promise<User>((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((u) => u.id === userId);
            if (user) resolve(user);
            else reject(`User with id ${userId} not found`);
        }, 1500);
    });
}

async function getUser(userId: number) {
    try {
        console.log(`Fetching user with id ${userId}...`);
        const user = await fetchUser(userId);
        console.log("User found:", user);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUser(1); // User found: { id: 1, name: 'Harry' }
getUser(5); // Error: User with id 5 not found

// 4. Multiple async calls using await
async function getMultipleUsers() {
    try {
        const user1 = await fetchUser(1);
        const user2 = await fetchUser(2);
        console.log("Users:", user1, user2);
    } catch (error) {
        console.log("Error:", error);
    }
}

getMultipleUsers();
// Output:
// Users: { id: 1, name: 'Harry' } { id: 2, name: 'Hermione' }

// 5. Using async arrow function
const fetchData = async (): Promise<string> => {
    await delay(1000);
    return "Data loaded!";
};

fetchData().then((data) => console.log(data)); 
// Output (after 1 second): Data loaded!

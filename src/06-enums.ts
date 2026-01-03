// 1. Numeric enum (default starts from 0)
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

let move: Direction = Direction.Up;
console.log("Move:", move);          // Output: Move: 0
console.log("Direction.Up:", Direction.Up);   // Output: 0
console.log("Direction[0]:", Direction[0]);  // Output: Up

// 2. Numeric enum with custom values
enum StatusCode {
    Success = 200,
    NotFound = 404,
    ServerError = 500,
}

console.log("Success code:", StatusCode.Success);      // Output: 200
console.log("NotFound code:", StatusCode.NotFound);    // Output: 404

// 3. String enum
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}

let shirtColor: Color = Color.Green;
console.log("Shirt color:", shirtColor); // Output: GREEN

// 4. Using enums in a function
function respond(status: StatusCode): string {
    switch (status) {
        case StatusCode.Success:
            return "Request was successful!";
        case StatusCode.NotFound:
            return "Resource not found.";
        case StatusCode.ServerError:
            return "Server encountered an error.";
        default:
            return "Unknown status.";
    }
}

console.log(respond(StatusCode.Success));     // Request was successful!
console.log(respond(StatusCode.ServerError)); // Server encountered an error.

// 5. Real-life example: Order Status
enum OrderStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled",
}

function trackOrder(orderId: number, status: OrderStatus) {
    console.log(`Order ${orderId} is currently: ${status}`);
}

trackOrder(101, OrderStatus.Pending);    // Order 101 is currently: Pending
trackOrder(102, OrderStatus.Delivered);  // Order 102 is currently: Delivered
trackOrder(103, OrderStatus.Shipped);    // Order 103 is currently: Shipped

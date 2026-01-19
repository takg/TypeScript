# Counter App

A full-stack counter application built with **React + TypeScript** (Frontend) and **Node.js + Express + TypeScript** (Backend).

## Project Structure

```
Counter/
├── backend/                 # Node.js + Express API
│   ├── src/
│   │   ├── index.ts        # Express server & routes
│   │   ├── counter.ts      # Counter class (business logic)
│   │   └── types.ts        # TypeScript type definitions
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/                # React + TypeScript UI
│   ├── src/
│   │   ├── components/
│   │   │   ├── Counter.tsx  # Main counter component
│   │   │   └── Counter.css  # Component styles
│   │   ├── api.ts          # API service functions
│   │   ├── types.ts        # Shared type definitions
│   │   ├── App.tsx         # Root component
│   │   ├── App.css         # Global styles
│   │   └── main.tsx        # Entry point
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
└── README.md
```

## Features

- **Increment/Decrement** counter with configurable step (1, 5, 10, 100)
- **Reset** counter to zero
- **Set** counter to any custom value
- **Real-time updates** from backend API
- **Beautiful UI** with gradient styling
- **Fully typed** with TypeScript on both ends

## TypeScript Concepts Demonstrated

This project demonstrates concepts from your TypeScript learning:

- **Enums** (`CounterOperation`) - from `06-enums.ts`
- **Interfaces** (`ICounterState`, `IApiResponse`) - from `04-interfaces.ts`
- **Classes** (`Counter` class with encapsulation) - from `05-classes.ts`
- **Async/Await** (API calls) - from `10-async-await.ts`
- **Modules** (import/export) - from `09-modules.ts`
- **Functions with types** - from `03-functions.ts`

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install Backend Dependencies**

```bash
cd Counter/backend
npm install
```

2. **Install Frontend Dependencies**

```bash
cd Counter/frontend
npm install
```

### Running the App

You need to run both the backend and frontend servers.

**Terminal 1 - Start Backend (Port 3001):**

```bash
cd Counter/backend
npm run dev
```

**Terminal 2 - Start Frontend (Port 3000):**

```bash
cd Counter/frontend
npm run dev
```

3. **Open your browser** and go to: `http://localhost:3000`

## API Endpoints

| Method | Endpoint                 | Description                    |
|--------|--------------------------|--------------------------------|
| GET    | `/api/counter`           | Get current counter value      |
| POST   | `/api/counter/increment` | Increment (optional: `?step=5`)|
| POST   | `/api/counter/decrement` | Decrement (optional: `?step=5`)|
| POST   | `/api/counter/reset`     | Reset counter to zero          |
| PUT    | `/api/counter`           | Set value (body: `{value: 10}`)|
| GET    | `/api/health`            | Health check                   |

## Testing the API

You can test the API directly using curl:

```bash
# Get current value
curl http://localhost:3001/api/counter

# Increment by 1
curl -X POST http://localhost:3001/api/counter/increment

# Increment by 5
curl -X POST "http://localhost:3001/api/counter/increment?step=5"

# Decrement
curl -X POST http://localhost:3001/api/counter/decrement

# Reset
curl -X POST http://localhost:3001/api/counter/reset

# Set to specific value
curl -X PUT http://localhost:3001/api/counter \
  -H "Content-Type: application/json" \
  -d '{"value": 100}'
```

## Building for Production

**Backend:**

```bash
cd Counter/backend
npm run build
npm start
```

**Frontend:**

```bash
cd Counter/frontend
npm run build
npm run preview
```

## Technologies Used

### Backend
- Node.js
- Express.js
- TypeScript
- CORS middleware

### Frontend
- React 18
- TypeScript
- Vite (build tool)
- CSS3 (custom styling)

## Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [Vite Documentation](https://vitejs.dev/)
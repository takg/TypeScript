// Counter App - Express Server
// Main entry point for the Node.js backend

import express, { Request, Response } from 'express';
import cors from 'cors';
import { counter } from './counter';
import { IApiResponse, ICounterState, ISetValueRequest } from './types';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to create API responses
function createResponse<T>(success: boolean, data?: T, error?: string): IApiResponse<T> {
    return { success, data, error };
}

// ============================================
// API ROUTES
// ============================================

/**
 * GET /api/counter
 * Get the current counter state
 */
app.get('/api/counter', (_req: Request, res: Response) => {
    const state = counter.getState();
    res.json(createResponse<ICounterState>(true, state));
});

/**
 * POST /api/counter/increment
 * Increment the counter (optional: ?step=5)
 */
app.post('/api/counter/increment', (req: Request, res: Response) => {
    const step = parseInt(req.query.step as string) || 1;
    const state = counter.increment(step);
    res.json(createResponse<ICounterState>(true, state));
});

/**
 * POST /api/counter/decrement
 * Decrement the counter (optional: ?step=5)
 */
app.post('/api/counter/decrement', (req: Request, res: Response) => {
    const step = parseInt(req.query.step as string) || 1;
    const state = counter.decrement(step);
    res.json(createResponse<ICounterState>(true, state));
});

/**
 * POST /api/counter/reset
 * Reset the counter to zero
 */
app.post('/api/counter/reset', (_req: Request, res: Response) => {
    const state = counter.reset();
    res.json(createResponse<ICounterState>(true, state));
});

/**
 * PUT /api/counter
 * Set the counter to a specific value
 * Body: { "value": 100 }
 */
app.put('/api/counter', (req: Request, res: Response) => {
    const { value } = req.body as ISetValueRequest;

    if (typeof value !== 'number') {
        res.status(400).json(
            createResponse<null>(false, undefined, 'Value must be a number')
        );
        return;
    }

    const state = counter.setValue(value);
    res.json(createResponse<ICounterState>(true, state));
});

/**
 * GET /api/health
 * Health check endpoint
 */
app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Counter API Server running at http://localhost:${PORT}`);
    console.log(`📊 API Endpoints:`);
    console.log(`   GET    /api/counter           - Get current value`);
    console.log(`   POST   /api/counter/increment - Increment counter`);
    console.log(`   POST   /api/counter/decrement - Decrement counter`);
    console.log(`   POST   /api/counter/reset     - Reset to zero`);
    console.log(`   PUT    /api/counter           - Set specific value`);
    console.log(`   GET    /api/health            - Health check`);
});
// API Service - Handles all backend communication
// Demonstrates: async/await from 10-async-await.ts, type safety

import { IApiResponse, ICounterState } from './types';

const API_BASE = '/api';

/**
 * Fetch the current counter state
 */
export async function getCounter(): Promise<ICounterState> {
    const response = await fetch(`${API_BASE}/counter`);
    const result: IApiResponse<ICounterState> = await response.json();

    if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to fetch counter');
    }

    return result.data;
}

/**
 * Increment the counter
 */
export async function incrementCounter(step: number = 1): Promise<ICounterState> {
    const response = await fetch(`${API_BASE}/counter/increment?step=${step}`, {
        method: 'POST'
    });
    const result: IApiResponse<ICounterState> = await response.json();

    if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to increment counter');
    }

    return result.data;
}

/**
 * Decrement the counter
 */
export async function decrementCounter(step: number = 1): Promise<ICounterState> {
    const response = await fetch(`${API_BASE}/counter/decrement?step=${step}`, {
        method: 'POST'
    });
    const result: IApiResponse<ICounterState> = await response.json();

    if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to decrement counter');
    }

    return result.data;
}

/**
 * Reset the counter to zero
 */
export async function resetCounter(): Promise<ICounterState> {
    const response = await fetch(`${API_BASE}/counter/reset`, {
        method: 'POST'
    });
    const result: IApiResponse<ICounterState> = await response.json();

    if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to reset counter');
    }

    return result.data;
}

/**
 * Set counter to a specific value
 */
export async function setCounter(value: number): Promise<ICounterState> {
    const response = await fetch(`${API_BASE}/counter`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value })
    });
    const result: IApiResponse<ICounterState> = await response.json();

    if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to set counter');
    }

    return result.data;
}
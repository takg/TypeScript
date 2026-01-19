// Counter Class - Business Logic
// Demonstrates: Classes, encapsulation from 05-classes.ts

import { ICounterState, CounterOperation } from './types';

/**
 * Counter class that manages the counter state
 * Uses encapsulation to protect the internal value
 */
class Counter {
    private value: number;
    private lastOperation: CounterOperation | null;
    private updatedAt: Date;

    constructor(initialValue: number = 0) {
        this.value = initialValue;
        this.lastOperation = null;
        this.updatedAt = new Date();
    }

    /**
     * Increment the counter by a given step
     */
    public increment(step: number = 1): ICounterState {
        this.value += step;
        this.lastOperation = CounterOperation.INCREMENT;
        this.updatedAt = new Date();
        return this.getState();
    }

    /**
     * Decrement the counter by a given step
     */
    public decrement(step: number = 1): ICounterState {
        this.value -= step;
        this.lastOperation = CounterOperation.DECREMENT;
        this.updatedAt = new Date();
        return this.getState();
    }

    /**
     * Reset the counter to zero
     */
    public reset(): ICounterState {
        this.value = 0;
        this.lastOperation = CounterOperation.RESET;
        this.updatedAt = new Date();
        return this.getState();
    }

    /**
     * Set the counter to a specific value
     */
    public setValue(newValue: number): ICounterState {
        this.value = newValue;
        this.lastOperation = CounterOperation.SET;
        this.updatedAt = new Date();
        return this.getState();
    }

    /**
     * Get the current counter state
     */
    public getState(): ICounterState {
        return {
            value: this.value,
            lastOperation: this.lastOperation,
            updatedAt: this.updatedAt
        };
    }

    /**
     * Get just the current value
     */
    public getValue(): number {
        return this.value;
    }
}

// Export a singleton instance (shared across all API calls)
export const counter = new Counter(0);

// Also export the class for testing purposes
export { Counter };
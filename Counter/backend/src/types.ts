// Counter App - Type Definitions
// Demonstrates: Enums, Interfaces from your TypeScript learning

/**
 * Enum for counter operations
 * Maps to the API endpoints
 */
export enum CounterOperation {
    INCREMENT = 'increment',
    DECREMENT = 'decrement',
    RESET = 'reset',
    SET = 'set'
}

/**
 * Interface for the counter state
 */
export interface ICounterState {
    value: number;
    lastOperation: CounterOperation | null;
    updatedAt: Date;
}

/**
 * Interface for API response
 */
export interface IApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

/**
 * Interface for set value request
 */
export interface ISetValueRequest {
    value: number;
}
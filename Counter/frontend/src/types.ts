// Shared types for the frontend
// Mirrors the backend types for type safety

export enum CounterOperation {
    INCREMENT = 'increment',
    DECREMENT = 'decrement',
    RESET = 'reset',
    SET = 'set'
}

export interface ICounterState {
    value: number;
    lastOperation: CounterOperation | null;
    updatedAt: string; // Date comes as string from JSON
}

export interface IApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}
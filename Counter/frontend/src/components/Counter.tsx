// Counter Component - Main React Component
// Demonstrates: React hooks (useState, useEffect), TypeScript with React

import { useState, useEffect } from 'react';
import { ICounterState, CounterOperation } from '../types';
import {
    getCounter,
    incrementCounter,
    decrementCounter,
    resetCounter,
    setCounter
} from '../api';
import './Counter.css';

function Counter() {
    // State management using useState hook
    const [counterState, setCounterState] = useState<ICounterState | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [step, setStep] = useState<number>(1);
    const [customValue, setCustomValue] = useState<string>('');

    // Fetch initial counter value on component mount
    useEffect(() => {
        fetchCounter();
    }, []);

    // Fetch counter from API
    const fetchCounter = async (): Promise<void> => {
        try {
            setLoading(true);
            setError(null);
            const state = await getCounter();
            setCounterState(state);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
            setLoading(false);
        }
    };

    // Handle increment
    const handleIncrement = async (): Promise<void> => {
        try {
            setError(null);
            const state = await incrementCounter(step);
            setCounterState(state);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to increment');
        }
    };

    // Handle decrement
    const handleDecrement = async (): Promise<void> => {
        try {
            setError(null);
            const state = await decrementCounter(step);
            setCounterState(state);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to decrement');
        }
    };

    // Handle reset
    const handleReset = async (): Promise<void> => {
        try {
            setError(null);
            const state = await resetCounter();
            setCounterState(state);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to reset');
        }
    };

    // Handle set value
    const handleSetValue = async (): Promise<void> => {
        const value = parseInt(customValue);
        if (isNaN(value)) {
            setError('Please enter a valid number');
            return;
        }

        try {
            setError(null);
            const state = await setCounter(value);
            setCounterState(state);
            setCustomValue('');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to set value');
        }
    };

    // Get operation label for display
    const getOperationLabel = (op: CounterOperation | null): string => {
        switch (op) {
            case CounterOperation.INCREMENT:
                return 'Incremented';
            case CounterOperation.DECREMENT:
                return 'Decremented';
            case CounterOperation.RESET:
                return 'Reset';
            case CounterOperation.SET:
                return 'Set';
            default:
                return 'None';
        }
    };

    // Loading state
    if (loading) {
        return (
            <div className="counter-container">
                <div className="loading">Loading...</div>
            </div>
        );
    }

    return (
        <div className="counter-container">
            <h1 className="title">Counter App</h1>
            <p className="subtitle">React + TypeScript + Node.js</p>

            {/* Error display */}
            {error && <div className="error">{error}</div>}

            {/* Counter display */}
            <div className="counter-display">
                <span className="counter-value">{counterState?.value ?? 0}</span>
            </div>

            {/* Last operation info */}
            {counterState?.lastOperation && (
                <div className="last-operation">
                    Last operation: {getOperationLabel(counterState.lastOperation)}
                </div>
            )}

            {/* Step selector */}
            <div className="step-selector">
                <label htmlFor="step">Step: </label>
                <select
                    id="step"
                    value={step}
                    onChange={(e) => setStep(parseInt(e.target.value))}
                >
                    <option value={1}>1</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={100}>100</option>
                </select>
            </div>

            {/* Main action buttons */}
            <div className="button-group">
                <button
                    className="btn btn-decrement"
                    onClick={handleDecrement}
                >
                    - Decrement
                </button>
                <button
                    className="btn btn-increment"
                    onClick={handleIncrement}
                >
                    + Increment
                </button>
            </div>

            {/* Reset button */}
            <button
                className="btn btn-reset"
                onClick={handleReset}
            >
                Reset to Zero
            </button>

            {/* Set custom value */}
            <div className="set-value-section">
                <input
                    type="number"
                    placeholder="Enter value"
                    value={customValue}
                    onChange={(e) => setCustomValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSetValue()}
                />
                <button
                    className="btn btn-set"
                    onClick={handleSetValue}
                >
                    Set Value
                </button>
            </div>

            {/* Footer info */}
            <div className="footer">
                <p>
                    Built with React + TypeScript (Frontend) & Node.js + Express (Backend)
                </p>
            </div>
        </div>
    );
}

export default Counter;
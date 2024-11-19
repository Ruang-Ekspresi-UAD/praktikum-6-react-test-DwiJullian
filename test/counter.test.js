import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter';
import Display from './display';

describe("Counter Component in counter.js and display.js", () => {
    test('renders the initial count value as 0 in counter.js', () => {
        render(<Counter />)
        const countValue = screen.getByTestId('counter-value')
        expect(countValue).toHaveTextContent('0')
    })

    test("increments count when increment button is clicked in counter.js", () => {
        render(<Counter />)
        const countValue = screen.getByTestId('counter-value')
        const incrementButton = screen.getByTestId('increment-button')
        fireEvent.click(incrementButton)
        expect(countValue).toHaveTextContent('1')
    })

    test("decrements count when decrement button is clicked in counter.js", () => {
        render(<Counter />)
        const countValue = screen.getByTestId('counter-value')
        const decrementButton = screen.getByTestId('decrement-button')

        fireEvent.click(decrementButton)
        expect(countValue).toHaveTextContent('-1')
    })

    test("Display has a correct value in display.js", () => {
        render(<Display value ='Tombol increment/decrement' />)
        const elemen_display = screen.getByTestId('display-value')
        expect(elemen_display).toHaveTextContent(`Value: Tombol increment/decrement`)
    })
})


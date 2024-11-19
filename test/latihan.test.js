import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

describe('Counter Component in latihan.js', () => {
    test('renders the initial count value as 0 in latihan.js', () => {
        render(<Counter />)
        const counter_value = screen.getByTestId('counter-value')
        expect(counter_value).toHaveTextContent('0')
    })

    test("increments count when increment button is clicked in latihan.js", () => {
        render(<Counter />)
        const counter_value = screen.getByTestId('counter-value')
        const incrementButton = screen.getByTestId('increment-button')
        fireEvent.click(incrementButton)
        expect(counter_value).toHaveTextContent('1')
    })

    test("decrements count when decrement button is clicked in latihan.js", () => {
        render(<Counter />)
        const counter_value = screen.getByTestId('counter-value')
        const decrementButton = screen.getByTestId('decrement-button')

        fireEvent.click(decrementButton)
        expect(counter_value).toHaveTextContent('-1')
    })

    test("reset the count using reset button in latihan.js", () => {
        render(<Counter />)
        const counter_value = screen.getByTestId('counter-value')
        const reset_button = screen.getByTestId('reset-button')
        fireEvent.click(reset_button)
        expect(counter_value).toHaveTextContent('0')
    })

    test("greeting component {nama kalian} in latihan.js", () => {
        render(<Greeting name="dwi_julian_daffa"/>)
        const elemen_greeting_mahasiswa = screen.getByTestId('greeting')
        expect(elemen_greeting_mahasiswa).toHaveTextContent('Hello, dwi_julian_daffa')
    })

    test("greeting component {nama dosen kalian} in latihan.js", () => {
        render(<Greeting name="Pak_Farid_Surya" />)
        const elemen_greeting_dosen = screen.getByTestId('greeting')
        expect(elemen_greeting_dosen).toHaveTextContent('Hello, Pak_Farid_Surya')
    })

    test("triggers alert with correct message when clicked in latihan.js", () => {
        const alert_message = jest.spyOn(window, 'alert').mockImplementation(() => {});
        render(<AlertButton message="Berhasil !"/>)
        const alert_button = screen.getByTestId('alert-button')
        fireEvent.click(alert_button)
        expect(alert_message).toHaveBeenCalledWith("Berhasil !")
    })
})
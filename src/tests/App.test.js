import React from 'react'

import { render, screen } from '@testing-library/react'

import App from "../App"


test('Renders without Errors', () => {
    render(<App />)
})

test('Renders Header when app mounts', () => {
    render(<App />)
    const header = screen.getByText(/job tracker/i)
    expect(header).toBeInTheDocument()
})

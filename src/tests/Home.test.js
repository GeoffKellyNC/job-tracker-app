import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

test('Renders without Errors', () => {
    render(<Home/>)
})


it('Current App count shows on document', () => {
    render(<Home />)

    const appCount = screen.getByAltText(/current application count/i);

    expect(appCount).toBeInTheDocument();
})


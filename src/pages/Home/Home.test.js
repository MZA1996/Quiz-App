import { screen, render } from '@testing-library/react';
import React from 'react';
import store from '../../store';
import { Provider } from 'react-redux';

import Home from "."

describe('Home', () => {
    test('it renders a div', () => {
        <Provider>
        render(<Home />)
        </Provider>
        const div = screen.getByRole('homepageContainer')
        expect(div).toBeInTheDocument();
        
    })

})
import { render, screen } from '@testing-library/react';
import Welcome from './index';
import store from '../../store';
import { Provider } from 'react-redux';

it('should render the welcome div', () => {
    <Provider store={store}>
    render(<Welcome />);
    </Provider>
    const div = screen.getByRole('welcome');
    expect(div).toBeInTheDocument();
})

it('should display the New Game button', () => {
    <Provider store={store}>
    render(<Welcome />);
    </Provider>
    expect(screen.getByText('New Game')).toBeInTheDocument();
})

// const setup = () => render(<Welcome />);

// describe("Welcome", () => {
//     setup;
//   });
  
//   test('it displays logo', () => {
//     expect(screen.getByAltText('Quizzical')).toBeInTheDocument();
//   })

//   test("it displays the 'New Game'button", () => {
//     expect(screen.getByText('New Game')).toBeInTheDocument();
//   })
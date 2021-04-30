import { render, screen } from '@testing-library/react';
import Form from './components/Form'
import List from './components/List'

test('renders learn react link', () => {
  render(<List />);
  const linkElement = screen.getByText(/USER LIST/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders form', () => {
  render(<Form />);
  const linkElement = screen.getByText(/FORM/i);
  expect(linkElement).toBeInTheDocument();
});

test('get Person from Database', () => {
  
  const data = {"user.firstName": "umut",
                    "user.lastName": "deneme 2",
                    "user.gender": "m",
                    "user.birthday": "11.11.11",
                    "user.email": "saf@gmail.com",
                    "user.about": "fas"}
  render(<List data = {data }/>);
  const personElement = screen.getByAltText(/umut/i);
  expect(personElement).toBeInTheDocument();
});



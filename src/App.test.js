import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Gradebook App Component', () => {
  test('renders the default school information', () => {
    render(<App />);
    expect(screen.getByDisplayValue(/UA College/i)).toBeInTheDocument();
    expect(screen.getByText(/Transmutation Table/i)).toBeInTheDocument();
  });

  test('calculates correct weighted average and transmuted grade via UI', () => {
    render(<App />);

    fireEvent.change(document.querySelector('input[name="activities"]'), { target: { value: '90' } });
    fireEvent.change(document.querySelector('input[name="performance"]'), { target: { value: '90' } });
    fireEvent.change(document.querySelector('input[name="midterm"]'), { target: { value: '90' } });
    fireEvent.change(document.querySelector('input[name="finals"]'), { target: { value: '90' } });

    fireEvent.click(screen.getByText(/Calculate Final Grade/i));

    expect(screen.getByText(/Weighted Average:/i)).toBeInTheDocument();
    expect(screen.getByText('90')).toBeInTheDocument();

    // 90 Average now falls in the 90-100 bracket, which is 3.0
    expect(screen.getByText('4', { selector: 'span.transmuted-highlight' })).toBeInTheDocument();
  });

  test('shows error for invalid input above 100', () => {
    render(<App />);
    fireEvent.change(document.querySelector('input[name="activities"]'), { target: { value: '150' } });
    fireEvent.click(screen.getByText(/Calculate Final Grade/i));
    expect(screen.getByText(/All scores must be between 0 and 100./i)).toBeInTheDocument();
  });
});
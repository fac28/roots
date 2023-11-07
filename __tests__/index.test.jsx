import React from 'react';
import { render } from '@testing-library/react';
// import Home from '../pages/index'
import '@testing-library/jest-dom';
import Slide from '../components/Slide';

describe('Slide', () => {
  it('renders a slide', () => {
    const { container } = render(<Slide />);
    const slideElement = container.querySelector('.glide__slide');
    expect(slideElement).toBeInTheDocument();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
// import Home from '../pages/index'
import '@testing-library/jest-dom';
import Slide from '../components/Slide';

describe('Slide', () => {
  it('renders a slide', () => {
    const { container } = render(
      <Slide
        h1='Gardening in testing'
        h2='Winter is on its testing'
        p='Leaves are falling rapidly, and wind and rain are on the
      increase. Tender plants will need protecting from frost,
      gales and freezing rains. Move plants into the greenhouse,
      or into a sheltered spot, but if you can`t, it is worth
      wrapping plants or pots. Remember winter can be a tough time
      for birds in terms of water and food, so keep supplies well
      topped testing.'
        slideNo='slidetesting'
      />
    );
    const slideElement = container.querySelector('.glide__slide');
    expect(slideElement).toBeInTheDocument();
  });
});

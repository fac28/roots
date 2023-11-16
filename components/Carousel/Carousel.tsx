'use client';
import React, { useEffect, ReactNode } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import './CarouselStyles.css';
import Slide from './Slide';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const Carousel = () => {
  useEffect(() => {
    new Glide('.glide', {
      type: 'carousel',
    }).mount();
  }, []);

  return (
    <div className='absolute bottom-12 w-full'>
      <div className='glide wfull custom-carousel-width bg-white'>
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides'>
            <Slide
              h1='Gardening in November'
              h2='Winter is on its way'
              p='Leaves are falling rapidly, and wind and rain are on the
              increase. Tender plants will need protecting from frost,
              gales and freezing rains. Move plants into the greenhouse,
              or into a sheltered spot, but if you can`t, it is worth
              wrapping plants or pots. Remember winter can be a tough time
              for birds in terms of water and food, so keep supplies well
              topped up.'
              slideNo='slide1'
            />
            <Slide
              h1='Why gardening makes us feel better – and how to make the
              most of it'
              h2='Gardens can be great for the environment and for wildlife -
              and they`re good for people too, according to an increasing
              body of research'
              p='Gardening has a long and connected history to science and
              medicine. For centuries gardens have been a source not only
              of food on the table but also remedies to treat common
              ailments. Some of these, such as St John`s wort for
              depression and willow for headaches, have been embraced by
              modern science. But what about the benefits of gardens and
              gardening themselves? Are they well-evidenced, and if so,
              how can we make the most of them?'
              slideNo='slide2'
            />
            {/* https://www.rhs.org.uk/advice/health-and-wellbeing/articles/why-gardening-makes-us-feel-better */}
            <Slide
              h1='After absence, the heart really has grown fonder'
              h2=' After time away with an injury, I make a long overdue visit
              to the plot to see how things have been getting on without
              me'
              p='I have pined for the plot. Like a lost love affair. I have
              been injured, exiled for too many weeks. Separated, sitting,
              lying, fretting. Wondering how it grows. What’s happened
              with the seedlings? Will there be autumn or winter leaves to
              eat? Who’ll help protect it from predators now I am not
              around?'
              slideNo='slide3'
            />
            {/* https://www.theguardian.com/lifeandstyle/2023/nov/05/a-return-after-absence-really-does-make-the-heart-grow-fonder */}
          </ul>
        </div>
        <div className='glide__arrows' data-glide-el='controls'>
          <button
            className='glide__arrow glide__arrow--left'
            data-glide-dir='<'
          >
            <FaChevronLeft />
          </button>
          <button
            className='glide__arrow glide__arrow--right'
            data-glide-dir='>'
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

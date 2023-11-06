// components/GlideCarousel.tsx
'use client';
import React, { useEffect, ReactNode } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';

type GlideCarouselProps = {
  children: ReactNode;
};

const Carousel: React.FC<GlideCarouselProps> = ({ children }) => {
  useEffect(() => {
    new Glide('.glide', {
      // your settings here
    }).mount();
  }, []);

  const childArray = React.Children.toArray(children) as React.ReactElement[];

  return (
    <div className='glide'>
      <div className='glide__track' data-glide-el='track'>
        <ul className='glide__slides'>
          <li key='slide1' className='glide__slide'>
            <div className='h-64 bg-blue-200 flex items-center justify-center'>
              Slide 1
            </div>
          </li>
          <li key='slide2' className='glide__slide'>
            <div className='h-64 bg-red-200 flex items-center justify-center'>
              Slide 2
            </div>
          </li>
          <li key='slide3' className='glide__slide'>
            <div className='h-64 bg-green-200 flex items-center justify-center'>
              Slide 3
            </div>
          </li>
        </ul>
      </div>
      <div className='glide__arrows' data-glide-el='controls'>
        <button className='glide__arrow glide__arrow--left' data-glide-dir='<'>
          prev
        </button>
        <button className='glide__arrow glide__arrow--right' data-glide-dir='>'>
          next
        </button>
      </div>
      <div className='glide__bullets' data-glide-el='controls[nav]'>
        {childArray.map((_, index) => (
          <button
            key={index}
            className='glide__bullet'
            data-glide-dir={`=${index}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

// components/GlideCarousel.tsx
'use client';
import React, { useEffect, ReactNode } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import Image from 'next/image';

type GlideCarouselProps = {
  children: ReactNode;
};

const Carousel: React.FC<GlideCarouselProps> = ({ children }) => {
  useEffect(() => {
    new Glide('.glide', {
      type: 'carousel',
    }).mount();
  }, []);

  const childArray = React.Children.toArray(children) as React.ReactElement[];

  return (
    <div className='absolute bottom-0 left-0 w-full bg-primaryLight'>
      <div className='glide'>
        <div className='glide__arrows bg-white' data-glide-el='controls'>
          <button
            className='glide__arrow glide__arrow--left'
            data-glide-dir='<'
          >
            previous
          </button>
          <button
            className='glide__arrow glide__arrow--right'
            data-glide-dir='>'
          >
            next
          </button>
        </div>
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides'>
            <li key='slide1' className='glide__slide'>
              <div className='h-64 bg-primaryLight flex'>
                <div className='items-center justify-center '>
                  <h1 className='font-bold text-xl mb-2 pt-5 mx-10'>
                    Gardening in November
                  </h1>
                  <h2 className='font-bold mx-10'>Winter is on its way</h2>
                  <p className='mx-10'>
                    Leaves are falling rapidly, and wind and rain are on the
                    increase. Tender plants will need protecting from frost,
                    gales and freezing rains. Move plants into the greenhouse,
                    or into a sheltered spot, but if you can't, it is worth
                    wrapping plants or pots. Remember winter can be a tough time
                    for birds in terms of water and food, so keep supplies well
                    topped up.
                  </p>
                </div>
                <div className='w-1/4 flex justify-center items-center '>
                  <Image
                    src='https://images.unsplash.com/photo-1571030692815-cd433bb2657d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXV0dW1ufGVufDB8fDB8fHwy'
                    alt='Frosty Forest'
                    width={200}
                    height={170}
                    style={{ minWidth: '180px' }}
                  />
                </div>
              </div>
            </li>

            <li key='slide2' className='glide__slide'>
              <div className='h-64 bg-primaryLight flex'>
                <div className='items-center justify-center '>
                  <h1 className='font-bold text-xl mb-2 pt-5 mx-10'>
                    Why gardening makes us feel better – and how to make the
                    most of it
                  </h1>
                  <h2 className='font-bold mx-10'>
                    Gardens can be great for the environment and for wildlife -
                    and they’re good for people too, according to an increasing
                    body of research
                  </h2>

                  <p className='mx-10'>
                    Gardening has a long and connected history to science and
                    medicine. For centuries gardens have been a source not only
                    of food on the table but also remedies to treat common
                    ailments. Some of these, such as St John’s wort for
                    depression and willow for headaches, have been embraced by
                    modern science. But what about the benefits of gardens and
                    gardening themselves? Are they well-evidenced, and if so,
                    how can we make the most of them?
                  </p>
                  {/* https://www.rhs.org.uk/advice/health-and-wellbeing/articles/why-gardening-makes-us-feel-better */}
                </div>
                <div className='w-1/4 flex justify-center items-center '>
                  <Image
                    src='https://images.unsplash.com/photo-1571030692815-cd433bb2657d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXV0dW1ufGVufDB8fDB8fHwy'
                    alt='Frosty Forest'
                    width={200}
                    height={170}
                    style={{ minWidth: '180px' }}
                  />
                </div>
              </div>
            </li>

            <li key='slide3' className='glide__slide'>
              <div className='h-64 bg-primaryLight flex'>
                <div className='items-center justify-center'>
                  <h1 className='font-bold text-xl mb-2 pt-5 mx-10'>
                    After absence, the heart really has grown fonder
                  </h1>
                  <h2 className='font-bold mx-10'>
                    After time away with an injury, I make a long overdue visit
                    to the plot to see how things have been getting on without
                    me
                  </h2>
                  <p className='mx-10'>
                    I have pined for the plot. Like a lost love affair. I have
                    been injured, exiled for too many weeks. Separated, sitting,
                    lying, fretting. Wondering how it grows. What’s happened
                    with the seedlings? Will there be autumn or winter leaves to
                    eat? Who’ll help protect it from predators now I am not
                    around?
                  </p>
                  {/* https://www.theguardian.com/lifeandstyle/2023/nov/05/a-return-after-absence-really-does-make-the-heart-grow-fonder */}
                </div>
                <div className='w-1/4 flex justify-center items-center '>
                  <Image
                    src='https://images.unsplash.com/photo-1571030692815-cd433bb2657d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXV0dW1ufGVufDB8fDB8fHwy'
                    alt='Frosty Forest'
                    width={200}
                    height={170}
                    style={{ minWidth: '180px' }}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* <div className="glide__bullets" data-glide-el="controls[nav]">
        <button className="glide__bullet" data-glide-dir="=0"></button>
        <button className="glide__bullet" data-glide-dir="=1"></button>
        <button className="glide__bullet" data-glide-dir="=2"></button>
    </div> */}
      </div>
    </div>
  );
};

export default Carousel;

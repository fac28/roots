type children = {
  h1: string;
  h2: string;
  p: string;
  slideNo: string;
};

const Slide = ({ h1, h2, p, slideNo }: children) => {
  return (
    <li key={slideNo} className='glide__slide'>
      <div className='h-64 bg-primaryLight flex'>
        <div className='items-center justify-center'>
          <h1 className='font-bold text-xl mb-2 pt-5 mx-10'>{h1}</h1>
          <h2 className='font-bold mx-10'>{h2}</h2>
          <p className='mx-10'>{p}</p>
          {/* https://www.theguardian.com/lifeandstyle/2023/nov/05/a-return-after-absence-really-does-make-the-heart-grow-fonder */}
        </div>
      </div>
    </li>
  );
};

export default Slide;

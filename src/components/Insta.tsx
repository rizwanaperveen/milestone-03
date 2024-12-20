import React from 'react';
import Image from 'next/image';

const Insta = () => {
  return (
    <div className='w-[1440px] h-[450px] text-center flex flex-col md:flex-row justify-center items-center'>
      <div className='w-[1440px] h-[450px] text-center ml-16'>
        <Image src="/Group47.png" alt="image" width={1440} height={450} />
    </div>
    </div>
  )
}

export default Insta
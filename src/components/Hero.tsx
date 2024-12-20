import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <div className="bg-[#FBEBB5] h-screen w-full flex justify-around items-center flex-col md:flex-row">
        {/*left*/}
        <div className="flex flex-col justify-center items-center md:w-1/2 lg:w-1/2 xl:w-1/2">
          <h1 className="text-6xl font-bold text-black text-center md:text-left">Rocket single seater</h1>
          <h2 className="text-2xl text-black underline text-center md:text-left mt-4">Shop Now</h2>
        </div>
        {/*right*/}
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-center items-center">
          <Image src="/sofa1.png" alt="image" width={500} height={500} className="w-full h-auto" />
        </div>
      </div>
    </>
  );
};

export default Hero;

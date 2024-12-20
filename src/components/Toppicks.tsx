import React from 'react';
import Image from 'next/image';

const Toppicks = () => {
  return (
    <>
      <div className="w-full h-auto text-center mt-12 mx-20">
        <div className="w-full h-auto text-4xl font-bold text-center mt-10">
          <h1>Top Picks For You</h1>
        </div>
        <div className="w-full h-auto text-sm text-[#9f9f9f] text-center mt-2">
          <p>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        </div>
        <div className="w-full h-auto mt-20 mb-20">
          <div className="flex flex-col md:flex-row justify-center gap-10">
            <div className="w-full h-auto md:w-1/2 lg:w-1/4 xl:w-1/4">
              <Image src="/Group18.png" alt="image" width={280} height={372} className="w-full h-auto" />
            </div>
            <div className="w-full h-auto md:w-1/2 lg:w-1/4 xl:w-1/4">
              <Image src="/Group15.png" alt="image" width={280} height={372} className="w-full h-auto" />
            </div>
            <div className="w-full h-auto md:w-1/2 lg:w-1/4 xl:w-1/4">
              <Image src="/Group16.png" alt="image" width={280} height={372} className="w-full h-auto" />
            </div>
            <div className="w-full h-auto md:w-1/2 lg:w-1/4 xl:w-1/4">
              <Image src="/Group17.png" alt="image" width={280} height={372} className="w-full h-auto" />
            </div>
          </div>
          <div className="w-full h-auto text-center mt-20">
            <button className="w-56 h-12 text-center text-xl border-black border-2 hover:bg-slate-400 hover:text-white">View More</button>

             </div>
        </div>
      </div>
    </>
  );
};

export default Toppicks;


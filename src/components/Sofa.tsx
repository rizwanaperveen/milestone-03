'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Sofa = () => {
  const [showItem, setShowItem] = useState(false);

  const handleOrder = () => {
    setShowItem(showItem === true ? false : true);
  }

  return (
    <div>
      <div className="w-full h-screen sm:mb-5 flex justify-center items-center bg-[#FFF9E5]">
        <div className="w-full h-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <Image src="/Group23a.png" alt="image" width={983} height={799} className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-center items-center">
          <div className="w-full h-auto text-center space-y-6">
            <h2 className="text-2xl">New Arrivals</h2>
            <h1 className="text-5xl font-bold">Asgaard sofa</h1>
            <Link href="../singleItem">
              <button className="w-56 h-12 text-xl border-black border-2 mt-5" onClick={handleOrder}>Order Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sofa;

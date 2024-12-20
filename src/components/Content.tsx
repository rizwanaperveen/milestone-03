import React from 'react';
import Image from 'next/image';

const Content = () => {
  return (
    <div>
      <div className="h-auto w-full bg-[#FAF4F4] flex justify-around items-center flex-col md:flex-row">
        <div className="w-full h-auto md:w-1/2 lg:w-1/2 xl:w-1/2">
          <Image src="/Group9.png" alt="image" width={500} height={500} className="w-full h-auto" />
        </div>
        <div className="w-full h-auto md:w-1/2 lg:w-1/2 xl:w-1/2">
          <Image src="/Group8.png" alt="image" width={500} height={500} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Content;

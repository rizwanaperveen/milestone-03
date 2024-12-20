import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <div className="w-full h-auto mt-20">
        <div className="w-full h-auto p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center">
            <div className="w-full h-auto my-6 text-[#9F9F9F]">
              <p>400 University Drive Suite 200 Coral</p>
              <p>Gables,</p>
              <p>FL 33134 USA</p>
            </div>
            <div className="w-full h-auto my-6">
              <h1 className="text-[#9F9F9F] mb-6">Links</h1>
              <ul>
                <li className="my-6">Home</li>
                <li className="my-6">Shop</li>
                <li className="my-6">Shop</li>
                <li className="my-6">About</li>
                <li className="my-6">Contact</li>
              </ul>
            </div>
            <div className="w-full h-auto my-6">
              <h1 className="text-[#9F9F9F] mb-6">Help</h1>
              <ul>
                <li className="my-6"><Link href="/myaccount">Payment Options</Link></li>
                <li className="my-6">Returns</li>
                <li className="my-6">Privacy Policies</li>
              </ul>
            </div>
            <div className="w-full h-auto my-6">
              <p className="text-[#9F9F9F] mb-6">NewsLetter</p>
              <div className="flex justify-between underline">
                <p className="text-[#9F9F9F]">Enter Your Email Address</p>
                <p>SUBSCRIBE</p>
                </div>
            </div>
          </div>
          <div className="w-full h-auto mt-6 border-t-2 border-slate-400 flex items-center justify-center">
            2022 Meubel House. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;



import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  return (
    <div>
      <div className="w-full h-auto py-10">
        <div className="w-full h-auto text-center mb-16">
          <h1 className="text-4xl font-bold">Our Blogs</h1>
          <p className="text-center">Find a bright ideal to suit your taste with our great selection</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full h-auto justify-center">
          <div className="w-full h-auto">
            <Image src="/Group50.png" alt="image" width={393} height={555} className="w-full h-auto" />
          </div>
          <div className="w-full h-auto">
            <Image src="/Group49.png" alt="image" width={393} height={555} className="w-full h-auto" />
          </div>
          <div className="w-full h-auto">
            <Image src="/Group48.png" alt="image" width={393} height={555} className="w-full h-auto" />
          </div>
        </div>
        <div className="w-full h-auto text-center mt-20">
          <Link href="../blog">
            <button className="w-40 h-12 rounded-lg text-xl border-black border-2 text-center hover:bg-slate-400 hover:text-white">View All Post</button>
          </Link>
        </div>
      </div>
      </div>
  );
};

export default Blog;


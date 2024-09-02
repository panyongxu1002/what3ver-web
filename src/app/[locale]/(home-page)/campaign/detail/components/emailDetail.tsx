'use client';

import * as React from 'react';

export default function EmailDetail() {
  const data = localStorage.getItem('data');

  if (!data) {
    return <div />;
  }

  const msg = JSON.parse(data);

  return (
    <div className="flex flex-col items-start overflow-hidden p-6 max-md:px-5">
      <div className=" rounded-xl bg-white bg-opacity-60 p-6 max-md:px-5 ">
        <div className="flex items-center gap-2">
          <div className="my-auto flex size-6 items-center gap-2 self-stretch rounded-[50px] bg-indigo-600 bg-opacity-10 p-1">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec6aaf37381e3c8e8ab70714c148cd045b5fe8709cfbfd3d4b85988fd15936a2?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd"
              className="aspect-square w-4 object-contain"
            />
          </div>
          <div className="my-auto self-stretch text-base font-medium uppercase tracking-normal text-black text-opacity-90">
            {msg.subject}
          </div>
        </div>
        <div className="mt-6 self-stretch text-base leading-6 tracking-normal text-black max-md:max-w-full">
          {msg.body}
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/82147d41ec57266c431b799f71666dc656da1e9e59b8270fb2b735def138d928?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd"
          className="mt-6 aspect-[5] w-[200px] max-w-full object-contain"
        />
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center gap-2.5 overflow-hidden whitespace-nowrap bg-white text-xl font-extrabold leading-none text-black text-opacity-90">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ee3b924c8d5dbe7783578d0982dcb12f4f455b0349e9d4251bff958fd3e3787?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd"
        alt="What3ver logo"
        className="my-auto aspect-square w-9 shrink-0 self-stretch object-contain"
      />
      <h1 className="my-auto gap-5 self-stretch">WHAT3VER</h1>
    </header>
  );
};

export default Header;

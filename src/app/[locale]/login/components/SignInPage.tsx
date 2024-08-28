/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Footer from './Footer';
import Header from './Header';
import SignInForm from './SignInForm';

const SignInPage: React.FC = () => {
  return (
    <main className="relative flex size-full min-h-[1024px] flex-col items-center justify-center overflow-hidden rounded px-20 py-40 max-md:max-w-full max-md:px-5 max-md:py-24">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e83128a68aed378833ef0214eac22f4305427df97473ca19a5edb769eef0cd4?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <section className="relative mb-0 flex min-h-[693px] w-[607px] max-w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-white max-md:mb-2.5">
        <Header />
        <SignInForm />
        <Footer />
      </section>
    </main>
  );
};

export default SignInPage;

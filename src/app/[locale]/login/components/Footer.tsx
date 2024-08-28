/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-6 flex w-full flex-wrap items-start justify-center gap-1 max-md:max-w-full">
      <p className="text-base tracking-normal text-black text-opacity-60">
        Didn't have a account{' '}
      </p>
      <div className="flex w-[95px] flex-col">
        <a href="#" className="text-base tracking-normal text-indigo-600">
          Sign up here{' '}
        </a>
        <div className="flex w-full flex-col justify-center py-0.5">
          <div className="h-px shrink-0" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

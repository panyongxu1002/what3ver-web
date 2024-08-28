/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import InputField from './InputField';

const SignInForm: React.FC = () => {
  return (
    <form className="mt-6 flex w-[522px] max-w-full flex-col justify-center overflow-hidden bg-white">
      <h2 className="mt-[30px] flex w-full items-center p-4 text-2xl leading-none text-black text-opacity-90 max-md:max-w-full">
        Sign in Your What3ver Account
      </h2>
      <div className="mt-6 flex w-full flex-col items-end p-4 max-md:max-w-full">
        <InputField label="Email Address" type="email" />
        <InputField label="Password" type="password" />
        <div className="flex w-[223px] max-w-full flex-col underline">
          <a
            href="#"
            className="self-end text-base tracking-normal text-indigo-600"
          >
            Forgot password
          </a>
          <div className="flex w-full flex-col justify-center py-0.5">
            <div className="h-px shrink-0" />
          </div>
        </div>
        <div className="flex w-2 flex-col items-start">
          <div className="flex min-h-[16px] w-full" />
        </div>
        <button
          type="submit"
          className="flex w-full flex-col items-center justify-center self-stretch overflow-hidden whitespace-nowrap rounded-lg bg-indigo-600 px-6 py-2 text-base font-medium uppercase leading-7 tracking-wide text-white shadow max-md:max-w-full max-md:px-5"
        >
          CONTINUE
        </button>
      </div>
    </form>
  );
};

export default SignInForm;

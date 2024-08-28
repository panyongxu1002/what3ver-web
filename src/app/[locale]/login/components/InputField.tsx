/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type }) => {
  return (
    <>
      <div className="flex w-full flex-col self-stretch text-base tracking-normal text-black text-opacity-60 max-md:max-w-full">
        <div className="flex w-full flex-col rounded px-3 max-md:max-w-full">
          <label className="w-full flex-1 shrink self-stretch overflow-hidden py-4 max-md:max-w-full">
            {label}
          </label>
        </div>
      </div>
      <div className="flex w-2 flex-col items-start">
        <input
          type={type}
          className="flex min-h-[16px] w-full"
          aria-label={label}
        />
      </div>
    </>
  );
};

export default InputField;

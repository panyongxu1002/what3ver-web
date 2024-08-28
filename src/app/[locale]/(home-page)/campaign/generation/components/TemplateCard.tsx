/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface TemplateCardProps {
  icon: string;
  title: string;
  description: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex min-w-[240px] flex-1 shrink basis-0 flex-col justify-center rounded border-2 border-solid border-indigo-600 bg-indigo-600 bg-opacity-0 p-6 max-md:max-w-full max-md:px-5">
      <div className="flex w-full flex-wrap items-center justify-center gap-2 max-md:max-w-full">
        <div className="my-auto flex w-8 items-start gap-2.5 self-stretch">
          <img
            loading="lazy"
            src={icon}
            className="aspect-square w-8 rounded-[100px] object-contain"
            alt=""
          />
        </div>
        <h2 className="my-auto self-stretch text-center text-xl font-medium leading-relaxed tracking-normal text-indigo-600">
          {title}
        </h2>
      </div>
      <p className="mt-4 w-full text-center text-sm leading-none tracking-normal text-black text-opacity-60 max-md:max-w-full">
        {description}
      </p>
    </div>
  );
};

export default TemplateCard;

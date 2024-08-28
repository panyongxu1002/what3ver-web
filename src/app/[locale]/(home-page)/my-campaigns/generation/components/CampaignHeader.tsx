/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/button-has-type */
import React from 'react';

interface CampaignHeaderProps {
  title: string;
}

const CampaignHeader: React.FC<CampaignHeaderProps> = ({ title }) => {
  return (
    <header className="flex w-full flex-col max-md:max-w-full">
      <nav className="flex items-center self-start text-base tracking-normal text-black text-opacity-60">
        <div className="my-auto flex items-center gap-2 self-stretch">
          <div className="my-auto self-stretch">My Campaigns</div>
        </div>
        <div className="my-auto h-6 w-[23px] self-stretch whitespace-nowrap">
          {' '}
          /{' '}
        </div>
        <div className="my-auto flex items-center gap-2 self-stretch text-black text-opacity-90">
          <div className="my-auto self-stretch">{title}</div>
        </div>
      </nav>
      <div className="mt-2 flex min-h-[36px] w-full flex-wrap items-center justify-between gap-10 max-md:max-w-full">
        <h1 className="my-auto flex min-w-[240px] items-center justify-center gap-2.5 self-stretch text-2xl leading-none text-black text-opacity-90">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3f468f01354ddde9a494b2fa58809ff485245db49f2ba67fded5b3d34ffc6de?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd"
            className="my-auto aspect-square w-6 shrink-0 self-stretch object-contain"
            alt=""
          />
          <span className="my-auto self-stretch">{title}</span>
        </h1>
        <div className="my-auto flex h-9 min-w-[240px] items-center gap-4 self-stretch whitespace-nowrap text-sm font-medium uppercase leading-6 tracking-wide">
          <button className="my-auto flex min-h-[36px] flex-col items-center justify-center self-stretch overflow-hidden rounded-lg border border-solid border-indigo-600 border-opacity-50 px-4 py-1.5 text-indigo-600">
            <div className="flex items-center justify-center gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c6604788b46bff314af39e6622339d4b5c9e65ab90b7f8eca3f00a67f7be326?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd"
                className="my-auto aspect-[0.8] w-4 shrink-0 self-stretch object-contain"
                alt=""
              />
              <span className="my-auto self-stretch">Overview</span>
            </div>
          </button>
          <button className="my-auto flex min-h-[36px] flex-col items-center justify-center self-stretch overflow-hidden rounded-lg bg-black bg-opacity-10 px-4 py-1.5 text-black text-opacity-40">
            <div className="flex items-center justify-center gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3cbca1068a8a18acd58d0b4d0b3b696c2f6218ea1a99bbf901aada3b3204cbb?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd"
                className="my-auto aspect-[0.8] w-4 shrink-0 self-stretch object-contain"
                alt=""
              />
              <span className="my-auto self-stretch">Export</span>
            </div>
          </button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b9a3e0cf680d128fea2024bbc9aa658a02ba617ce46683a213a58be5b7b9d43?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd"
            className="my-auto aspect-[2] w-20 shrink-0 self-stretch object-contain"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default CampaignHeader;

import * as React from 'react';

import Test from './generation/components/Test';

export default function MyCampaigns(_props: { params: { locale: string } }) {
  return (
    // <div className="flex w-full flex-col p-[24px] max-md:max-w-full">
    //   <div className="flex w-full flex-col items-start text-2xl leading-none text-black text-opacity-90 max-md:max-w-full">
    //     <div className="flex items-center justify-center gap-2">
    //       <img
    //         loading="lazy"
    //         src="https://cdn.builder.io/api/v1/image/assets/TEMP/4927a167286b87295ca3d25777e31e80dbccf6da29e4ed0ef8f57b466982ab02?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd"
    //         className="my-auto aspect-square w-8 shrink-0 self-stretch object-contain"
    //       />
    //       <div className="my-auto self-stretch">My Campaigns</div>
    //     </div>
    //   </div>
    //   <div className="mt-6 flex w-full items-start gap-5 max-md:max-w-full">
    //     <div className="flex w-full min-w-[240px] flex-1 shrink basis-0 flex-col justify-center rounded border-2 border-solid border-indigo-600 bg-indigo-600 bg-opacity-0 p-6 max-md:max-w-full max-md:px-5">
    //       <div className="flex w-full flex-wrap items-center justify-center gap-2 max-md:max-w-full">
    //         <div className="my-auto flex w-8 items-start gap-2.5 self-stretch">
    //           <img
    //             loading="lazy"
    //             src="https://cdn.builder.io/api/v1/image/assets/TEMP/42b4329bf5087093df4de78129b32843a32ca640d84edefedaf746fac009ff19?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd"
    //             className="aspect-square w-8 rounded-[100px] object-contain"
    //           />
    //         </div>
    //         <div className="my-auto self-stretch text-center text-xl font-medium leading-relaxed tracking-normal text-indigo-600">
    //           + New campaign
    //         </div>
    //       </div>
    //       <div className="mt-4 flex w-full flex-col text-center text-sm leading-none tracking-normal text-black text-opacity-60 max-md:max-w-full">
    //         <div className="w-full max-md:max-w-full">
    //           Quickly create email templates and video scripts for a cohesive,
    //           on-brand campaign.
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex w-full flex-wrap items-center justify-between gap-10 pt-[48px] max-md:max-w-full">
    //     <div className="my-auto flex w-[506px] min-w-[240px] flex-col self-stretch max-md:max-w-full">
    //       <div className="flex w-full flex-col max-md:max-w-full">
    //         <div className="flex w-full flex-col rounded-lg border border-solid border-black border-opacity-20 px-3 max-md:max-w-full">
    //           <div className="flex min-h-[24px] w-full min-w-[24px] flex-wrap items-center overflow-hidden py-2 max-md:max-w-full">
    //             <div className="my-auto flex h-px w-8 items-center self-stretch pr-2">
    //               <img
    //                 loading="lazy"
    //                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/294830d8e760e3fc5a12b7d0bdaca360134683515869793e0350ce57530f3690?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd"
    //                 className="my-auto aspect-square w-6 self-stretch object-contain"
    //               />
    //             </div>
    //             <div className="my-auto flex-1 shrink basis-0 self-stretch text-sm leading-none tracking-normal text-black text-opacity-60 max-md:max-w-full">
    //               Search campaigns
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="my-auto flex items-center gap-2 self-stretch text-sm leading-none tracking-normal text-black text-opacity-90">
    //       <div className="my-auto self-stretch">Newest created</div>
    //       <img
    //         loading="lazy"
    //         src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb73a8f12e8a9633632bf7783e21afc039a96c31c38a24e5071e858d15618e0d?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd"
    //         className="my-auto aspect-square w-6 shrink-0 self-stretch object-contain"
    //       />
    //     </div>
    //   </div>
    //   <div className="flex w-full flex-wrap items-center justify-between pt-[48px] max-md:max-w-full">
    //     <div className="my-auto flex min-w-[240px] flex-1 shrink basis-0 flex-wrap items-center gap-4 self-stretch max-md:max-w-full">
    //       <div className="my-auto gap-2.5 self-stretch text-base leading-7 tracking-normal text-black text-opacity-60">
    //         Showing 1 - 5 of 5
    //       </div>
    //       <div className="my-auto flex items-start gap-1.5 self-stretch overflow-hidden whitespace-nowrap text-center text-sm leading-none tracking-normal text-black text-opacity-90">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/978bcaf22bd52112a5f09229542622fbc5dd33f1a007584b8d2d1e5dd5184eec?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd"
    //           className="aspect-square w-[26px] shrink-0 object-contain"
    //         />
    //         <div className="flex w-[26px] flex-col overflow-hidden">
    //           <div className="size-[26px] overflow-hidden rounded-[100px] bg-black bg-opacity-10 px-2.5">
    //             1
    //           </div>
    //         </div>
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f284aa1ab37494ba1be0f871761f86dd44fb542a8c739196581a64406e2d4ac?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd"
    //           className="aspect-square w-[26px] shrink-0 object-contain"
    //         />
    //       </div>
    //     </div>
    //     <div className="my-auto flex items-center gap-4 self-stretch">
    //       <div className="my-auto self-stretch text-base leading-7 tracking-normal text-black text-opacity-60">
    //         0 selected
    //       </div>
    //       <div className="my-auto flex w-10 flex-col items-center justify-center self-stretch overflow-hidden rounded-[100px] p-2">
    //         <div className="flex w-6 items-start">
    //           <img
    //             loading="lazy"
    //             src="https://cdn.builder.io/api/v1/image/assets/TEMP/d62738dd3e3f309cb3527b0b7eb57b8547a3b809b057b37c2eaba4a8bf041899?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd"
    //             className="aspect-square w-6 object-contain"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex w-full flex-wrap items-center gap-4 px-4 max-md:max-w-full">
    //     <div className="my-auto flex min-w-[240px] items-center gap-4 self-stretch">
    //       <div className="my-auto flex w-[42px] items-center self-stretch overflow-hidden">
    //         <div className="my-auto flex w-[42px] items-start gap-2.5 self-stretch rounded-[100px] p-2.5">
    //           <img
    //             loading="lazy"
    //             src="https://cdn.builder.io/api/v1/image/assets/TEMP/a87f606dfb2db4f8c58403152808c0ea4ef61c81be73b524682ab7c43446e5a9?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd"
    //             className="aspect-square w-6 object-contain"
    //           />
    //         </div>
    //       </div>
    //       <div className="my-auto w-[260px] min-w-[240px] self-stretch bg-black bg-opacity-0 py-4 text-sm font-medium leading-6 tracking-normal text-black text-opacity-90">
    //         Campaign Name
    //       </div>
    //     </div>
    //     <div className="my-auto flex-1 shrink self-stretch whitespace-nowrap bg-black bg-opacity-0 py-4 text-sm font-medium leading-6 tracking-normal text-black text-opacity-90">
    //       Content
    //     </div>
    //     <div className="my-auto flex-1 shrink self-stretch bg-black bg-opacity-0 py-4 text-sm font-medium leading-6 tracking-normal text-black text-opacity-90">
    //       Created on
    //     </div>
    //     <div className="my-auto flex-1 shrink self-stretch bg-black bg-opacity-0 py-4 text-sm font-medium leading-6 tracking-normal text-black text-opacity-90">
    //       Created on
    //     </div>
    //   </div>
    //   <div className="mt-2 flex w-full flex-col justify-center rounded-xl bg-white px-4 py-5 max-md:max-w-full">
    //     <div className="flex w-full flex-wrap items-center gap-4 max-md:max-w-full">
    //       <div className="my-auto flex w-[318px] min-w-[240px] items-center gap-4 self-stretch">
    //         <div className="my-auto flex w-[42px] items-center self-stretch overflow-hidden">
    //           <div className="my-auto flex w-[42px] items-start gap-2.5 self-stretch rounded-[100px] p-2.5">
    //             <img
    //               loading="lazy"
    //               src="https://cdn.builder.io/api/v1/image/assets/TEMP/a87f606dfb2db4f8c58403152808c0ea4ef61c81be73b524682ab7c43446e5a9?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd"
    //               className="aspect-square w-6 object-contain"
    //             />
    //           </div>
    //         </div>
    //         <div className="my-auto gap-4 self-stretch text-xl font-medium leading-relaxed tracking-normal text-black text-opacity-90">
    //           Crocs Plan 101
    //         </div>
    //       </div>
    //       <div className="my-auto flex flex-1 shrink basis-0 items-center gap-2 self-stretch">
    //         <div className="my-auto flex items-start justify-center gap-2 self-stretch">
    //           <div className="flex size-6 min-h-[24px] flex-col items-center justify-center rounded-[100px] bg-indigo-100">
    //             <img
    //               loading="lazy"
    //               src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c0e89f4741753c205f34e432f11cc854011d1dc43352ce64bac9ac157c3e4df?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd"
    //               className="aspect-square w-4 object-contain"
    //             />
    //           </div>
    //           <div className="flex size-6 min-h-[24px] flex-col items-center justify-center rounded-[100px] bg-indigo-100">
    //             <img
    //               loading="lazy"
    //               src="https://cdn.builder.io/api/v1/image/assets/TEMP/02b3dbf0eea2655b8c824970dd5dab214a9fa2174fd1e3ee8dc4c27ed63ffb2e?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd"
    //               className="aspect-square w-4 object-contain"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="my-auto flex-1 shrink gap-4 self-stretch text-center text-base tracking-normal text-black text-opacity-90">
    //         Apr 25, 2024
    //       </div>
    //       <div className="my-auto flex flex-1 shrink basis-0 items-center self-stretch">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b9a3e0cf680d128fea2024bbc9aa658a02ba617ce46683a213a58be5b7b9d43?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd"
    //           className="my-auto aspect-[2] w-20 self-stretch object-contain"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Test />
  );
}

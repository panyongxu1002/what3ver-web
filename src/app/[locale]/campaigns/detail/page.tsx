/* eslint-disable react/no-unescaped-entities */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

export default function MyComponent() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <div className="relative flex min-h-[1024px] w-full flex-col overflow-hidden rounded max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a4f223aa646342bfdc228b75b34df6a9eb89da2bba45304c958fb0799ebbd7c?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="relative flex min-h-[64px] w-full flex-wrap items-center gap-6 px-6 py-3.5 max-md:max-w-full max-md:px-5">
          <div className="my-auto flex min-w-[240px] flex-1 shrink basis-0 flex-wrap items-center gap-2 self-stretch whitespace-nowrap text-xl font-extrabold leading-none text-black text-opacity-90 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d0cef9e00bbaef40690c7a0f95ca039315c293d8b1db29d85e223bf00d188f6f?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0cef9e00bbaef40690c7a0f95ca039315c293d8b1db29d85e223bf00d188f6f?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0cef9e00bbaef40690c7a0f95ca039315c293d8b1db29d85e223bf00d188f6f?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0cef9e00bbaef40690c7a0f95ca039315c293d8b1db29d85e223bf00d188f6f?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0cef9e00bbaef40690c7a0f95ca039315c293d8b1db29d85e223bf00d188f6f?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0cef9e00bbaef40690c7a0f95ca039315c293d8b1db29d85e223bf00d188f6f?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0cef9e00bbaef40690c7a0f95ca039315c293d8b1db29d85e223bf00d188f6f?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0cef9e00bbaef40690c7a0f95ca039315c293d8b1db29d85e223bf00d188f6f?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd"
              className="my-auto aspect-square w-9 shrink-0 self-stretch object-contain"
            />
            <div className="my-auto gap-6 self-stretch">WHAT3VER</div>
          </div>
          <div className="my-auto flex items-center self-stretch overflow-hidden rounded-2xl bg-pink-600 bg-opacity-10 p-1">
            <div className="my-auto flex w-5 items-start self-stretch">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/967caaf6e85ee796e386c6821eeaa2986e720f376e3abadd3cc6a2e8b495f234?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd"
                className="aspect-square w-5 object-contain"
              />
            </div>
            <div className="my-auto self-stretch px-1 text-sm leading-none tracking-normal text-pink-600">
              20 credits
            </div>
          </div>
        </div>
        <div className="relative flex max-md:pr-5">
          <div className="mt-28 flex w-[200px] flex-col self-start px-2 pl-[24px] text-base tracking-normal text-black text-opacity-90 max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/055eddaf91d17a58c62516fcc16e0419c52acbccd458d9121ee245c19f263005?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd"
              className="aspect-square w-6 object-contain"
            />
            <div className="mt-4 flex flex-col">
              <div className="font-medium text-indigo-600">
                Video Scripts #1
              </div>
              <div className="mt-3">Video Scripts #2</div>
              <div className="mt-3">Video Scripts #3</div>
            </div>
          </div>
          <div className="mr-0 flex min-h-[960px] w-full flex-col rounded-xl bg-white bg-opacity-0 px-6 pt-4 max-md:max-w-full max-md:px-5">
            <div className="flex w-full flex-col max-md:max-w-full">
              <div className="flex w-full flex-col items-center max-md:max-w-full">
                <div className="flex min-h-[56px] w-[1000px] max-w-full flex-wrap items-center gap-4">
                  <div className="my-auto w-[519px] min-w-[240px] flex-1 shrink basis-4 gap-2 self-stretch text-2xl leading-none text-black text-opacity-90 max-md:max-w-full">
                    Video Scripts
                  </div>
                  <div className="my-auto flex min-w-[240px] flex-1 shrink basis-0 flex-wrap items-center gap-4 self-stretch whitespace-nowrap pr-4 text-sm font-medium uppercase leading-6 tracking-wide text-white max-md:max-w-full">
                    <div className="my-auto flex min-h-[36px] flex-col items-center justify-center self-stretch overflow-hidden rounded-lg bg-pink-600 px-4 py-1.5 shadow">
                      <div className="flex items-center justify-center gap-2">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/88b1af4e40728ef0c243969eeae50816deb687bb539f85f7b0037f0b25d169fa?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd"
                          className="my-auto aspect-[0.8] w-4 shrink-0 self-stretch object-contain"
                        />
                        <div className="my-auto self-stretch">Export</div>
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b9a3e0cf680d128fea2024bbc9aa658a02ba617ce46683a213a58be5b7b9d43?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd"
                      className="my-auto aspect-[2] w-20 shrink-0 self-stretch object-contain"
                    />
                  </div>
                </div>
                <div className="flex min-h-[24px] w-full max-w-[1000px] flex-wrap items-center gap-4 max-md:max-w-full">
                  <div className="my-auto self-stretch text-sm leading-none tracking-normal text-black text-opacity-60">
                    Created on
                  </div>
                  <div className="my-auto self-stretch text-center text-base tracking-normal text-black text-opacity-90">
                    Just now
                  </div>
                </div>
              </div>
              <div className="mt-4 flex w-full flex-col items-center overflow-hidden px-20 max-md:max-w-full max-md:px-5">
                <div className="flex w-full max-w-[1000px] flex-col overflow-hidden rounded-xl bg-white bg-opacity-60 p-6 max-md:max-w-full max-md:px-5">
                  <div className="flex items-center gap-2 self-start">
                    <div className="my-auto flex size-6 items-center gap-2 self-stretch rounded-[50px] bg-indigo-600 bg-opacity-10 p-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3568df4b671c34c6a304493f7cec2d526cdae00ea2d493973a63d7bac22a5fc?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd"
                        className="aspect-square w-4 object-contain"
                      />
                    </div>
                    <div className="my-auto self-stretch text-base font-medium uppercase tracking-normal text-black text-opacity-90">
                      Video Scripts #1
                    </div>
                  </div>
                  <div className="mt-6 flex w-full flex-col max-md:max-w-full">
                    <div className="flex w-full flex-col text-black max-md:max-w-full">
                      <div className="text-2xl leading-none">Title</div>
                      <div className="mt-4 text-base tracking-normal max-md:max-w-full">
                        Understanding Inflation: Empower Your Financial Future
                      </div>
                    </div>
                    <div className="mt-8 flex w-full flex-col max-md:max-w-full">
                      <div className="text-2xl leading-none text-black">
                        Hook
                      </div>
                      <div className="mt-4 flex w-full flex-col max-md:max-w-full">
                        <div className="flex w-full flex-col max-md:max-w-full">
                          <div className="flex w-full flex-wrap items-center gap-4 max-md:max-w-full">
                            <div className="my-auto flex w-3 flex-col justify-center self-stretch py-3">
                              <div className="flex size-3 shrink-0 rounded-full bg-indigo-100" />
                            </div>
                            <div className="my-auto h-6 min-w-[240px] flex-1 shrink self-stretch text-xl font-medium leading-relaxed tracking-normal text-black text-opacity-90 max-md:max-w-full">
                              Scene 1
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-wrap max-md:max-w-full">
                          <div className="flex w-3 flex-col max-md:hidden">
                            <div className="flex w-3 flex-1 flex-col items-center max-md:hidden">
                              <div className="flex min-h-[200px] w-full flex-1 bg-indigo-100" />
                            </div>
                          </div>
                          <div className="flex w-full min-w-[240px] flex-1 shrink basis-0 flex-col self-start p-4 text-base tracking-normal text-black max-md:max-w-full">
                            <div className="flex w-full flex-wrap items-start gap-4 max-md:max-w-full">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/398e89c40f4a96df7e8d333093c01d9b755363636def0f4eda148dbd8cb2c7ef?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd"
                                className="aspect-square w-6 shrink-0 object-contain"
                              />
                              <div className="flex-1 shrink basis-0 max-md:max-w-full">
                                A person standing in a grocery store, looking
                                shocked while examining a receipt.
                              </div>
                            </div>
                            <div className="mt-4 flex w-full flex-wrap items-start gap-4 max-md:max-w-full">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ca6915fb9f256533a442ee68a3ba7ab9284e25b30813509433bc505a3c84396?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd"
                                className="aspect-square w-6 shrink-0 object-contain"
                              />
                              <div className="flex-1 shrink basis-0 max-md:max-w-full">
                                &quot;The Real Cost of Living&quot;
                              </div>
                            </div>
                            <div className="mt-4 flex w-full flex-wrap items-start gap-4 leading-6 max-md:max-w-full">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d978680b772429e2d1bfc13e2a475b741cf1bc18705d64a2a17b9556fef9eea6?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd"
                                className="aspect-square w-6 shrink-0 object-contain"
                              />
                              <div className="flex-1 shrink basis-0 max-md:max-w-full">
                                &quot;Remember when $100 could fill your grocery
                                cart? Today, it barely covers the essentials. If
                                you're feeling the pinch, you're not
                                alone.&quot;
                              </div>
                            </div>
                            <div className="mt-4 flex w-full flex-wrap items-start gap-4 max-md:max-w-full">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a94aed986c48525d6dedd16baf3cada350a70e77a443599bae0bedab5d94976?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd"
                                className="aspect-square w-6 shrink-0 object-contain"
                              />
                              <div className="flex-1 shrink basis-0 max-md:max-w-full">
                                Background sound of a bustling grocery store,
                                with the sound of a cash register
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 flex w-full flex-col max-md:max-w-full">
                      <div className="text-2xl leading-none text-black">
                        Intro
                      </div>
                      <div className="mt-4 flex w-full flex-col max-md:max-w-full">
                        <div className="flex w-full flex-col max-md:max-w-full">
                          <div className="flex w-full flex-wrap items-center gap-4 max-md:max-w-full">
                            <div className="my-auto flex w-3 flex-col justify-center self-stretch py-3">
                              <div className="flex size-3 shrink-0 rounded-full bg-indigo-100" />
                            </div>
                            <div className="my-auto h-6 min-w-[240px] flex-1 shrink self-stretch text-xl font-medium leading-relaxed tracking-normal text-black text-opacity-90 max-md:max-w-full">
                              Scene 2
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-wrap max-md:max-w-full">
                          <div className="flex w-3 flex-col max-md:hidden">
                            <div className="flex w-3 flex-1 flex-col items-center max-md:hidden">
                              <div className="flex min-h-[200px] w-full flex-1 bg-indigo-100" />
                            </div>
                          </div>
                          <div className="flex w-full min-w-[240px] flex-1 shrink basis-0 flex-col self-start p-4 text-base tracking-normal text-black max-md:max-w-full">
                            <div className="flex w-full flex-wrap items-start gap-4 max-md:max-w-full">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/398e89c40f4a96df7e8d333093c01d9b755363636def0f4eda148dbd8cb2c7ef?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd"
                                className="aspect-square w-6 shrink-0 object-contain"
                              />
                              <div className="flex-1 shrink basis-0 max-md:max-w-full">
                                Animated graph comparing the purchasing power of
                                $30,000 in 1983 versus $164,000 today.
                              </div>
                            </div>
                            <div className="mt-4 flex w-full flex-wrap items-start gap-4 max-md:max-w-full">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ca6915fb9f256533a442ee68a3ba7ab9284e25b30813509433bc505a3c84396?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd"
                                className="aspect-square w-6 shrink-0 object-contain"
                              />
                              <div className="flex-1 shrink basis-0 max-md:max-w-full">
                                &quot;1983 vs. Today&quot;
                              </div>
                            </div>
                            <div className="mt-4 flex w-full flex-wrap items-start gap-4 leading-6 max-md:max-w-full">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d978680b772429e2d1bfc13e2a475b741cf1bc18705d64a2a17b9556fef9eea6?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd"
                                className="aspect-square w-6 shrink-0 object-contain"
                              />
                              <div className="flex-1 shrink basis-0 max-md:max-w-full">
                                &quot;In 1983, $30,000 was enough for a
                                comfortable life. Fast forward to today, and
                                you'd need $164,000 for the same standard.
                                Inflation isn't just a buzzword; it's our
                                reality.&quot;
                              </div>
                            </div>
                            <div className="mt-4 flex w-full flex-wrap items-start gap-4 max-md:max-w-full">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a94aed986c48525d6dedd16baf3cada350a70e77a443599bae0bedab5d94976?placeholderIfAbsent=true&apiKey=53186c56703b47418c12cd21c1b9decd"
                                className="aspect-square w-6 shrink-0 object-contain"
                              />
                              <div className="flex-1 shrink basis-0 max-md:max-w-full">
                                Soft, contemplative music to underscore the
                                gravity of the information.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 w-full whitespace-nowrap text-2xl leading-none text-black max-md:max-w-full">
                      Content
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

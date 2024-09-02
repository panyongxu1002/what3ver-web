'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  ArrowBackRounded,
  AutoAwesomeRounded,
  EmailRounded,
  FlashOn,
  InsertDriveFileRounded,
  VideoFileRounded,
} from '@mui/icons-material';
import { Box, Button, Checkbox, Slider, TextField } from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import styles from './styles.module.css';

type ReqParams = {
  type: string;
  duration: number;
};

interface ContentProps {
  onBack: () => void;
  onGenerate: (params: ReqParams) => void;
}

// 定义验证模式
const schema = z.object({
  name: z.string().optional(),
});

interface IFormInput {
  name: string;
}

export default function Content({ onBack, onGenerate }: ContentProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(schema),
  });

  const [selected, setSelected] = useState<string>('email');

  const [duration, setDuration] = useState<number>(10);

  const onSubmit = () => {
    onGenerate({
      type: selected,
      duration,
    });
  };

  const handleDurationChange = (_event: Event, newValue: number | number[]) => {
    setDuration(newValue as number);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelected(value);
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mx-auto mt-[16px] w-[1000px]">
        <div className="flex justify-between">
          <div className="text-[24px] text-[#000000DE]">New Campaign</div>
          <div className="flex gap-5">
            <Button
              variant="outlined"
              color="primary"
              startIcon={<ArrowBackRounded />}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<AutoAwesomeRounded />}
              className={styles.generate}
            >
              Generate
            </Button>
          </div>
        </div>

        <div
          className="my-[16px] flex flex-col gap-[24px] rounded-xl p-[24px]"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.60)' }}
        >
          <div>
            <div className="mr-[8px] inline-block rounded-full bg-[#5042F41F] p-[4px]">
              <InsertDriveFileRounded className="text-[#5042F4]" />
            </div>
            <span className="text-[16px] font-medium text-[#000000DE]">
              Content
            </span>
          </div>
          <div>
            <div className="mb-[8px] font-medium text-[#000000DE]">
              Select content to be generated for you
              <span className="text-[#D32F2F]">*</span>
            </div>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Campaign name"
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder={'Name your campaign, e.g., "Spring Launch"'}
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ''}
                />
              )}
            />
          </div>
          <div className="flex flex-wrap gap-[24px]">
            <div
              className="w-[calc(50%_-_12px)] border border-dashed border-[#5042F480] p-[9px]"
              style={{ background: 'rgba(80, 66, 244, 0.02)' }}
            >
              <Checkbox
                checked={selected === 'email'}
                onChange={handleChange}
                value="email"
              />
              <div className="px-[15px] pb-[15px] text-center">
                <div>
                  <div className="mr-[8px] inline-block rounded-full bg-[#5042F4] p-[4px]">
                    <EmailRounded className="text-white" />
                  </div>
                  <span className="text-[16px] font-medium text-[#5042F4]">
                    Email template
                  </span>
                </div>
                <div className="mt-[16px]">
                  AI-generated emails to help you reach out to influencers
                  effectively.
                </div>
              </div>
            </div>
            <div
              className="w-[calc(50%_-_12px)] border border-dashed border-[#5042F480] p-[9px]"
              style={{ background: 'rgba(80, 66, 244, 0.02)' }}
            >
              <Checkbox
                checked={selected === 'script'}
                onChange={handleChange}
                value="script"
              />
              <div className="px-[15px] pb-[15px] text-center">
                <div>
                  <div className="mr-[8px] inline-block rounded-full bg-[#5042F4] p-[4px]">
                    <VideoFileRounded className="text-white" />
                  </div>
                  <span className="text-[16px] font-medium text-[#5042F4]">
                    Video scripts
                  </span>
                </div>
                <div className="mt-[16px]">
                  AI-generated scripts to assist you in creating engaging
                  promotional videos.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="my-[16px] flex flex-col gap-[24px] rounded-xl p-[24px]"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.60)' }}
        >
          <div>
            <div className="mr-[8px] inline-block rounded-full bg-[#5042F41F] p-[4px]">
              <EmailRounded className="text-[#5042F4]" />
            </div>
            <span className="text-[16px] font-medium text-[#000000DE]">
              Email Info
            </span>
          </div>
          <div>
            <div className="mb-[8px] font-medium text-[#000000DE]">
              What action do you want recipients to take after reading the
              email?
            </div>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder={
                'Enter a desired action for recipients, e.g., "Reply to this email."'
              }
            />
            <div className="mb-[8px] mt-[16px] flex items-center gap-[2px] text-custom-color">
              <FlashOn />
              Quick picks
            </div>
            <div className="flex-col gap-[8px] text-[#D400A2]">
              <div>Let us know if you&apos;re interested in partnering.</div>
              <div>Schedule a call to discuss our collaboration.</div>
              <div>Follow up on our previous conversation.</div>
            </div>
          </div>
        </div>

        <div
          className="my-[16px] flex flex-col gap-[24px] rounded-xl p-[24px]"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.60)' }}
        >
          <div>
            <div className="mr-[8px] inline-block rounded-full bg-[#5042F41F] p-[4px]">
              <VideoFileRounded className="text-[#5042F4]" />
            </div>
            <span className="text-[16px] font-medium text-[#000000DE]">
              Video Info
            </span>
          </div>
          <div>
            <div className="mb-[8px] font-medium text-[#000000DE]">
              Video duration <span className="text-[#D32F2F]">*</span>
            </div>
            <div className="px-[46px]">
              <Slider
                value={duration}
                color="secondary"
                onChange={handleDurationChange}
              />
            </div>
            <div className="mb-[8px] font-medium text-[#000000DE]">
              Video theme
            </div>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder={
                'Yes! We can generate scripts in any topic you want! Enter a theme for your video, e.g., "GRWM", "Unboxing", "Lifestyle Hacks".'
              }
              multiline
            />
            <div className="mb-[8px] mt-[16px] flex items-center gap-[2px] text-custom-color">
              <FlashOn />
              Quick picks
            </div>
            <div className="flex-col gap-[8px] text-[#D400A2]">
              <div>Let us know if you&apos;re interested in partnering.</div>
              <div>Schedule a call to discuss our collaboration.</div>
              <div>Follow up on our previous conversation.</div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

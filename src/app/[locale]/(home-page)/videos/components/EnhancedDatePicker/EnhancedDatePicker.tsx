import Box from '@mui/material/Box';

import DatePicker from '@/components/DatePicker/DatePicker';
import { mulish } from '@/fonts';

export default function EnhancedDatePicker() {
  return (
    <div>
      <Box className="mx-auto mb-[24px] flex flex-row items-center justify-center gap-[8px]">
        <div
          className={`text-2xl font-normal leading-loose text-black/90 ${mulish.className}`}
        >
          Top TikTok Marketing Videos
        </div>
        <DatePicker />
      </Box>
    </div>
  );
}

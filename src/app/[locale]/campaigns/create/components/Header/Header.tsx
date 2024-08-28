import { StarsRounded } from '@mui/icons-material';
import { Chip } from '@mui/material';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex items-center justify-between px-[24px] py-[14px]">
      <div className="flex items-center px-[16px]">
        <Image
          width={36}
          height={36}
          className="mr-[8px]"
          src="/logo.svg"
          alt="logo"
        />
        <span className="text-[20px] font-extrabold	text-black">WHAT3VER</span>
      </div>
      <div>
        <Chip
          className="border-[#D400A2] !bg-[#D400A214]"
          icon={<StarsRounded />}
          color="secondary"
          size="small"
          variant="outlined"
          label="20 credits"
        />
      </div>
    </div>
  );
}

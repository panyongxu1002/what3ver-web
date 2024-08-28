import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from '@mui/icons-material';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function VideoPreview() {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="relative pt-10">
        <Image
          width={388}
          height={661}
          src="/assets/images/PlaceholderImage.png"
          alt="video image"
        />
      </div>
      <div className="absolute bottom-2 left-2">
        <Typography>Video Description</Typography>
        <Typography
          sx={{ color: 'var(--text-secondary, rgba(0, 0, 0, 0.60))' }}
        >
          @username
        </Typography>
      </div>
      <div className="absolute right-2 top-1/2 flex -translate-y-1/2 flex-col">
        <Link href="/" passHref>
          <button
            type="button"
            aria-label="Previous video"
            className="mb-2 text-pink-500"
          >
            <KeyboardArrowUpRounded fontSize="large" />
          </button>
        </Link>
        <Link href="/" passHref>
          <button
            type="button"
            aria-label="Next video"
            className="text-pink-500"
          >
            <KeyboardArrowDownRounded fontSize="large" />
          </button>
        </Link>
      </div>
    </div>
  );
}

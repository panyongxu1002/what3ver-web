import {
  ChatBubbleRounded,
  CopyAllRounded,
  EmailRounded,
  FavoriteRounded,
  ShareRounded,
} from '@mui/icons-material';
import { Avatar, Chip, Typography } from '@mui/material';
import Link from 'next/link';

interface VideoInfoProps {
  name: string;
  socialHandle: string;
  avatar: string;
  category: string;
  description: string;
  hashtags: string[];
  likes: number;
  comments: number;
  shares: number;
  videoSales: number;
  views: number;
  erRate: number;
}

export default function VideoInfo(props: VideoInfoProps) {
  const {
    name,
    socialHandle,
    avatar,
    category,
    description,
    hashtags,
    likes,
    comments,
    shares,
    videoSales,
    views,
    erRate,
  } = props;

  return (
    <div className="mx-auto p-6">
      {/* Avatar */}
      <div className="flex items-center gap-[16px]">
        <div className="relative h-[40px]">
          <Avatar sizes="60px" src={avatar} alt="Travis Howard" />
          <EmailRounded className="absolute bottom-0 left-1/2 box-content -translate-x-1/2 translate-y-1/3 rounded-full bg-[#D400A2] p-[3px] !text-[12px] text-white" />
        </div>
        <div>
          <Chip
            size="small"
            label={category}
            variant="outlined"
            className="mb-[4px]"
          />
          <Typography>
            {name} <CopyAllRounded />
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            @{socialHandle} <CopyAllRounded />
          </Typography>
          <Link href="/" className="text-[#5042F4]">
            View Profile
          </Link>
        </div>
      </div>
      {/* Description */}
      <Typography
        className="mb-4"
        sx={{ color: 'var(--text-secondary, rgba(0, 0, 0, 0.60))' }}
      >
        {description}
      </Typography>
      {/* Hashtag */}
      <div className="mb-4 flex flex-wrap gap-2">
        {hashtags.map((hashtag) => (
          <Chip
            key={hashtag.length}
            size="small"
            label={`#${hashtag}`}
            variant="filled"
            className="mb-[9x] mr-[8px]"
          />
        ))}
      </div>
      {/* likes etc */}
      <div className="mt-[12px] flex items-center">
        <FavoriteRounded />
        <Typography
          variant="caption"
          sx={{
            color: 'var(--text-secondary, rgba(0, 0, 0, 0.60))',
            marginRight: '16px',
          }}
        >
          {likes}
        </Typography>
        <ChatBubbleRounded />
        <Typography
          variant="caption"
          sx={{
            color: 'var(--text-secondary, rgba(0, 0, 0, 0.60))',
            marginRight: '16px',
          }}
        >
          {comments}
        </Typography>
        <ShareRounded />
        <Typography
          variant="caption"
          sx={{
            color: 'var(--text-secondary, rgba(0, 0, 0, 0.60))',
            marginRight: '16px',
          }}
        >
          {shares}
        </Typography>
      </div>

      <div className="grid grid-cols-3 gap-4 rounded-lg p-4">
        <div className="rounded-lg bg-gray-50 p-4 text-center">
          <p className="text-2xl font-bold">{videoSales}K</p>
          <p className="text-gray-600">Video Sales</p>
        </div>
        <div className="rounded-lg bg-gray-50 p-4 text-center">
          <p className="text-2xl font-bold">{views}M</p>
          <p className="text-gray-600">Views</p>
        </div>
        <div className="rounded-lg bg-gray-50 p-4 text-center">
          <p className="text-2xl font-bold">{erRate}%</p>
          <p className="text-gray-600">ER Rate</p>
        </div>
      </div>
    </div>
  );
}

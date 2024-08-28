import { ArrowBack } from '@mui/icons-material';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="gap-[10px] p-[8px]">
      <Link href="/videos" passHref legacyBehavior>
        <ArrowBack className="cursor-pointer" />
      </Link>
      Videos
    </div>
  );
}

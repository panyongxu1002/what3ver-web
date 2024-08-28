import { AutoAwesome } from '@mui/icons-material';
import CampaignRounded from '@mui/icons-material/CampaignRounded';
import ListRounded from '@mui/icons-material/ListRounded';
import Search from '@mui/icons-material/Search';
import { Avatar, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import MenuList from '@/components/Sidenav/MenuList';

import styles from './styles.module.css';

export async function Sidenav() {
  const t = useTranslations('Sidenav');

  const navLinks = [
    {
      title: t('discovery'),
      icon: <Search />,
      children: [
        {
          title: t('influencers'),
          path: '/influencers',
          icon: null,
        },
        {
          title: t('videos'),
          path: '/videos',
          icon: null,
        },
      ],
    },
    {
      title: t('lists'),
      path: '/lists',
      icon: <ListRounded />,
    },
    {
      title: t('my_campaigns'),
      path: '/my-campaigns',
      icon: <CampaignRounded />,
    },
  ];
  const navLinks1 = [
    {
      title: t('discovery'),
      icon: <Avatar sx={{ width: 32, height: 32 }} alt={t('my_profile')} />,
      children: [
        {
          title: t('account'),
          path: '/account',
          icon: null,
        },
        {
          title: t('subscription'),
          path: '/subscription',
          icon: null,
        },
      ],
    },
  ];

  return (
    <div
      className={`${styles.sidebar} fixed left-0 top-0 z-10 flex h-full w-[240px] flex-col bg-white py-[24px]`}
    >
      <div className="flex items-center px-[16px]">
        <Image
          width={36}
          height={36}
          className="mr-[8px]"
          src="/logo.svg"
          alt="logo"
        />
        <span>WHAT3VER</span>
      </div>
      <div className="mt-[24px] text-center">
        <Link href="/campaign/create">
          <Button
            size="large"
            color="primary"
            variant="contained"
            startIcon={<AutoAwesome />}
            className={`${styles.newCampaign}`}
          >
            {t('new_campaign')}
          </Button>
        </Link>
      </div>
      <div className="flex flex-1 flex-col justify-between px-[8px]">
        <MenuList menu={navLinks} />
        <MenuList menu={navLinks1} />
      </div>
    </div>
  );
}

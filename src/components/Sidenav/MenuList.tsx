'use client';

import ArrowDropDownRounded from '@mui/icons-material/ArrowDropDownRounded';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useCallback, useState } from 'react';

import { usePathname } from '@/libs/i18nNavigation';

import styles from './styles.module.css';

interface IMenu {
  title: string;
  path?: string;
  icon: ReactNode | null;
  children?: IMenu[];
}
function MenuItem({ menu }: { menu: IMenu }) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  const handleClick = useCallback(() => setOpen(!open), [open]);

  if (menu.children) {
    return (
      <>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>{menu.icon}</ListItemIcon>
          <ListItemText primary={menu.title} />
          <ArrowDropDownRounded />
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
          <MenuList menu={menu.children!} />
        </Collapse>
      </>
    );
  }
  return (
    <Link href={menu.path!} prefetch>
      <ListItemButton
        className={pathname === menu.path ? styles.navActive : undefined}
      >
        <ListItemIcon>{menu.icon}</ListItemIcon>
        <ListItemText primary={menu.title} />
      </ListItemButton>
    </Link>
  );
}

export default function MenuList({ menu }: { menu: IMenu[] }) {
  return (
    <List>{menu?.map((nav) => <MenuItem menu={nav} key={nav.title} />)}</List>
  );
}

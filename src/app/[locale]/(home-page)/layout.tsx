import { Sidenav } from '@/components/Sidenav/Sidenav';
import { logger } from '@/libs/logger';

import styles from './styles.module.css';

export default async function DashboardLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  logger.info(props.params.locale);
  return (
    <div className={styles.layout}>
      <div className="relative flex size-full">
        <Sidenav />
        <div className="min-h-full w-full pl-[240px]">{props.children}</div>
      </div>
    </div>
  );
}

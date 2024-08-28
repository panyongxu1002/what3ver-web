import ListRounded from '@mui/icons-material/ListRounded';
import * as React from 'react';

import TableList from './components/TableList/TableList';

export default function Lists() {
  return (
    <div className="p-[24px]">
      <div>
        <ListRounded className="mr-[8px]" color="primary" />
        Influencer Lists
      </div>
      <TableList />
    </div>
  );
}

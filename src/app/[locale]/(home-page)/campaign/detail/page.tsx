/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import * as React from 'react';

import EmailDetail from './components/emailDetail';
import ScriptDetail from './components/scriptDetail';

export default function CampaignDetail(props: {
  searchParams: { type: string };
}) {
  return props.searchParams.type === 'email' ? (
    <EmailDetail />
  ) : (
    <ScriptDetail />
  );
}

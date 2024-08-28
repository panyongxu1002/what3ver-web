/* eslint-disable react/no-array-index-key */
import React from 'react';

import CampaignHeader from './components/CampaignHeader';
import TemplateCard from './components/TemplateCard';

const CampaignDashboard: React.FC = () => {
  const templates = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3646cdc534b197bc332fd21dcf36e5c246a81158e95d5b99dbb05787752538d2?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd',
      title: '+ New email template',
      description:
        'AI-generated emails to help you reach out to influencers effectively.',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/53c59a58823f81cdbfeeb3d71842fc9363be271ef52898eb956bd4573297624f?apiKey=53186c56703b47418c12cd21c1b9decd&&apiKey=53186c56703b47418c12cd21c1b9decd',
      title: '+ New video scripts',
      description:
        'AI-generated scripts to assist you in creating engaging promotional videos.',
    },
  ];

  return (
    <main className="flex w-full flex-col max-md:max-w-full">
      <CampaignHeader title="Crocs Plan Updated" />
      <section className="mt-6 flex w-full flex-wrap items-start gap-5 max-md:max-w-full">
        {templates.map((template, index) => (
          <TemplateCard
            key={index}
            icon={template.icon}
            title={template.title}
            description={template.description}
          />
        ))}
      </section>
    </main>
  );
};

export default CampaignDashboard;

import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="relative mb-10">
      <h2
        className="absolute inset-0 text-center text-6xl font-semibold text-white opacity-10"
        style={{ top: '4px' }}
        aria-hidden="true"
      >
        {title}
      </h2>

      <h2 className="text-center text-4xl font-semibold text-greenCustom relative z-10">
        {subtitle}
      </h2>
    </div>
  );
};

export default SectionTitle;

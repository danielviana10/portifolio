import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  paddingBottom?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, paddingBottom }) => {
  return (
    <div className={`relative mb-10 ${paddingBottom ? 'pb-[0]' : ''}`}>
      <h2
        className="absolute inset-0 text-center text-4xl sm:text-5xl md:text-6xl font-semibold text-white opacity-10"
        style={{ top: '4px' }}
        aria-hidden="true"
      >
        {title}
      </h2>

      <h2 className="text-center text-3xl sm:text-3xl md:text-4xl font-semibold text-greenCustom relative z-10">
        {subtitle}
      </h2>
    </div>
  );
};

export default SectionTitle;
import React from "react";
import { motion } from "framer-motion";

interface ExperienceItemProps {
  experience: {
    title: string;
    company: string;
    date: string;
    city: string;
    description: string;
  };
  index: number;
  hasAnimated: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index, hasAnimated }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: hasAnimated ? 1 : 0,
        y: hasAnimated ? 0 : 20,
      }}
      transition={{ duration: 0.6, delay: index * 0.3 }}
      className="flex flex-col sm:flex-row justify-between text-white space-y-4 sm:space-y-0"
    >
      <div className="w-full sm:w-1/2">
        <h3 className="text-xl sm:text-2xl lg:text-xl font-semibold text-white">{experience.title}</h3>
        <h4 className="text-xl sm:text-2xl lg:text-xl font-semibold text-greenCustom mb-2">
          {experience.company}
        </h4>
        <p className="text-md sm:text-lg lg:text-lg font-semibold text-[#979797]">
          {experience.date} / {experience.city}
        </p>
      </div>
      <div className="w-full sm:w-1/2 sm:pl-6">
        <p
          className="text-md sm:text-lg lg:text-[1.01rem]"
          dangerouslySetInnerHTML={{ __html: experience.description }}
        ></p>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
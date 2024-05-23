import React from "react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <h3 className=" text-4xl md:text-5xl lg:text-7xl  font-handWrite mb-6 text-gray-800">
      {title}
    </h3>
  );
};

export default SectionHeader;

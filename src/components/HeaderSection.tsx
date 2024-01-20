import { FC, ReactNode } from "react";

interface HeaderSectionProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const HeaderSection: FC<HeaderSectionProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="flex flex-row mb-4">
      <div className="flex-grow">
        <span className="text-lg font-bold">{title}</span>
        <p className="text-gray-500">{subtitle}</p>
      </div>
      <div className="ml-auto">{children}</div>
    </div>
  );
};

export default HeaderSection;

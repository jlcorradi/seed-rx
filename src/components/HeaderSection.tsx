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
    <div className="d-flex">
      <div className="flex-fill">
        <span className="h5">{title}</span>
        <p>{subtitle}</p>
      </div>
      <div className="ml-auto">{children}</div>
    </div>
  );
};

export default HeaderSection;

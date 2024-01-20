import { FC } from "react";
import HeaderSection from "../components/HeaderSection.tsx";
import { useLocation } from "react-router-dom";

interface AboutProps {}

const AboutView: FC<AboutProps> = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="box">
          <HeaderSection
            title="About"
            subtitle="About This Project"
          ></HeaderSection>
          <p>
            This is just a seed to create react applications easily for testing
            and other purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutView;

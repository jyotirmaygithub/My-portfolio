import React from "react";
import { educationData } from "../../Data/projects";
import Learning from "@/components/education/learning";

const EducationPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col m-2 sm:m-5 md:m-10 xl:m-24">
        {educationData.map((data, index) => (
           <div className="m-6" key={index}><Learning {...data} /></div>
        ))}
      </div>
    </>
  );
};
export default EducationPage;

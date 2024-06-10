import React from "react";
import Education from "@/components/images/education";
import Codingplatform from "@/Layout/codingplatform";
import UniversityEducation from "@/components/education/university";
import SchoolEducation from "@/components/education/school";

export default function Page() {
  return (
    <>
      <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 items-center my-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-5 space-y-5 md:space-y-0 flex-wrap">
          <Education />
          <div className="space-y-5 text-center md:text-left">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl">Education</h2>
            <h4 className="font-bold text-2xl sm:text-3xl">Basic Qualification and Certifications</h4>
            <Codingplatform />
          </div>
        </div>
        <div className="w-full">
          <UniversityEducation />
        </div>
        <div className="w-full">
          <SchoolEducation />
        </div>
        <h2 className="font-bold text-3xl sm:text-4xl md:text-4xl my-10">Certifications</h2>
      </div>
    </>
  );
}

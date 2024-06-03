import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SchoolIcon from "@mui/icons-material/School";
import Education from "@/components/images/education";
import Codingplatform from "@/Layout/codingplatform";
import UniversityEducation from "@/components/education/university";
import SchoolEducation from "@/components/education/school";

export default function Page() {
  return (
    <>
      <div className="flex flex-col flex-wrap items-center my-10">
        <div className="flex items-center justify-center space-x-5 flex-wrap">
          <Education />
          <div className="space-y-5">
            <h2 className="font-bold text-5xl">Education</h2>
            <h4 className="font-bold text-3xl">
              Basic Qualification and Certifcations
            </h4>
            <Codingplatform />
          </div>
        </div>
        <UniversityEducation/>
        <SchoolEducation/>
        <h2 className="font-bold text-4xl my-10">Certifications</h2>
      </div>
    </>
  );
}

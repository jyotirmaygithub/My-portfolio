import React from 'react';
import { experienceData } from "@/Data/projects";
import Experience from "@/Layout/experience";

export default function Page() {
  return (
    <div className='flex flex-col m-2 sm:m-5 md:m-10 xl:m-24'>
      {experienceData.map((data, index) => (
        <div className='m-6' key={index}>
          <Experience 
            company={data.company} 
            role={data.role} 
            tags={data.tags}
            duration={data.duration} 
            responsibilities={data.responsibilities} 
          />
        </div>
      ))}
    </div>
  );
}

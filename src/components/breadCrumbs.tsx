"use client"
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex justify-center my-10">
      <Breadcrumbs
        size="sm"
        className="bg-slate-900 p-4 px-10 rounded border-solid border-white border "
        classNames={{
          list: "gap-2",
        }}
        itemClasses={{
          separator: "hidden",
          item: "text-gray-500 hover:text-white",
        }}
      >
        <BreadcrumbItem key="home">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem key="education">
          Education
        </BreadcrumbItem>
        <BreadcrumbItem key="project">
          Projects
        </BreadcrumbItem>
        <BreadcrumbItem key="open-source">
          Open-Source
        </BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
}

"use client";
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();

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
          item: "text-gray-500 hover:text-white cursor-pointer",
        }}
      >
        <BreadcrumbItem key="home" onClick={() => router.push("/")}>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem
          key="experience"
          onClick={() => router.push("/experience")}
        >
          Experience
        </BreadcrumbItem>
        <BreadcrumbItem key="project" onClick={() => router.push("/project")}>
          Projects
        </BreadcrumbItem>
        <BreadcrumbItem
          key="education"
          onClick={() => router.push("/education")}
        >
          Education
        </BreadcrumbItem>
        <BreadcrumbItem
          key="open-source"
          onClick={() => router.push("/open-source")}
        >
          Open-Source
        </BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
}

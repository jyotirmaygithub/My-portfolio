"use client"
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex justify-center my-10">
      <Breadcrumbs
        size="sm"
        className="bg-slate-900 p-4 rounded border-solid border-white border"
        classNames={{
          list: "gap-2",
        }}
        itemClasses={{
          separator: "hidden",
          item: "text-gray-500 hover:text-white",
          currentItem: "font-bold text-white",
        }}
      >
        <BreadcrumbItem key="home" isCurrent={true}>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem key="music">
          Music
        </BreadcrumbItem>
        <BreadcrumbItem key="artist">
          Artist
        </BreadcrumbItem>
        <BreadcrumbItem key="album">
          Album
        </BreadcrumbItem>
        <BreadcrumbItem key="song" isDisabled>
          Song
        </BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
}

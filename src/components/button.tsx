import React from "react";
import Button from "@mui/material/Button";

export default function CustomButton({ title, icon, position, href }: { title: string; icon: React.ReactNode; position?: string; href: string }) {
  return (
    <>
      <Button
        className="bg-blue-800 text-white"
        variant="contained"
        startIcon={position === "start" ? icon : undefined}
        endIcon={position === "end" ? icon : undefined}
        component="a"
        href={href}
      >
        {title}
      </Button>
    </>
  );
}

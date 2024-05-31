import React from "react";
import Button from "@mui/material/Button";

export default function button({title, icon ,position}:{title:string , icon : React.ReactNode , position? : string}) {
  return (
    <>
      <Button className="bg-black text-white" variant="contained" startIcon={position === "start" ? icon : undefined} endIcon={position === "end" ? icon : undefined}>{title}</Button>
    </>
  );
}

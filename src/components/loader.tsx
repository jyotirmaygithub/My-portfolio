import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularIndeterminate() {
  return (
    <>
      <div className="flex justify-center items-center h-full w-full">
        <CircularProgress size={86} />
      </div>
    </>
  );
}

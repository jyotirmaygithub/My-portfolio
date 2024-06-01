import React from "react";
import { Image } from "@nextui-org/react";

export default function App() {
  return (
    <Image
    className="rounded"
      width={500}  // Adjust width as needed
      alt="Me"
      src="/Images/Me.jpg"
    />
  );
}

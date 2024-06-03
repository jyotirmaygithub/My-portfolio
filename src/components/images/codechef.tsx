import React from "react";
import { Image, Tooltip } from "@nextui-org/react";

export default function App() {
  return (
    <Tooltip content="CodeChef" className="bg-blue-800 rounded" placement="top">
      <a href="https://www.codechef.com" target="_blank" rel="noopener noreferrer">
        <Image
          className="rounded bg-white"
          width={50}
          alt="CodeChef"
          src="/Images/codechef.png"
        />
      </a>
    </Tooltip>
  );
}

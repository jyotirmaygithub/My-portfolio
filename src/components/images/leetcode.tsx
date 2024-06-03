import React from "react";
import { Image, Tooltip } from "@nextui-org/react";

export default function App() {
  return (
    <Tooltip content="LeetCode" className="bg-blue-800 rounded">
      <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
        <Image
          className="rounded"
          width={50}  // Adjust width as needed
          alt="LeetCode Logo"
          src="/Images/leetcode.png"
        />
      </a>
    </Tooltip>
  );
}

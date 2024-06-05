import React from "react";
import Codechef from "@/components/images/codechef";
import Leetcode from "@/components/images/leetcode";

export default function CodingPlatform() {
  return (
    <div className="flex flex-wrap justify-center my-5 gap-4">
      <Leetcode />
      <Codechef />
    </div>
  );
}

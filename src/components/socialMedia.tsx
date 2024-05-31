import React from "react";
import { GitHub , LinkedIn } from "@mui/icons-material";

export default function SocialMedia() {
  const data = [
    {
      url: "https://example.com/link",
      icon: <LinkedIn />,
    },
    {
      url: "https://github.com/your-profile",
      icon: <GitHub />,
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <a href={item.url} key={index} target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          {item.icon}
        </a>
      ))}
    </div>
  );
}

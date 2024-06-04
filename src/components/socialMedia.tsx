import React from "react";
import { GitHub , LinkedIn , Mail} from "@mui/icons-material";

export default function SocialMedia() {
  const data = [
    {
      url: "https://www.linkedin.com/in/jyotirmay-gupta/",
      icon: <LinkedIn />,
    },
    {
      url: "https://github.com/jyotirmaygithub",
      icon: <GitHub />,
    },
    {
      url: "mailto:jyotirmay2000gupta@gmail.com",
      icon: <Mail />,
    }
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

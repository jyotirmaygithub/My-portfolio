"use client"
import React from 'react';
import { Fab } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import { Tooltip } from "@nextui-org/react";

export default function ChatbotButton(){

  const handleChatClick = () => {
    window.location.href = "mailto:jyotirmay2000gupta@gmail.com";
  };

  return (
    <Tooltip content="Contact me" className="bg-white text-black mb-2 rounded" placement="top">
      <Fab 
        color="primary" 
        aria-label="chat" 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
        }}
        onClick={handleChatClick} // Add onClick handler
      >
        <ChatIcon />
      </Fab>
    </Tooltip>
  );
};

import React from 'react';
import { Typography, Box } from '@mui/material';

const UniversityEducation: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h5" gutterBottom sx={{ color: '#333', marginBottom: '15px' }}>
      Loverly Professional University
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ color: '#555', marginBottom: '10px' }}>
        Bachelor of Computer Applications (BCA)
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: '#777', marginBottom: '20px' }}>
        Expected Graduation: 2022-2025
      </Typography>

      <Typography variant="body1" gutterBottom sx={{ color: '#333', marginBottom: '20px' }}>
        <strong>Key Learning:</strong>
        <br />
        Studied and gained expertise in MERN (MongoDB, Express.js, React.js, Node.js) stack for full-stack web development.
        <br />
        Explored Data Structures and Algorithms (DSA) extensively using Java, enhancing problem-solving skills and algorithmic thinking.
      </Typography>
    </Box>
  );
};

export default UniversityEducation;

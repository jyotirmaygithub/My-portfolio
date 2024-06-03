import React from 'react';
import { Typography, Box } from '@mui/material';

const SchoolEducation: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom sx={{ color: '#333', marginBottom: '15px' }}>
        School Education
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ color: '#555', marginBottom: '10px' }}>
        Kala Niketan
      </Typography>

      <Typography variant="body1" gutterBottom sx={{ color: '#333', marginBottom: '20px' }}>
        Completed 10th and 12th grades
      </Typography>

      <Typography variant="body1" gutterBottom sx={{ color: '#333', marginBottom: '20px' }}>
        <strong>Key Learning:</strong>
        <br />
        Acquired fundamental knowledge in various subjects, laying the groundwork for further academic pursuits. Developed critical thinking
        <br />
        and problem-solving skills through coursework and extracurricular activities.
      </Typography>
    </Box>
  );
};

export default SchoolEducation;

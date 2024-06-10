import React from 'react';
import { Typography, Box } from '@mui/material';

const SchoolEducation: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f4f4f4',
        padding: { xs: '10px', sm: '15px', md: '20px' },
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        marginTop: { xs: '10px', sm: '15px', md: '20px' },
        marginX: { xs: '10px', sm: '20px', md: '0' }
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          color: '#333',
          marginBottom: { xs: '10px', sm: '15px' },
          fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
        }}
      >
        School Education
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: '#555',
          marginBottom: { xs: '5px', sm: '10px' },
          fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
        }}
      >
        Kala Niketan
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
        sx={{
          color: '#333',
          marginBottom: { xs: '10px', sm: '15px', md: '20px' },
          fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' }
        }}
      >
        Completed 10th and 12th grades
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
        sx={{
          color: '#333',
          marginBottom: { xs: '10px', sm: '15px', md: '20px' },
          fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' }
        }}
      >
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

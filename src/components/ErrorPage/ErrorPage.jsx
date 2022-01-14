import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function ErrorPage() {
  return (
    <Box sx={{ display: 'flex', justifyContent: "center", padding:10 }}>
      <Typography fontSize={24}>
        ERROR
        </Typography>
    </Box>
  );
}
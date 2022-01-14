import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function ErrorMassage() {
  return (
    <Box sx={{ display: 'flex', justifyContent: "center", padding:10 }}>
      <Typography fontSize={24}>
        It looks like we don’t have any trending repositories for your choices.
        </Typography>
    </Box>
  );
}
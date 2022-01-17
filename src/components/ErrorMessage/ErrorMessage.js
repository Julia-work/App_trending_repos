import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function ErrorMessage() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: 10 }}>
      <Typography fontSize={24}>
        It looks like we don’t have any response for your choices.
      </Typography>
    </Box>
  );
}

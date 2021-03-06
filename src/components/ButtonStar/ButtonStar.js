import * as React from "react";
import { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ButtonStar = () => {
  const [color, setColor] = useState(false);

  return (
    <ButtonGroup variant="contained" size="small" disableElevation>
      <Button
        sx={{ border: `1px solid #30363d !important` }}
        onClick={() => setColor(!color)}
      >
        {color ? (
          <StarIcon sx={{ fontSize: 16, marginRight: 1, color: "#FFCF48" }} />
        ) : (
          <StarOutlineIcon sx={{ fontSize: 16, marginRight: 1 }} />
        )}
        <Typography variant="span">Star</Typography>
      </Button>
      <Button
        size="small"
        sx={{ fontSize: 12, padding: "3px 8px", minWidth: 28 }}
      >
        <ArrowDropDownIcon sx={{ width: 16, height: 16 }} />
      </Button>
    </ButtonGroup>
  );
};

export default ButtonStar;

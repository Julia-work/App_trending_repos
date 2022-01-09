import * as React from "react";
import Button from "@mui/material/Button";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({

}));

const ButtonSponsor = () => {
  const classes = useStyles();

  return (
    <Button sx={{fontSize: 12, padding: "3px 12px" }}>
      {/* <StarOutlineIcon sx={{ fontSize: 16, marginRight: 1 }}/> */}
      Sponsor
    </Button>
  );
};

export default ButtonSponsor;
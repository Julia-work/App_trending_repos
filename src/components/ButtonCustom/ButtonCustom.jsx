import * as React from "react";
import Button from "@mui/material/Button";

const ButtonCustom = (props) => {
  return (
    <Button sx={{fontSize: 12, padding: "3px 12px" }}>
     {props.children}
    </Button>
  );
};

export default ButtonCustom;
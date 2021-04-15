import React from "react";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
    <Typography
      variant="h5"
      style={{ display: "flex", alignItems: "center", height: "128px" }}
    >
      {" "}
      COUNTDOWN
    </Typography>
  );
};

export default Header;

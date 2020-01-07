import React from "react";
import { useScrollTrigger } from "@material-ui/core";

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  return React.cloneElement(children, {
    elevation: trigger ? 1 : 0
  });
};

export default ElevationScroll;

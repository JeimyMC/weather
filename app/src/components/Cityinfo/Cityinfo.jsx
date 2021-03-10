import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";

const Cityinfo = ({ city, country }) => {
  return (
    <div>
      <Typography display="inline" variant="h4">
        {city},{" "}
      </Typography>
      <Typography display="inline" variant="h5">
        {country}
      </Typography>
    </div>
  );
};

Cityinfo.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default Cityinfo;

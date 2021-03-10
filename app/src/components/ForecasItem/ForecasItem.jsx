import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { IconContext } from "react-icons/lib";
import { IconState, validValues } from "./../IconState/IconState";

const ForecasItem = ({ weekDay, hour, state, temperature }) => {
  const iconSize = useMemo(() => ({ size: "6em" }), []);
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography>Día: {weekDay}</Typography>
      </Grid>
      <Grid item>
        <Typography>Hora: {hour}</Typography>
      </Grid>
      <Grid item>
        <IconContext.Provider value={iconSize}>
          <IconState state={state}></IconState>
        </IconContext.Provider>
      </Grid>
      <Grid item>
        <Typography>{temperature} º</Typography>
      </Grid>
    </Grid>
  );
};

ForecasItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.oneOf(validValues).isRequired,
  temperature: PropTypes.number.isRequired,
};

export default ForecasItem;

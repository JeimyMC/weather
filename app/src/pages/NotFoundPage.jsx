import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as LinkRouter } from "react-router-dom";
import { IconContext } from "react-icons";
import Typography from "@material-ui/core/Typography";
import { WiDaySunny } from "react-icons/wi";

const NotFound = () => {
  return (
    <Grid container direction="column" justify="center" className="full">
      <div className="highLight">
        <Grid item container xs={12} justify="center" alignItems="center">
          <Grid item>
            <IconContext.Provider value={{ size: "6em" }}>
              <WiDaySunny></WiDaySunny>
            </IconContext.Provider>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography variant="h4" color="inherit">
              404 | Not Found
            </Typography>
            <Link
              color="inherit"
              aria-label="menu"
              component={LinkRouter}
              to="/main"
            >
              Volver al inicio
            </Link>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default NotFound;

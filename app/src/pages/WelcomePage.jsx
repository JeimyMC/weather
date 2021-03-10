import React, { useMemo } from "react";
import WelcomeScreen from "./../components/WelcomeScreen/WelcomeScreen";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as LinkRouter } from "react-router-dom";
import { IconContext } from "react-icons";
import Typography from "@material-ui/core/Typography";
import { WiDaySunny } from "react-icons/wi";

const WelcomePage = () => {
  const iconSize = useMemo(() => ({ size: "6em" }), []);
  return (
    <WelcomeScreen>
      <Grid container direction="column" justify="center" className="full">
        <div className="highLight">
          <Grid item container xs={12} justify="center" alignItems="center">
            <Grid item>
              <IconContext.Provider value={iconSize}>
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
                Weather App
              </Typography>
              <Link
                color="inherit"
                aria-label="menu"
                component={LinkRouter}
                to="/main"
              >
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </WelcomeScreen>
  );
};

export default WelcomePage;

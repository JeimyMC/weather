import React from "react";
import { useHistory } from "react-router-dom";
import AppFrame from "./../components/AppFrame/AppFrame";
import CityList from "./../components/CityList/CityList";
import Paper from "@material-ui/core/Paper";
import { getCities } from "./../utils/transform/serviceCities";

const MainPage = () => {
  const history = useHistory();
  const onClickHandler = React.useCallback(
    (city, countryCode) => {
      history.push(`/city/${countryCode}/${city}`);
    },
    [history]
  );
  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList cities={getCities()} onClickCity={onClickHandler}></CityList>
      </Paper>
    </AppFrame>
  );
};

export default MainPage;

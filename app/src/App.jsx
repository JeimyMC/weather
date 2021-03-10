import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import NotFound from "./pages/NotFoundPage";
import { WeatherContext } from "./WeatherContext";

const App = () => {
  /*const [allWeather, setAllWeather] = useState({});
  const [allDataItem, setAllDataItem] = useState(null);
  const [allForecastItem, setAllForecastItem] = useState(null);
  const onSetAllWeather = useCallback(
    (newData) => {
      setAllWeather((allWeather) => ({ ...allWeather, ...newData }));
    },
    [setAllWeather]
  );
  const onSetAllDataItem = useCallback(
    (newData) => {
      setAllDataItem((allDataItem) => ({ ...allDataItem, ...newData }));
    },
    [setAllDataItem]
  );
  const onSetallForecastItem = useCallback(
    (newForecast) => {
      setAllForecastItem((allForecastItem) => ({
        ...allForecastItem,
        ...newForecast,
      }));
    },
    [setAllForecastItem]
  );
  const actions = useMemo(
    () => ({ onSetAllWeather, onSetAllDataItem, onSetallForecastItem }),
    [onSetAllWeather, onSetAllDataItem, onSetallForecastItem]
  );
  const data = useMemo(() => ({ allWeather, allDataItem, allForecastItem }), [
    allWeather,
    allDataItem,
    allForecastItem,
  ]);
  */
  return (
    <WeatherContext>
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomePage></WelcomePage>
          </Route>
          <Route path="/main">
            <MainPage></MainPage>
          </Route>
          <Route path="/city/:countryCode/:city">
            <CityPage></CityPage>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </WeatherContext>
  );
};

App.propTypes = {};

export default App;

import React, { useReducer, useContext } from "react";

const WeatherStateContext = React.createContext();

const WeatherDispatchContext = React.createContext();

const initialValue = {
  allWeather: {},
  allDataItem: {},
  allForecastItem: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ALLWEATHER":
      const newDataW = action.payload;
      const newAllWeather = { ...state.allWeather, ...newDataW };
      return { ...state, allWeather: newAllWeather };
    case "SET_DATA":
      const newDataI = action.payload;
      const newDataItem = { ...state.allDataItem, ...newDataI };
      return { ...state, allDataItem: newDataItem };
    case "SET_FORECAST":
      const newDataF = action.payload;
      const newForecast = { ...state.allForecastItem, ...newDataF };
      return { ...state, allForecastItem: newForecast };
    default:
      return state;
  }
};

const WeatherContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <WeatherDispatchContext.Provider value={dispatch}>
      <WeatherStateContext.Provider value={state}>
        {children}
      </WeatherStateContext.Provider>
    </WeatherDispatchContext.Provider>
  );
};

const useContextDispatch = () => {
  const dispatch = useContext(WeatherDispatchContext);
  if (!dispatch) {
    throw Error("Error en el dato");
  }
  return dispatch;
};

const useContextState = () => {
  const state = useContext(WeatherStateContext);
  if (!state) {
    throw Error("Error en el dato");
  }
  return state;
};

export { WeatherContext, useContextDispatch, useContextState };

import { ADD_ITEM, REMOVE_ALL_ITEMS, ADD_CITY_NAME, ADD_DAILY_FORECAST } from "../constants/constants"

export const addItem = (data) => {
  return { type: ADD_ITEM, payload: data }
};

export const removeItems = () => {
  return { type: REMOVE_ALL_ITEMS }
};

export const addCityName = (data) => {
  return { type: ADD_CITY_NAME, payload: data }
};

export const addDailyForecast = (data) => {
  return { type: ADD_DAILY_FORECAST, payload: data }
};
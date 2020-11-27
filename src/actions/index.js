import { ADD_ITEM, REMOVE_ALL_ITEMS, ADD_CITY_NAME } from "../constants/constants"

export const addItem = (data) => {
  return { type: ADD_ITEM, payload: data }
};

export const removeItems = () => {
  return { type: REMOVE_ALL_ITEMS }
};

export const addCityName = (data) => {
  return { type: ADD_CITY_NAME, payload: data }
};

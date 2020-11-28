import { ADD_ITEM, REMOVE_ALL_ITEMS, ADD_CITY_NAME, ADD_DAILY_FORECAST } from '../constants/constants';

const initialState = {
  data: {},
  city: '',
  dailyForecast: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return  { ...state, data: action.payload }
    }
    case ADD_CITY_NAME: {
      return  { ...state, city: action.payload }
    }
    case ADD_DAILY_FORECAST: {
      return  { ...state, dailyForecast: action.payload }
    }
    case REMOVE_ALL_ITEMS: {
      return  { ...state, data: {} }
    }
    default: {
      return state;
    }
  }
}

export default reducer;

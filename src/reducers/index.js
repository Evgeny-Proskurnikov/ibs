import { ADD_ITEM, REMOVE_ALL_ITEMS, ADD_CITY_NAME } from '../constants/constants';

const initialState = {
  data: {},
  city: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return  { ...state, data: action.payload }
    }
    case ADD_CITY_NAME: {
      return  { ...state, city: action.payload }
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

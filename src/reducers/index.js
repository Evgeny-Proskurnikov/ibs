import { DO_SMTHN } from '../constants/constants';

const initialState = {
  data: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DO_SMTHN: {
      return  { ...state, data: [...state.data, action.payload] }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
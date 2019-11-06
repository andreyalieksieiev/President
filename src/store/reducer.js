import { ADD_ERDOGAN, ADD_TRUMP } from './actions';

const initialState = {
  Erdogan: 50,
  Trump: 50
};

const presidentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERDOGAN:
      if (state.Erdogan === 100) {
        return state;
      } else {
        return {
          ...state,
          Erdogan: state.Erdogan + 1,
          Trump: state.Trump - 1
        };
      }
    case ADD_TRUMP:
      if (state.Trump === 100) {
        return state;
      } else {
        return {
          ...state,
          Erdogan: state.Erdogan - 1,
          Trump: state.Trump + 1
        };
      }
    default:
      return state;
  }
};

export const addClickErdogan = () => ({ type: ADD_ERDOGAN });
export const addClickTrump = () => ({ type: ADD_TRUMP });

export default presidentReducer;

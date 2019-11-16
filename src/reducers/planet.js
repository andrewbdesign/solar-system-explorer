import { SET_PLANET, RESET_PLANETS } from '../actions/types';

const initialState = {
  currentPlanet: null,
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_PLANET:
      return {
        ...state,
        currentPlanet: payload,
      };
    case RESET_PLANETS:
      return {
        ...state,
        currentPlanet: '',
      };
    default:
      return state;
  }
}

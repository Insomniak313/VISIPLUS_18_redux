import {BUTTON_CLICK} from "./ActionTypes"

export const initialState = {
  valeur: 0,
}

const buttonClick = (state) => ({
  ...state,
  valeur: state.valeur + 1
})

export default (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_CLICK:
      return buttonClick(state)
    default:
      return state
  }
}

import { createStore } from "redux";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  img: "",
  mortgage: "",
  rent: ""
};

export const STEPONE = "STEPONE";
export const STEPTWO = "STEPTWO";
export const STEPTHREE = "STEPTHREE";
export const CANCEL = "CANCEL";

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case STEPONE:
      return {
        ...state,
        name: payload.name,
        address: payload.address,
        city: payload.city,
        state: payload.state,
        zip: payload.zip
      };
    case STEPTWO:
      return {
        ...state,
        img: payload.img
      };
    case STEPTHREE:
      return {
        ...state,
        mortgage: payload.mortgage,
        rent: payload.rent
      };
    case CANCEL:
      return {
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        img: "",
        mortgage: "",
        rent: ""
      };
    default:
      return state;
  }
}

export default createStore(reducer);

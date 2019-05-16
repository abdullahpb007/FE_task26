import {
  ADD_PROPERTY_DETAILS,
  ADD_ASSESSEE,
  ADD_LIEN,
  ADD_IMPORTANT_DATES
} from "Constants/actionTypes";

const INIT_STATE = {
  propertyResponse: null
};

export default (state = INIT_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_PROPERTY_DETAILS:
      return Object.assign({}, state, {
        propertyResponse: action.payload
      });

    case ADD_ASSESSEE:
      return null;

    case ADD_LIEN:
      return null;

    case ADD_IMPORTANT_DATES:
      return null;

    default:
      return { ...state };
  }
};

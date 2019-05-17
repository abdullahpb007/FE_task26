import {
  ADD_PROPERTY_DETAILS,
  ADD_ASSESSEE,
  ADD_LIEN,
  ADD_IMPORTANT_DATES,
  CHANGE_FORM_TYPE
} from "Constants/actionTypes";

const INIT_STATE = {
  propertyResponse: null,
  propertyNumber: null,
  formType: "FORM_VIEW",
  fieldDisable: false
};

export default (state = INIT_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_PROPERTY_DETAILS:
      return Object.assign({}, state, {
        propertyResponse: action.payload,
        propertyNumber: action.payload.propertyNumber
      });

    case ADD_ASSESSEE:
      return { ...state };

    case ADD_LIEN:
      return { ...state };

    case ADD_IMPORTANT_DATES:
      return { ...state };

    case CHANGE_FORM_TYPE:
      return Object.assign({}, state, {
        formType: action.payload.formType,
        fieldDisable: action.payload.fieldDisable
      });

    default:
      return { ...state };
  }
};

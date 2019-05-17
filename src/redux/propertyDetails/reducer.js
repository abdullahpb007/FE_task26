import {
  ADD_PROPERTY_DETAILS,
  ADD_ASSESSEE,
  ADD_LIEN,
  ADD_IMPORTANT_DATES,
  CHANGE_FORM_TYPE,
  FORM_ADD,
  FORM_VIEW,
  FORM_EDIT,
  SELECTED_DATA,
  GET_PROPERTY_DATA
} from "Constants/actionTypes";

const INIT_STATE = {
  propertyResponse: "",
  propertyNumber: "",
  propertyData: [],
  formType: FORM_ADD,
  fieldDisable: false,
  selectedData: {
    propertyDetails: {
      pin: "",
      county: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      township: "",
      classCode: "",
      assessedValue: "",
      marketValue: "",
      taxesPerYear: "",
      propertyNumber: "",
      preeqexm: "",
      homeOwner: "",
      seniorExemption: "",
      seniorFreeze: "",
      totalAcres: "",
      legalDescription: ""
    },
    lienDetails: {
      creditor: "",
      amount: "",
      paymentAmount: ""
    },
    assesseeDetails: {
      propertyNumber: "",
      name: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    },
    datesDetails: {
      propertyNumber: "",
      actualEstimatedDate: "",
      firstInstallmentDate: "",
      secondInstallmentDate: "",
      petitionFiledDate: "",
      extentionDate: "",
      expirationDate: "",
      assignmentCallDate: "",
      proveUpDate: "",
      orderOfDate: "",
      dateOfTaxDeed: ""
    }
  }
};

export default (state = INIT_STATE, action) => {
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

    case SELECTED_DATA:
      return Object.assign({}, state, {
        propertyNumber: action.payload
      });

    case GET_PROPERTY_DATA:
      return Object.assign({}, state, {
        propertyData: action.payload
      });

    default:
      return { ...state };
  }
};

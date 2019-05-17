import {
  ADD_PROPERTY_DETAILS,
  ADD_ASSESSEE,
  ADD_LIEN,
  ADD_IMPORTANT_DATES,
  CHANGE_FORM_TYPE,
  FORM_ADD,
  FORM_VIEW,
  FORM_EDIT,
  SELECTED_DATA
} from "Constants/actionTypes";

const INIT_STATE = {
  propertyResponse: null,
  propertyNumber: null,
  formType: FORM_ADD,
  fieldDisable: false,
  selectedData: {
    propertyDetails: {
      pin: "",
      county: "",
      address: "",
      city: "",
      state: "",
      zip: 0,
      township: 0,
      classCode: 0,
      assessedValue: 0,
      marketValue: 0,
      taxesPerYear: 0,
      propertyNumber: "",
      preeqexm: 0,
      homeOwner: 0,
      seniorExemption: 0,
      seniorFreeze: 0,
      totalAcres: 0,
      legalDescription: ""
    },
    lienDetails: {
      creditor: "",
      amount: 0,
      paymentAmount: 0
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
      return { ...state };

    default:
      return { ...state };
  }
};

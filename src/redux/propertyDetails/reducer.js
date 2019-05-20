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
  GET_PROPERTY_DATA,
  SINGLE_RECORD,
  LOADER_STATE,
  VIEW_SELECTED_DATA
} from "Constants/actionTypes";

const INIT_STATE = {
  propertyResponse: "",
  propertyNumber: "",
  loading: false,
  id: "",
  propertyData: [],
  formType: FORM_ADD,
  fieldDisable: false,
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
    preeqexm: "",
    homeOwner: "",
    seniorExemption: "",
    seniorFreeze: "",
    totalAcres: "",
    legalDescription: ""
  },
  lienDetails: {
    propertyNumber: "",
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
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_PROPERTY_DETAILS:
      return Object.assign({}, state, {
        loading: false,
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
      if (action.payload.formType == FORM_ADD) {
        return Object.assign({}, state, {
          propertyNumber: INIT_STATE.propertyNumber,
          id: INIT_STATE.id,
          propertyDetails: INIT_STATE.propertyDetails,
          lienDetails: INIT_STATE.lienDetails,
          assesseeDetails: INIT_STATE.assesseeDetails,
          datesDetails: INIT_STATE.datesDetails,
          formType: INIT_STATE.formType,
          fieldDisable: INIT_STATE.fieldDisable
        });
      } else {
        return Object.assign({}, state, {
          formType: action.payload.formType,
          fieldDisable: action.payload.fieldDisable
        });
      }

    case SELECTED_DATA:
      return Object.assign({}, state, {
        propertyNumber: action.payload.propertyNumber,
        id: action.payload._id
      });

    case GET_PROPERTY_DATA:
      return Object.assign({}, state, {
        propertyData: action.payload
      });

    case SINGLE_RECORD:
      return Object.assign({}, state, {
        loading: false,
        propertyDetails: action.payload[0].data,
        lienDetails: action.payload[1].data,
        assesseeDetails: action.payload[2].data,
        datesDetails: action.payload[3].data
      });

    case LOADER_STATE:
      return Object.assign({}, state, {
        loading: true
      });

    default:
      return { ...state };
  }
};

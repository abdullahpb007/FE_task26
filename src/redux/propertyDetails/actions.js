import {
  ADD_PROPERTY_DETAILS,
  ADD_ASSESSEE,
  ADD_LIEN,
  ADD_IMPORTANT_DATES,
  CHANGE_FORM_TYPE
} from "Constants/actionTypes";

export const AddNewPropertyDetails = data => {
  return {
    type: ADD_PROPERTY_DETAILS,
    payload: data.data
  };
};

export const AddNewAssessee = () => {
  return {
    type: ADD_ASSESSEE
  };
};

export const AddNewLien = () => {
  return {
    type: ADD_LIEN
  };
};

export const AddNewImportantDates = () => {
  return {
    type: ADD_IMPORTANT_DATES
  };
};

export const ChangeFormType = payload => {
  let fieldDisable = payload == "FORM_VIEW" ? true : false;
  let data = {
    formType: payload,
    fieldDisable
  };
  return {
    type: CHANGE_FORM_TYPE,
    payload: data
  };
};

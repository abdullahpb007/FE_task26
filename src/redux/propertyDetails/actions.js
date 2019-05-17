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
  SINGLE_RECORD
} from "Constants/actionTypes";

/********** ADD NEW ACTIONS **********/
export const GetPropertyData = data => {
  return {
    type: GET_PROPERTY_DATA,
    payload: data
  };
};

/********** ADD NEW ACTIONS **********/
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

/********** FORM ACTIONS **********/
export const ChangeFormType = payload => {
  let fieldDisable = payload == FORM_VIEW ? true : false;
  let data = {
    formType: payload,
    fieldDisable
  };
  return {
    type: CHANGE_FORM_TYPE,
    payload: data
  };
};

export const SelectedData = payload => {
  return {
    type: SELECTED_DATA,
    payload: payload
  };
};

export const SingleRecordData = payload => {
  return {
    type: SINGLE_RECORD,
    payload: payload.data
  };
};

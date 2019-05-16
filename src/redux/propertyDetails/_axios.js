import axios from "axios";
import {
  AddNewPropertyDetails,
  AddNewAssessee,
  AddNewLien,
  AddNewImportantDates
} from "./actions";

export function addPropertyDetails(data) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  axios
    .post(
      "https://cors-anywhere.herokuapp.com/http://139.59.36.120/propertyDetail",
      data,
      { headers: headers }
    )
    .then(function(response) {
      dispatch(AddNewPropertyDetails(response));
    })
    .catch(function(error) {
      console.log(error);
    });
}

export function addAssessee(data) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  axios
    .post(
      "https://cors-anywhere.herokuapp.com/http://139.59.36.120/assesseeDetail",
      data,
      { headers: headers }
    )
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  AddNewAssessee();
}

export function addLien(data) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  axios
    .post(
      "https://cors-anywhere.herokuapp.com/http://139.59.36.120/lienDetail",
      data,
      { headers: headers }
    )
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  AddNewLien();
}

export function addImportantDate(data) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  axios
    .post(
      "https://cors-anywhere.herokuapp.com/http://139.59.36.120/importantDates",
      data,
      { headers: headers }
    )
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  AddNewImportantDates();
}

import axios from "axios";

export function addPropertyDetails(data, callback) {
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
    .then(response => callback(response))
    .catch(error => console.log(error));
}

export function addAssessee(data, callback) {
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
    .then(() => callback())
    .catch(error => console.log(error));
}

export function addLien(data, callback) {
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
    .then(() => callback())
    .catch(error => console.log(error));
}

export function addImportantDate(data, callback) {
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
    .then(() => callback())
    .catch(error => console.log(error));
}

/* Grid Data Loader */
export function getPropertyData(pageNo = 0, pageSize = 5, callback) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  let resData = [];
  axios
    .post(
      "https://cors-anywhere.herokuapp.com/http://139.59.36.120/propertyDataList",
      {
        pageNo: pageNo,
        pageSize: pageSize
      },
      { headers: headers }
    )
    .then(res => {
      res.data.docs.map(data => {
        resData.push(data);
      });
      callback(resData);
    });
}

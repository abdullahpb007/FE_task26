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
    .then(() => {
      callback();
      console.log("ee");
    })
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

/* Get Details */
function getPropertyDetails(id, propertyNumber) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  return axios.get(
    `https://cors-anywhere.herokuapp.com/http://139.59.36.120/propertyRecord/${id}?propertyNumber=${propertyNumber}`,
    { headers: headers }
  );
}

function getLienDetails(id, propertyNumber) {
  console.log(id, propertyNumber);
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  return axios.get(
    `https://cors-anywhere.herokuapp.com/http://139.59.36.120/lienRecord/${id}?propertyNumber=${propertyNumber}`,
    { headers: headers }
  );
}

function getAssesseeDetails(id, propertyNumber) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  return axios.get(
    `https://cors-anywhere.herokuapp.com/http://139.59.36.120/assesseeRecord/${id}?propertyNumber=${propertyNumber}`,
    { headers: headers }
  );
}

function getDateDetails(id, propertyNumber) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  return axios.get(
    `https://cors-anywhere.herokuapp.com/http://139.59.36.120/DatesRecord/${id}?propertyNumber=${propertyNumber}`,
    { headers: headers }
  );
}

export function getDetails(id, propertyNumber, callback) {
  axios
    .all([
      getPropertyDetails(id, propertyNumber),
      getLienDetails(id, propertyNumber),
      getAssesseeDetails(id, propertyNumber),
      getDateDetails(id, propertyNumber)
    ])
    .then(res => callback(res));
}

/* Edit Requests */
export function editPropertyDetails(data, id, propertyNumber) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  axios
    .put(
      `https://cors-anywhere.herokuapp.com/http://139.59.36.120/propertyRecordUpdate/${id}?propertyNumber=${propertyNumber}`,
      data,
      { headers: headers }
    )
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

export function editAssessee(data, id, propertyNumber) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  axios
    .put(
      `https://cors-anywhere.herokuapp.com/http://139.59.36.120/assesseeRecordUpdate/${id}?propertyNumber=${propertyNumber}`,
      data,
      { headers: headers }
    )
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

export function editLien(data, id, propertyNumber) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  axios
    .put(
      `https://cors-anywhere.herokuapp.com/http://139.59.36.120/lienRecordUpdate/${id}?propertyNumber=${propertyNumber}`,
      data,
      { headers: headers }
    )
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

export function editImportantDate(data, id, propertyNumber) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  axios
    .put(
      `https://cors-anywhere.herokuapp.com/http://139.59.36.120/importantDatesUpdate/${id}?propertyNumber=${propertyNumber}`,
      data,
      { headers: headers }
    )
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

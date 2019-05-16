import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import {
  Row,
  Button,
  CardBody,
  CardHeader,
  FormGroup,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Label
} from "reactstrap";

import classnames from "classnames";
import { NavLink } from "react-router-dom";

import * as Yup from "yup";

import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";

import { connect } from "react-redux";
import { addPropertyDetails } from "Redux/propertyDetails/_axios";

class DetailsForm extends Component {
  render() {
    return (
      <div>
        <CardHeader className="pl-0 pr-0 bg-white">
          <Nav tabs className="card-header-tabs  ml-0 mr-0">
            <NavItem className="w-25 text-center">
              <NavLink
                className={classnames({
                  active: this.state.activeFirstTab === "1",
                  "nav-link": true
                })}
                to="#"
              >
                Property Details
              </NavLink>
            </NavItem>
            <NavItem className="w-25 text-center">
              <NavLink
                className={classnames({
                  active: this.state.activeFirstTab === "2",
                  "nav-link": true
                })}
                to="#"
              >
                Lien Info
              </NavLink>
            </NavItem>
            <NavItem className="w-25 text-center">
              <NavLink
                className={classnames({
                  active: this.state.activeFirstTab === "3",
                  "nav-link": true
                })}
                to="#"
              >
                Assessee
              </NavLink>
            </NavItem>
            <NavItem className="w-25 text-center">
              <NavLink
                className={classnames({
                  active: this.state.activeFirstTab === "4",
                  "nav-link": true
                })}
                to="#"
              >
                Dates
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>

        <TabContent activeTab={this.state.activeFirstTab}>
          <TabPane tabId="1">
            <Row>
              <Colxx sm="12">
                <CardBody>
                  <Formik
                    initialValues={{
                      pin: "",
                      county: "",
                      pin: "",
                      street: "",
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
                      legalDescription: "",
                      googleMapView: ""
                    }}
                    validationSchema={propertyDetailsSchema}
                    onSubmit={values => {
                      addPropertyDetails(values);
                      this.toggleFirstTab("2");
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Row>
                          {this.fieldMapper(
                            this.state.propertyDetailMap,
                            errors,
                            touched
                          )}
                        </Row>
                        <Button
                          className="btn-block"
                          type="submit"
                          size="sm"
                          color="primary"
                        >
                          Next
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </CardBody>
              </Colxx>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Colxx sm="12">
                <CardBody>
                  <Formik
                    initialValues={{
                      creditor: "",
                      amount: "",
                      paymentAmount: ""
                    }}
                    validationSchema={lienSchema}
                    onSubmit={values => {
                      console.log(values);
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Row>
                          {this.fieldMapper(
                            this.state.lienInfoMap,
                            errors,
                            touched
                          )}
                        </Row>
                      </Form>
                    )}
                  </Formik>
                  <Button color="primary" type="submit">
                    <IntlMessages id="pages.submit" />
                  </Button>
                </CardBody>
              </Colxx>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Colxx sm="12">
                <CardBody>
                  <Formik
                    initialValues={{
                      name: "",
                      address: "",
                      city: "",
                      state: "",
                      zip: ""
                    }}
                    validationSchema={assesseeSchema}
                    onSubmit={values => {
                      this.props.onSubmit(values);
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Row>
                          {this.fieldMapper(
                            this.state.assesseeMap,
                            errors,
                            touched
                          )}
                        </Row>
                      </Form>
                    )}
                  </Formik>
                  <Button
                    className="btn-block"
                    onClick={() => {
                      this.toggleFirstTab("4");
                    }}
                    size="sm"
                    color="primary"
                  >
                    Next
                  </Button>
                </CardBody>
              </Colxx>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Colxx sm="12">
                <CardBody>
                  <Formik
                    initialValues={{
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
                    }}
                    validationSchema={dateSchema}
                    onSubmit={values => {
                      this.props.onSubmit(values);
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Row>
                          {this.fieldMapper(
                            this.state.datesMap,
                            errors,
                            touched
                          )}
                        </Row>
                      </Form>
                    )}
                  </Formik>
                  <Button className="btn-block" size="sm" color="primary">
                    Submit
                  </Button>
                </CardBody>
              </Colxx>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      activeFirstTab: "1",
      propertyDetailMap: [
        { name: "pin", size: 4, type: "text", text: "property." },
        { name: "street", size: 4, type: "text", text: "property." },
        { name: "city", size: 4, type: "text", text: "property." },
        { name: "county", size: 4, type: "text", text: "property." },
        { name: "state", size: 4, type: "text", text: "property." },
        { name: "zip", size: 4, type: "number", text: "property." },
        { name: "township", size: 4, type: "text", text: "property." },
        { name: "classCode", size: 4, type: "number", text: "property." },
        { name: "assessedValue", size: 4, type: "number", text: "property." },
        { name: "marketValue", size: 4, type: "number", text: "property." },
        { name: "taxesPerYear", size: 4, type: "number", text: "property." },
        { name: "preeqexm", size: 4, type: "number", text: "property." },
        { name: "homeOwner", size: 4, type: "number", text: "property." },
        { name: "seniorExemption", size: 4, type: "number", text: "property." },
        { name: "seniorFreeze", size: 4, type: "number", text: "property." },
        { name: "totalAcres", size: 4, type: "number", text: "property." },
        { name: "legalDescription", size: 4, type: "text", text: "property." },
        { name: "googleMapView", size: 4, type: "text", text: "property." }
      ],
      lienInfoMap: [
        { name: "creditor", size: 4, type: "text", text: "lien." },
        { name: "amount", size: 4, type: "number", text: "lien." },
        { name: "paymentAmount", size: 4, type: "number", text: "lien." }
      ],
      assesseeMap: [
        { name: "name", size: 4, type: "text", text: "assessee." },
        { name: "address", size: 4, type: "text", text: "assessee." },
        { name: "city", size: 4, type: "text", text: "assessee." },
        { name: "state", size: 4, type: "text", text: "assessee." },
        { name: "zip", size: 4, type: "number", text: "assessee." }
      ],
      datesMap: [
        { name: "actualEstimatedDate", size: 4, type: "date", text: "dates." },
        { name: "firstInstallmentDate", size: 4, type: "date", text: "dates." },
        {
          name: "secondInstallmentDate",
          size: 4,
          type: "date",
          text: "dates."
        },
        { name: "petitionFiledDate", size: 4, type: "date", text: "dates." },
        { name: "extentionDate", size: 4, type: "date", text: "dates." },
        { name: "expirationDate", size: 4, type: "date", text: "dates." },
        { name: "assignmentCallDate", size: 4, type: "date", text: "dates." },
        { name: "proveUpDate", size: 4, type: "date", text: "dates." },
        { name: "orderOfDate", size: 4, type: "date", text: "dates." },
        { name: "dateOfTaxDeed", size: 4, type: "date", text: "dates." }
      ]
    };
  }

  toggleFirstTab = tab => {
    console.log(this.props);
    if (this.state.activeTab !== tab) {
      this.setState({
        activeFirstTab: tab
      });
    }
  };

  fieldMapper = (arr, errors, touched) => {
    return arr.map((e, i) => {
      return (
        <Colxx key={i} xxs={e.size}>
          <FormGroup
            className={
              "form-group has-top-label" +
              (errors[e.name] && touched[e.name] ? " border-danger m-0" : "")
            }
          >
            <Label
              className={errors[e.name] && touched[e.name] ? "text-danger" : ""}
            >
              <IntlMessages id={e.text + e.name} />
            </Label>
            <Field
              className={
                "form-control" +
                (errors[e.name] && touched[e.name] ? " border-danger" : "")
              }
              type={e.type}
              name={e.name}
            />
            {errors[e.name] && touched[e.name] ? (
              <small className="text-danger">{errors[e.name]}</small>
            ) : (
              ""
            )}
          </FormGroup>
        </Colxx>
      );
    });
  };
}

const propertyDetailsSchema = Yup.object().shape({
  county: Yup.string().required("Required"),
  pin: Yup.string().required("Required"),
  street: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zip: Yup.number().required("Required"),
  township: Yup.string().required("Required"),
  classCode: Yup.number().required("Required"),
  assessedValue: Yup.number().required("Required"),
  marketValue: Yup.number().required("Required"),
  taxesPerYear: Yup.number().required("Required"),
  preeqexm: Yup.number().required("Required"),
  homeOwner: Yup.number().required("Required"),
  seniorExemption: Yup.number().required("Required"),
  seniorFreeze: Yup.number().required("Required"),
  totalAcres: Yup.number().required("Required"),
  legalDescription: Yup.string().required("Required"),
  googleMapView: Yup.string().required("Required")
});

const lienSchema = Yup.object().shape({
  creditor: Yup.string().required("Required"),
  amount: Yup.number().required("Required"),
  paymentAmount: Yup.number().required("Required")
});

const assesseeSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zip: Yup.number().required("Required")
});

const dateSchema = Yup.object().shape({
  actualEstimatedDate: Yup.string().required("Required"),
  firstInstallmentDate: Yup.string().required("Required"),
  secondInstallmentDate: Yup.string().required("Required"),
  petitionFiledDate: Yup.string().required("Required"),
  extentionDate: Yup.string().required("Required"),
  expirationDate: Yup.string().required("Required"),
  assignmentCallDate: Yup.string().required("Required"),
  proveUpDate: Yup.string().required("Required"),
  orderOfDate: Yup.string().required("Required"),
  dateOfTaxDeed: Yup.string().required("Required")
});

const mapStateToProps = state => {
  console.log(state);
  return { state };
};

export default connect(mapStateToProps)(DetailsForm);

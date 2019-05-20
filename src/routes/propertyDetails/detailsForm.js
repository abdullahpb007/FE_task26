import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import {
  Row,
  Button,
  ButtonGroup,
  CardBody,
  CardHeader,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
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

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as apiCallCreator from "Redux/propertyDetails/_axios";
import * as actionCreator from "Redux/propertyDetails/actions";
import { FORM_ADD, FORM_VIEW, FORM_EDIT } from "Constants/actionTypes";

class DetailsForm extends Component {
  componentWillMount() {
    if (
      this.props.propertyDetails.formType == FORM_VIEW ||
      this.props.propertyDetails.formType == FORM_EDIT
    ) {
      console.log(
        this.props.propertyDetails.id,
        this.props.propertyDetails.propertyNumber
      );
      apiCallCreator.getDetails(
        this.props.propertyDetails.id,
        this.props.propertyDetails.propertyNumber,
        this.props.singleRecordData
      );
    }
  }

  render() {
    const pdprops = this.props.propertyDetails;
    console.log(this.props);
    return pdprops.loading == true ? (
      <div className="loading" />
    ) : (
      <div>
        <Row>
          <Colxx xxs="12">
            <div className="mb-2">
              <h1>
                {pdprops.propertyNumber != ""
                  ? "Property Number : " + pdprops.propertyNumber
                  : "ADD NEW"}
              </h1>

              <div className="float-sm-right">
                {pdprops.formType != FORM_ADD ? (
                  <div>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        caret
                        color="primary"
                        size="lg"
                        outline
                        className="top-right-button top-right-button-single"
                      >
                        <IntlMessages id="pages.actions" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          onClick={() => this.props.changeFormType(FORM_VIEW)}
                        >
                          <IntlMessages id="property.viewDetails" />
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => this.props.changeFormType(FORM_EDIT)}
                        >
                          <IntlMessages id="property.editDetails" />
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                ) : (
                  ""
                )}
                {"  "}
              </div>
            </div>
          </Colxx>
        </Row>
        <CardHeader className="pl-0 pr-0 bg-white">
          <Nav tabs className="card-header-tabs  ml-0 mr-0">
            <NavItem className="w-25 text-center">
              <NavLink
                className={classnames({
                  active: this.state.activeFirstTab === "1",
                  "nav-link": true
                })}
                to="#"
                onClick={() => this.toggleFirstTab("1")}
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
                onClick={() => this.toggleFirstTab("2")}
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
                onClick={() => this.toggleFirstTab("3")}
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
                onClick={() => this.toggleFirstTab("4")}
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
                      pin: pdprops.propertyDetails.pin,
                      county: pdprops.propertyDetails.county,
                      address: pdprops.propertyDetails.address,
                      city: pdprops.propertyDetails.city,
                      state: pdprops.propertyDetails.state,
                      zip: pdprops.propertyDetails.zip,
                      township: pdprops.propertyDetails.township,
                      classCode: pdprops.propertyDetails.classCode,
                      assessedValue: pdprops.propertyDetails.assessedValue,
                      marketValue: pdprops.propertyDetails.marketValue,
                      taxesPerYear: pdprops.propertyDetails.taxesPerYear,
                      preeqexm: pdprops.propertyDetails.preeqexm,
                      homeOwner: pdprops.propertyDetails.homeOwner,
                      seniorExemption: pdprops.propertyDetails.seniorExemption,
                      seniorFreeze: pdprops.propertyDetails.seniorFreeze,
                      totalAcres: pdprops.propertyDetails.totalAcres,
                      legalDescription:
                        pdprops.propertyDetails.legalDescription,
                      googleMapView: pdprops.propertyDetails.googleMapView
                    }}
                    validationSchema={propertyDetailsSchema}
                    onSubmit={values => {
                      if (pdprops.formType == FORM_ADD) {
                        this.props.loader();
                        apiCallCreator.addPropertyDetails(
                          values,
                          this.props.addNewProperty
                        );
                        this.toggleFirstTab("2");
                      }
                      if (pdprops.formType == FORM_EDIT) {
                        apiCallCreator.editPropertyDetails(
                          values,
                          pdprops.id,
                          pdprops.propertyNumber
                        );
                        this.toggleFirstTab("2");
                      }
                      this.toggleFirstTab("2");
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Row>
                          {this.fieldMapper(
                            this.state.propertyDetailMap,
                            errors,
                            touched,
                            pdprops.fieldDisable
                          )}
                        </Row>
                        {pdprops.formType === FORM_ADD ||
                        pdprops.formType === FORM_EDIT ? (
                          <Button
                            className="btn-block"
                            type="submit"
                            size="sm"
                            color="primary"
                          >
                            Next
                          </Button>
                        ) : (
                          <Button
                            className="btn-block"
                            color="secondary"
                            size="sm"
                            onClick={() => this.toggleFirstTab("2")}
                          >
                            <IntlMessages id="property.next" />
                          </Button>
                        )}
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
                      propertyNumber: pdprops.propertyNumber,
                      creditor: pdprops.lienDetails.creditor,
                      amount: pdprops.lienDetails.amount,
                      paymentAmount: pdprops.lienDetails.paymentAmount
                    }}
                    validationSchema={lienSchema}
                    onSubmit={values => {
                      if (pdprops.formType == FORM_ADD) {
                        this.toggleFirstTab("3");
                        apiCallCreator.addLien(values, this.props.addNewLien);
                      }
                      if (pdprops.formType == FORM_EDIT) {
                        apiCallCreator.editLien(
                          values,
                          pdprops.id,
                          pdprops.propertyNumber
                        );
                        this.toggleFirstTab("3");
                      }
                      this.toggleFirstTab("3");
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Row>
                          {this.fieldMapper(
                            this.state.lienInfoMap,
                            errors,
                            touched,
                            pdprops.fieldDisable
                          )}
                        </Row>
                        {pdprops.formType === FORM_ADD ||
                        pdprops.formType === FORM_EDIT ? (
                          <Button
                            className="btn-block"
                            type="submit"
                            size="sm"
                            color="primary"
                          >
                            Next
                          </Button>
                        ) : (
                          <ButtonGroup className="m-auto d-flex">
                            <Button
                              className="w-100"
                              color="primary"
                              size="sm"
                              onClick={() => this.toggleFirstTab("1")}
                            >
                              <IntlMessages id="property.previous" />
                            </Button>
                            <Button
                              className="w-100"
                              color="secondary"
                              size="sm"
                              onClick={() => this.toggleFirstTab("2")}
                            >
                              <IntlMessages id="property.next" />
                            </Button>
                          </ButtonGroup>
                        )}
                      </Form>
                    )}
                  </Formik>
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
                      propertyNumber: pdprops.propertyNumber,
                      name: pdprops.assesseeDetails.name,
                      street: pdprops.assesseeDetails.address,
                      city: pdprops.assesseeDetails.city,
                      state: pdprops.assesseeDetails.state,
                      zip: pdprops.assesseeDetails.zip
                    }}
                    validationSchema={assesseeSchema}
                    onSubmit={values => {
                      if (pdprops.formType == FORM_ADD) {
                        apiCallCreator.addAssessee(
                          values,
                          this.props.addNewAssessee
                        );
                        this.toggleFirstTab("4");
                      }
                      if (pdprops.formType == FORM_EDIT) {
                        apiCallCreator.editAssessee(
                          values,
                          pdprops.id,
                          pdprops.propertyNumber
                        );
                        this.toggleFirstTab("4");
                      }
                      this.toggleFirstTab("4");
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Row>
                          {this.fieldMapper(
                            this.state.assesseeMap,
                            errors,
                            touched,
                            pdprops.fieldDisable
                          )}
                        </Row>
                        {pdprops.formType === FORM_ADD ||
                        pdprops.formType === FORM_EDIT ? (
                          <Button
                            className="btn-block"
                            type="submit"
                            size="sm"
                            color="primary"
                          >
                            Next
                          </Button>
                        ) : (
                          <ButtonGroup className="m-auto d-flex">
                            <Button
                              className="w-100"
                              color="primary"
                              size="sm"
                              onClick={() => this.toggleFirstTab("2")}
                            >
                              <IntlMessages id="property.previous" />
                            </Button>
                            <Button
                              className="w-100"
                              color="secondary"
                              size="sm"
                              onClick={() => this.toggleFirstTab("3")}
                            >
                              <IntlMessages id="property.next" />
                            </Button>
                          </ButtonGroup>
                        )}
                      </Form>
                    )}
                  </Formik>
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
                      propertyNumber: pdprops.propertyNumber,
                      actualEstimatedDate:
                        pdprops.datesDetails.actualEstimatedDate,
                      firstInstallmentDate:
                        pdprops.datesDetails.firstInstallmentDate,
                      secondInstallmentDate:
                        pdprops.datesDetails.secondInstallmentDate,
                      petitionFiledDate: pdprops.datesDetails.petitionFiledDate,
                      extentionDate: pdprops.datesDetails.extentionDate,
                      expirationDate: pdprops.datesDetails.expirationDate,
                      assignmentCallDate:
                        pdprops.datesDetails.assignmentCallDate,
                      proveUpDate: pdprops.datesDetails.proveUpDate,
                      orderOfDate: pdprops.datesDetails.orderOfDate,
                      dateOfTaxDeed: pdprops.datesDetails.dateOfTaxDeed
                    }}
                    validationSchema={dateSchema}
                    onSubmit={values => {
                      if (pdprops.formType == FORM_ADD) {
                        apiCallCreator.addImportantDate(
                          values,
                          this.props.addNewDates
                        );
                        this.setRedirect();
                        setTimeout(this.renderRedirect(), 3000);
                      }
                      if (pdprops.formType == FORM_EDIT) {
                        apiCallCreator.editImportantDate(
                          values,
                          pdprops.id,
                          pdprops.propertyNumber
                        );
                        this.setRedirect();
                      }
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Row>
                          {this.fieldMapper(
                            this.state.datesMap,
                            errors,
                            touched,
                            pdprops.fieldDisable
                          )}
                        </Row>
                        {pdprops.formType === FORM_ADD ||
                        pdprops.formType === FORM_EDIT ? (
                          <div>
                            {this.renderRedirect()}
                            <Button
                              className="btn-block"
                              type="submit"
                              size="sm"
                              color="primary"
                            >
                              Submit
                            </Button>
                          </div>
                        ) : (
                          <Button
                            className="btn-block"
                            color="secondary"
                            size="sm"
                            onClick={() => this.toggleFirstTab("3")}
                          >
                            <IntlMessages id="property.previous" />
                          </Button>
                        )}
                      </Form>
                    )}
                  </Formik>
                </CardBody>
              </Colxx>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect push to="/app/propertyDetails/details" />;
    }
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      activeFirstTab: "1",

      selectedProperty: {},
      selectedLien: {},
      selectedAssessee: {},
      selectedDates: {},

      propertyDetailMap: [
        { name: "pin", size: 4, type: "text", text: "property." },
        { name: "address", size: 4, type: "text", text: "property." },
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
        { name: "street", size: 4, type: "text", text: "assessee." },
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

  toggleFirstTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeFirstTab: tab
      });
    }
  }

  fieldMapper = (arr, errors, touched, fieldStatus) => {
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
              disabled={fieldStatus}
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
  address: Yup.string().required("Required"),
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
  street: Yup.string().required("Required"),
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
  return { propertyDetails: state.propertyDetails };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewProperty: val => dispatch(actionCreator.AddNewPropertyDetails(val)),
    addNewAssessee: () => dispatch(actionCreator.AddNewAssessee()),
    addNewLien: () => dispatch(actionCreator.AddNewLien()),
    addNewDates: () => dispatch(actionCreator.AddNewImportantDates()),
    changeFormType: val => dispatch(actionCreator.ChangeFormType(val)),
    singleRecordData: val => dispatch(actionCreator.SingleRecordData(val)),
    loader: () => dispatch(actionCreator.LoaderState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsForm);

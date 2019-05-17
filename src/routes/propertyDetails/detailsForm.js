import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import {
  Row,
  Button,
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

import { connect } from "react-redux";
import * as apiCallCreator from "Redux/propertyDetails/_axios";
import * as actionCreator from "Redux/propertyDetails/actions";
import { FORM_ADD, FORM_VIEW, FORM_EDIT } from "Constants/actionTypes";

class DetailsForm extends Component {
  render() {
    const pdprops = this.props.propertyDetails;
    console.log(this.props);
    return (
      <div>
        <Row>
          <Colxx xxs="12">
            <div className="mb-2">
              <h1>
                <IntlMessages id="property.addNew" />
                {pdprops.propertyNumber != null
                  ? " : " + pdprops.propertyNumber
                  : ""}
              </h1>

              <div className="float-sm-right">
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
                      <DropdownItem>
                        <IntlMessages id="property.editDetails" />
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
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
                      pin: pdprops.selectedData.propertyDetails.pin,
                      county: pdprops.selectedData.propertyDetails.county,
                      pin: pdprops.selectedData.propertyDetails.pin,
                      street: pdprops.selectedData.propertyDetails.street,
                      city: pdprops.selectedData.propertyDetails.city,
                      state: pdprops.selectedData.propertyDetails.state,
                      zip: pdprops.selectedData.propertyDetails.zip,
                      township: pdprops.selectedData.propertyDetails.township,
                      classCode: pdprops.selectedData.propertyDetails.classCode,
                      assessedValue:
                        pdprops.selectedData.propertyDetails.assessedValue,
                      marketValue:
                        pdprops.selectedData.propertyDetails.marketValue,
                      taxesPerYear:
                        pdprops.selectedData.propertyDetails.taxesPerYear,
                      preeqexm: pdprops.selectedData.propertyDetails.preeqexm,
                      homeOwner: pdprops.selectedData.propertyDetails.homeOwner,
                      seniorExemption:
                        pdprops.selectedData.propertyDetails.seniorExemption,
                      seniorFreeze:
                        pdprops.selectedData.propertyDetails.seniorFreeze,
                      totalAcres:
                        pdprops.selectedData.propertyDetails.totalAcres,
                      legalDescription:
                        pdprops.selectedData.propertyDetails.legalDescription,
                      googleMapView:
                        pdprops.selectedData.propertyDetails.googleMapView
                    }}
                    validationSchema={propertyDetailsSchema}
                    onSubmit={values => {
                      apiCallCreator.addPropertyDetails(
                        values,
                        this.props.addNewProperty
                      );
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
                      propertyNumber:
                        pdprops.selectedData.propertyDetails.propertyNumber,
                      creditor: pdprops.selectedData.propertyDetails.creditor,
                      amount: pdprops.selectedData.propertyDetails.amount,
                      paymentAmount:
                        pdprops.selectedData.propertyDetails.paymentAmount
                    }}
                    validationSchema={lienSchema}
                    onSubmit={values => {
                      this.toggleFirstTab("3");
                      apiCallCreator.addLien(values, this.props.addNewLien);
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
          <TabPane tabId="3">
            <Row>
              <Colxx sm="12">
                <CardBody>
                  <Formik
                    initialValues={{
                      propertyNumber:
                        pdprops.selectedData.propertyDetails.propertyNumber,
                      name: pdprops.selectedData.propertyDetails.name,
                      address: pdprops.selectedData.propertyDetails.address,
                      city: pdprops.selectedData.propertyDetails.city,
                      state: pdprops.selectedData.propertyDetails.state,
                      zip: pdprops.selectedData.propertyDetails.zip
                    }}
                    validationSchema={assesseeSchema}
                    onSubmit={values => {
                      apiCallCreator.addAssessee(
                        values,
                        this.props.addNewAssessee
                      );
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
                        <Button
                          className="btn-block"
                          type="submit"
                          size="sm"
                          color="primary"
                        >
                          Submit
                        </Button>
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
                      propertyNumber:
                        pdprops.selectedData.propertyDetails.propertyNumber,
                      actualEstimatedDate:
                        pdprops.selectedData.propertyDetails
                          .actualEstimatedDate,
                      firstInstallmentDate:
                        pdprops.selectedData.propertyDetails
                          .firstInstallmentDate,
                      secondInstallmentDate:
                        pdprops.selectedData.propertyDetails
                          .secondInstallmentDate,
                      petitionFiledDate:
                        pdprops.selectedData.propertyDetails.petitionFiledDate,
                      extentionDate:
                        pdprops.selectedData.propertyDetails.extentionDate,
                      expirationDate:
                        pdprops.selectedData.propertyDetails.expirationDate,
                      assignmentCallDate:
                        pdprops.selectedData.propertyDetails.assignmentCallDate,
                      proveUpDate:
                        pdprops.selectedData.propertyDetails.proveUpDate,
                      orderOfDate:
                        pdprops.selectedData.propertyDetails.orderOfDate,
                      dateOfTaxDeed:
                        pdprops.selectedData.propertyDetails.dateOfTaxDeed
                    }}
                    validationSchema={dateSchema}
                    onSubmit={values => {
                      apiCallCreator.addImportantDate(
                        values,
                        this.props.addNewDates
                      );
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
        </TabContent>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      activeFirstTab: "1",

      selectedProperty: {},
      selectedLien: {},
      selectedAssessee: {},
      selectedDates: {},

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
    if (this.state.activeTab !== tab) {
      this.setState({
        activeFirstTab: tab
      });
    }
  };

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
  return { propertyDetails: state.propertyDetails };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewProperty: val => dispatch(actionCreator.AddNewPropertyDetails(val)),
    addNewAssessee: () => dispatch(actionCreator.AddNewAssessee()),
    addNewLien: () => dispatch(actionCreator.AddNewLien()),
    addNewDates: () => dispatch(actionCreator.AddNewImportantDates()),
    changeFormType: val => dispatch(actionCreator.ChangeFormType(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsForm);

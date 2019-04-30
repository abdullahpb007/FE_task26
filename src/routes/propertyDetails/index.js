import React, { Component, Fragment } from "react";
import { injectIntl } from "react-intl";
import {
  Row,
  Card,
  Button,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Table
} from "reactstrap";

import ReactTable from "react-table";

import IntlMessages from "Util/IntlMessages";
import { Colxx, Separator } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";
import DataTablePagination from "Components/DataTables/pagination";

import mouseTrap from "react-mousetrap";

class PropertyDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Property Details

      modalAddProperty: false,
      modalEditProperty: false,
      modalViewProperty: false,

      propertyData: [
        {
          propertyNumber: "1409276022Sans",
          pin: "6000",
          county: "San Francisco",
          address: "600 Guerrero St",
          city: "Poblacion Makati",
          state: "California",
          zip: "94110",
          township: "Coahuila",
          classCode: "40",
          assessedValue: "200000",
          marketValue: "180000",
          taxesPerYear: "3200",
          preeqexm: "0",
          homeOwner: "6000",
          seniorExemption: "0",
          seniorFreeze: "0",
          totalAcres: "1",
          legalDescription: "Strafford Woods - Lot 2"
        },
        {
          propertyNumber: "1409276022Sans",
          pin: "6001",
          county: "San Francisco",
          address: "519 Guerrero St",
          city: "Poblacion Makati",
          state: "California",
          zip: "94110",
          township: "Coahuila",
          classCode: "41",
          assessedValue: "302000",
          marketValue: "210000",
          taxesPerYear: "1200",
          preeqexm: "0",
          homeOwner: "3000",
          seniorExemption: "0",
          seniorFreeze: "0",
          totalAcres: "1.5",
          legalDescription: "Strafford Woods - Lot 2"
        }
      ],

      propertyColumn: [
        {
          Header: "Pin",
          accessor: "pin",
          sortable: true,
          filterable: true,
          style: {
            margin: "auto"
          }
        },
        {
          Header: "Address",
          accessor: "address",
          sortable: true,
          filterable: true,
          style: {
            margin: "auto"
          }
        },
        {
          Header: "City",
          accessor: "city",
          sortable: true,
          filterable: true,
          style: {
            margin: "auto"
          }
        },
        {
          Header: "State",
          accessor: "state",
          sortable: true,
          filterable: true,
          style: {
            margin: "auto"
          }
        },
        {
          Header: "County",
          accessor: "county",
          sortable: true,
          filterable: true,
          style: {
            margin: "auto"
          }
        },
        {
          Header: "",
          Cell: props => {
            return (
              <ButtonGroup className="m-auto">
                <Button
                  outline
                  color="primary"
                  size="sm"
                  onClick={() => this.viewBtnControl(props.original)}
                >
                  <IntlMessages id="property.viewbtn" />
                </Button>
                <Button
                  outline
                  color="secondary"
                  size="sm"
                  onClick={() => this.editBtnControl(props.original)}
                >
                  <IntlMessages id="property.editbtn" />
                </Button>
              </ButtonGroup>
            );
          }
        }
      ],

      selectedProperty: {},

      propertyNumber: "",
      county: "",
      pin: "",
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
    };
  }

  //PropertyDetails

  toggleAddProperty = () => {
    this.setState({
      modalAddProperty: !this.state.modalAddProperty
    });
  };

  toggleViewProperty = () => {
    this.setState({
      modalViewProperty: !this.state.modalViewProperty
    });
  };

  toggleEditProperty = () => {
    this.setState({
      modalEditProperty: !this.state.modalEditProperty
    });
  };

  viewBtnControl = property => {
    const selectedProperty = { ...property };
    this.setState({ selectedProperty });
    this.toggleViewProperty();
  };

  editBtnControl = property => {
    const selectedProperty = { ...property };
    this.setState({ selectedProperty });
    this.toggleEditProperty();
  };

  handleInputChange = event => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const propertyData = [...this.state.propertyData];

    propertyData.push({
      propertyNumber: this.state.propertyNumber,
      county: this.state.county,
      pin: propertyData.length + 6000,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      township: this.state.township,
      classCode: this.state.classCode,
      assessedValue: this.state.assessedValue,
      marketValue: this.state.marketValue,
      taxesPerYear: this.state.taxesPerYear,
      preeqexm: this.state.preeqexm,
      homeOwner: this.state.homeOwner,
      seniorExemption: this.state.seniorExemption,
      seniorFreeze: this.state.seniorFreeze,
      totalAcres: this.state.totalAcres,
      legalDescription: this.state.legalDescription
    });
    this.toggleAddProperty();
    this.setState({ propertyData });
  };

  handleEditSubmit = event => {
    event.preventDefault();
    const updatedProperty = {
      propertyNumber:
        this.state.propertyNumber == ""
          ? this.state.selectedProperty.propertyNumber
          : this.state.propertyNumber,
      county:
        this.state.county == ""
          ? this.state.selectedProperty.county
          : this.state.county,
      pin:
        this.state.pin == "" ? this.state.selectedProperty.pin : this.state.pin,
      address:
        this.state.address == ""
          ? this.state.selectedProperty.address
          : this.state.address,
      city:
        this.state.city == ""
          ? this.state.selectedProperty.city
          : this.state.city,
      state:
        this.state.state == ""
          ? this.state.selectedProperty.state
          : this.state.state,
      zip:
        this.state.zip == "" ? this.state.selectedProperty.zip : this.state.zip,
      township:
        this.state.township == ""
          ? this.state.selectedProperty.township
          : this.state.township,
      classCode:
        this.state.classCode == ""
          ? this.state.selectedProperty.classCode
          : this.state.classCode,
      assessedValue:
        this.state.assessedValue == ""
          ? this.state.selectedProperty.assessedValue
          : this.state.assessedValue,
      marketValue:
        this.state.marketValue == ""
          ? this.state.selectedProperty.marketValue
          : this.state.marketValue,
      taxesPerYear:
        this.state.taxesPerYear == ""
          ? this.state.selectedProperty.taxesPerYear
          : this.state.taxesPerYear,
      preeqexm:
        this.state.preeqexm == ""
          ? this.state.selectedProperty.preeqexm
          : this.state.preeqexm,
      homeOwner:
        this.state.homeOwner == ""
          ? this.state.selectedProperty.homeOwner
          : this.state.homeOwner,
      seniorExemption:
        this.state.seniorExemption == ""
          ? this.state.selectedProperty.seniorExemption
          : this.state.seniorExemption,
      seniorFreeze:
        this.state.seniorFreeze == ""
          ? this.state.selectedProperty.seniorFreeze
          : this.state.seniorFreeze,
      totalAcres:
        this.state.totalAcres == ""
          ? this.state.selectedProperty.totalAcres
          : this.state.totalAcres,
      legalDescription:
        this.state.legalDescription == ""
          ? this.state.selectedProperty.legalDescription
          : this.state.legalDescription
    };
    const propertyData = [...this.state.propertyData];
    const index = propertyData.findIndex(p => {
      return p.pin == this.state.selectedProperty.pin;
    });
    console.log(index);
    propertyData[index] = { ...updatedProperty };
    this.toggleEditProperty();
    this.setState({ propertyData });
  };

  render() {
    return (
      <Fragment>
        <div className="disable-text-selection">
          <Row>
            <Colxx xxs="12">
              <div className="mb-2">
                <h1>
                  <IntlMessages id="menu.propertyDetails" />
                </h1>

                <div className="float-sm-right">
                  <Button
                    color="success"
                    size="lg"
                    className="default"
                    onClick={this.toggleAddProperty}
                  >
                    <IntlMessages id="property.add-modal-title" />
                  </Button>
                  {"  "}
                </div>

                <BreadcrumbItems match={this.props.match} />
              </div>
              <Separator className="mb-5" />
            </Colxx>
          </Row>
          <Row>
            <Colxx xxs="12" className="mb-3">
              <Card className="d-flex flex-row">
                <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                  <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                    <ReactTable
                      className="w-100"
                      data={this.state.propertyData}
                      columns={this.state.propertyColumn}
                      noDataText={"Loading Data..."}
                      defaultPageSize={5}
                      showPageSizeOptions={true}
                      PaginationComponent={DataTablePagination}
                      defaultFilterMethod={(filter, row) => {
                        return row[filter.id]
                          .toLowerCase()
                          .includes(filter.value.toLowerCase());
                      }}
                    />
                  </div>
                </div>
              </Card>
            </Colxx>
          </Row>
        </div>

        <Modal
          isOpen={this.state.modalAddProperty}
          toggle={this.toggleAddProperty}
          size="lg"
        >
          <ModalHeader toggle={this.toggleAddProperty}>
            <IntlMessages id="property.add-modal-title" />
          </ModalHeader>
          <ModalBody>
            <Row>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <IntlMessages id="property.propertyNumber" />
                  <Input
                    type="text"
                    name="propertyNumber"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <IntlMessages id="property.pin" />
                  <Input
                    type="number"
                    name="pin"
                    onChange={this.handleInputChange}
                    disabled
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <IntlMessages id="property.county" />
                  <Input
                    type="text"
                    name="county"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="6">
                <Label className="form-group has-top-label">
                  <IntlMessages id="property.address" />
                  <Input
                    type="text"
                    name="address"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="3">
                <Label className="form-group has-top-label">
                  <IntlMessages id="property.city" />
                  <Input
                    type="text"
                    name="city"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="3">
                <Label className="form-group has-top-label">
                  <IntlMessages id="property.state" />
                  <Input
                    type="text"
                    name="state"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="2">
                <Label className="form-group has-top-label">
                  <IntlMessages id="property.zip" />
                  <Input
                    type="number"
                    name="zip"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <IntlMessages id="property.township" />
                  <Input
                    type="text"
                    name="township"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="6">
                <Label className="form-group has-top-label">
                  <IntlMessages id="property.classCode" />
                  <Input
                    type="number"
                    name="classCode"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <IntlMessages id="property.assessedValue" />
                  <Input
                    type="number"
                    name="assessedValue"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <IntlMessages id="property.marketValue" />
                  <Input
                    type="number"
                    name="marketValue"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <IntlMessages id="property.taxesPerYear" />
                  <Input
                    type="number"
                    name="taxesPerYear"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <IntlMessages id="property.preeqexm" />
                  <Input
                    type="number"
                    name="preeqexm"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <IntlMessages id="property.homeOwner" />
                  <Input
                    type="number"
                    name="homeOwner"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <IntlMessages id="property.seniorExemption" />
                  <Input
                    type="number"
                    name="seniorExemption"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <IntlMessages id="property.seniorFreeze" />
                  <Input
                    type="number"
                    name="seniorFreeze"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <IntlMessages id="property.totalAcres" />
                  <Input
                    type="number"
                    name="totalAcres"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="8">
                <Label className="form-group has-top-label">
                  <IntlMessages id="property.legalDescription" />
                  <Input
                    type="textarea"
                    name="legalDescription"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" outline onClick={this.toggleAddProperty}>
              <IntlMessages id="pages.cancel" />
            </Button>
            <Button color="primary" onClick={this.handleSubmit}>
              <IntlMessages id="pages.submit" />
            </Button>{" "}
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={this.state.modalViewProperty}
          toggle={this.toggleViewProperty}
          size="lg"
        >
          <ModalHeader toggle={this.toggleViewProperty}>
            <IntlMessages id="property.view-modal-title" />
          </ModalHeader>
          <ModalBody>
            <Row>
              <Colxx xxs="6">
                <Table hover>
                  <tbody>
                    <tr>
                      <th scope="row">Pin</th>
                      <th>{this.state.selectedProperty.pin}</th>
                    </tr>
                    <tr>
                      <th scope="row">County</th>
                      <th>{this.state.selectedProperty.county}</th>
                    </tr>
                    <tr>
                      <th scope="row">Address</th>
                      <th>{this.state.selectedProperty.address}</th>
                    </tr>
                    <tr>
                      <th scope="row">City</th>
                      <th>{this.state.selectedProperty.city}</th>
                    </tr>
                    <tr>
                      <th scope="row">State</th>
                      <th>{this.state.selectedProperty.state}</th>
                    </tr>
                    <tr>
                      <th scope="row">Zip</th>
                      <th>{this.state.selectedProperty.zip}</th>
                    </tr>
                    <tr>
                      <th scope="row">Township</th>
                      <th>{this.state.selectedProperty.township}</th>
                    </tr>
                    <tr>
                      <th scope="row">Class Code</th>
                      <th>{this.state.selectedProperty.classCode}</th>
                    </tr>
                    <tr>
                      <th scope="row">Legal Description</th>
                      <th>{this.state.selectedProperty.legalDescription}</th>
                    </tr>
                  </tbody>
                </Table>
              </Colxx>
              <Colxx xxs="6">
                <Table hover>
                  <tbody>
                    <tr>
                      <th scope="row">Assessed Value</th>
                      <th>{"$" + this.state.selectedProperty.assessedValue}</th>
                    </tr>
                    <tr>
                      <th scope="row">Market Value</th>
                      <th>{"$" + this.state.selectedProperty.marketValue}</th>
                    </tr>
                    <tr>
                      <th scope="row">Taxes Per Year</th>
                      <th>{"$" + this.state.selectedProperty.taxesPerYear}</th>
                    </tr>
                    <tr>
                      <th scope="row">PREEQEXM</th>
                      <th>{"$" + this.state.selectedProperty.preeqexm}</th>
                    </tr>
                    <tr>
                      <th scope="row">Home Owner</th>
                      <th>{"$" + this.state.selectedProperty.homeOwner}</th>
                    </tr>
                    <tr>
                      <th scope="row">Senior Exemption</th>
                      <th>
                        {"$" + this.state.selectedProperty.seniorExemption}
                      </th>
                    </tr>
                    <tr>
                      <th scope="row">Senior Freeze</th>
                      <th>{"$" + this.state.selectedProperty.seniorFreeze}</th>
                    </tr>
                    <tr>
                      <th scope="row">Total Acres</th>
                      <th>{this.state.selectedProperty.totalAcres}</th>
                    </tr>
                  </tbody>
                </Table>
              </Colxx>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" outline onClick={this.toggleViewProperty}>
              <IntlMessages id="pages.close" />
            </Button>{" "}
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={this.state.modalEditProperty}
          toggle={this.toggleEditProperty}
          size="lg"
        >
          <ModalHeader toggle={this.toggleEditProperty}>
            <IntlMessages id="property.add-modal-title" />
          </ModalHeader>
          <ModalBody>
            <Row>
              <Colxx xxs="3">
                <Label className="form-group has-float-label">
                  <IntlMessages id="property.pin" />
                  <Input
                    type="number"
                    name="pin"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.pin}
                    disabled
                  />
                </Label>
              </Colxx>
              <Colxx xxs="3">
                <Label className="form-group has-float-label">
                  <IntlMessages id="property.county" />
                  <Input
                    type="text"
                    name="county"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.county}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="6">
                <Label className="form-group has-float-label-group has-float-label">
                  <IntlMessages id="property.address" />
                  <Input
                    type="text"
                    name="address"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.address}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="3">
                <Label className="form-group has-float-label">
                  <IntlMessages id="property.city" />
                  <Input
                    type="text"
                    name="city"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.city}
                    required
                  />
                </Label>
              </Colxx>
              <Colxx xxs="3">
                <Label className="form-group has-float-label">
                  <IntlMessages id="property.state" />
                  <Input
                    type="text"
                    name="state"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.state}
                    required
                  />
                </Label>
              </Colxx>
              <Colxx xxs="2">
                <Label className="form-group has-float-label">
                  <IntlMessages id="property.zip" />
                  <Input
                    type="number"
                    name="zip"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.zip}
                    required
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-float-label">
                  <IntlMessages id="property.township" />
                  <Input
                    type="text"
                    name="township"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.township}
                    required
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-float-label">
                  <IntlMessages id="property.classCode" />
                  <Input
                    type="number"
                    name="classCode"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.classCode}
                    required
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-float-label">
                  <IntlMessages id="property.assessedValue" />
                  <Input
                    type="number"
                    name="assessedValue"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.assessedValue}
                    required
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-float-label">
                  <IntlMessages id="property.marketValue" />
                  <Input
                    type="number"
                    name="marketValue"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.marketValue}
                    required
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-float-label">
                  <IntlMessages id="property.taxesPerYear" />
                  <Input
                    type="number"
                    name="taxesPerYear"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.taxesPerYear}
                    required
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-float-label">
                  <IntlMessages id="property.preeqexm" />
                  <Input
                    type="number"
                    name="PREEQEXM"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.preeqexm}
                    required
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-float-label">
                  <IntlMessages id="property.homeOwner" />
                  <Input
                    type="number"
                    name="homeOwner"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.homeOwner}
                    required
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-float-label">
                  <IntlMessages id="property.seniorExemption" />
                  <Input
                    type="number"
                    name="seniorExemption"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.seniorExemption}
                    required
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-float-label">
                  <IntlMessages id="property.seniorFreeze" />
                  <Input
                    type="number"
                    name="seniorFreeze"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.seniorFreeze}
                    required
                  />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-float-label">
                  <IntlMessages id="property.totalAcres" />
                  <Input
                    type="number"
                    name="totalAcres"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.totalAcres}
                    required
                  />
                </Label>
              </Colxx>
              <Colxx xxs="8">
                <Label className="form-group has-float-label">
                  <IntlMessages id="property.legalDescription" />
                  <Input
                    type="textarea"
                    name="legalDescription"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.legalDescription}
                    required
                  />
                </Label>
              </Colxx>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" outline onClick={this.toggleEditProperty}>
              <IntlMessages id="pages.cancel" />
            </Button>
            <Button color="primary" onClick={this.handleEditSubmit}>
              <IntlMessages id="pages.submit" />
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}
export default injectIntl(mouseTrap(PropertyDetails));

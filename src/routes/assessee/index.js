import React, { Component, Fragment } from "react";
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

export default class ModalUi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Assessee Details
      modalAddProperty: false,
      modalEditProperty: false,
      modalViewProperty: false,

      propertyData: [
        {
          name: "steve",
          pin: "6000",
          address: "600 Guerrero St",
          city: "Poblacion Makati",
          state: "California",
          zip: "94110"
        },
        {
          name: "bill",
          pin: "6001",
          address: "519 Guerrero St",
          city: "Poblacion Makati",
          state: "California",
          zip: "94110"
        }
      ],

      propertyColumn: [
        {
          Header: "Pin",
          accessor: "pin",
          filterable: "true"
        },
        {
          Header: "Name",
          accessor: "name",
          filterable: "true"
        },
        {
          Header: "Address",
          accessor: "address",
          filterable: "true"
        },
        {
          Header: "City",
          accessor: "city",
          filterable: "true"
        },
        {
          Header: "State",
          accessor: "state",
          filterable: "true"
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
                  <IntlMessages id="assessee.view" />
                </Button>
                <Button
                  outline
                  color="secondary"
                  size="sm"
                  onClick={() => this.editBtnControl(props.original)}
                >
                  <IntlMessages id="assessee.edit" />
                </Button>
              </ButtonGroup>
            );
          }
        }
      ],

      selectedProperty: {},

      pin: "",
      name: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    };
  }

  //Assessee Details

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

  // handleSubmit = e => {
  //     e.preventDefault();
  //     // console.log(this.state.name);
  //     // a.push({ name: this.state.name, address: this.state.address, city: this.state.city, states: this.state.states, zip: this.state.zip });
  //     // this.setState(a);
  //     console.log(a);
  // }
  // handleChange = ({ currentTarget: input }) => {
  //     let a = [...this.state.values];
  //     console.log(input .target.value);
  //     // this.setState({ [e.target.name]: e.target.value });
  //     a[input.name] = input.value;
  //     this.setState({ a });

  // }

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
      name: this.state.name,
      pin: propertyData.length + 6000,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    });
    this.toggleAddProperty();
    this.setState({ propertyData });
  };

  handleEditSubmit = event => {
    event.preventDefault();
    const updatedProperty = {
      pin:
        this.state.pin == "" ? this.state.selectedProperty.pin : this.state.pin,
      name:
        this.state.name == ""
          ? this.state.selectedProperty.name
          : this.state.name,
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
        this.state.zip == "" ? this.state.selectedProperty.zip : this.state.zip
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
        <div>
          <Row>
            <Colxx xxs="12">
              <div className="mb-2">
                <h1>
                  <IntlMessages id="assessee.title" />
                </h1>

                <div className="float-sm-right">
                  <Button
                    color="success"
                    size="lg"
                    className="default"
                    onClick={this.toggleAddProperty}
                  >
                    <IntlMessages id="assessee.popup" />
                  </Button>
                  {"  "}
                </div>

                <BreadcrumbItems match={this.props.match} />
              </div>
              <Separator className="mb-3" />
            </Colxx>
          </Row>
          <Row>
            <Colxx xxs="12">
              <div className="mb-4">
                <Card>
                  <ReactTable
                    data={this.state.propertyData}
                    columns={this.state.propertyColumn}
                    defaultPageSize={5}
                    className="mt-3 ml-3 mr-3"
                  />
                </Card>
              </div>
            </Colxx>
          </Row>
        </div>
        <Modal
          isOpen={this.state.modalAddProperty}
          toggle={this.toggleAddProperty}
          size="lg"
        >
          <ModalHeader toggle={this.toggleAddProperty}>
            <IntlMessages id="assessee.popupTitle" />
          </ModalHeader>
          <ModalBody>
            <Row>
              <Colxx xxs="12">
                <Label className="form-group has-float-label-group has-float-label">
                  <IntlMessages id="assessee.name" />
                  <Input
                    type="text"
                    name="name"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="12">
                <Label className="form-group has-float-label-group has-float-label">
                  <IntlMessages id="assessee.address" />
                  <Input
                    type="text"
                    name="address"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="12">
                <Label className="form-group has-float-label">
                  <IntlMessages id="assessee.city" />
                  <Input
                    type="text"
                    name="city"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="12">
                <Label className="form-group has-float-label">
                  <IntlMessages id="assessee.state" />
                  <Input
                    type="text"
                    name="state"
                    onChange={this.handleInputChange}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="12">
                <Label className="form-group has-float-label">
                  <IntlMessages id="assessee.zip" />
                  <Input
                    type="number"
                    name="zip"
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
            <IntlMessages id="assessee.view" />
          </ModalHeader>
          <ModalBody>
            <Row>
              <Colxx xxs="12">
                <Table hover>
                  <tbody>
                    <tr>
                      <th scope="row">Name</th>
                      <th>{this.state.selectedProperty.name}</th>
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
                  </tbody>
                </Table>
              </Colxx>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" outline onClick={this.toggleViewProperty}>
              <IntlMessages id="pages.cancel" />
            </Button>{" "}
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={this.state.modalEditProperty}
          toggle={this.toggleEditProperty}
          size="lg"
        >
          <ModalHeader toggle={this.toggleEditProperty}>
            <IntlMessages id="assessee.edit" />
          </ModalHeader>
          <ModalBody>
            <Row>
              <Colxx xxs="3">
                <Label className="form-group has-float-label">
                  <IntlMessages id="assessee.name" />
                  <Input
                    type="text"
                    name="name"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.name}
                  />
                </Label>
              </Colxx>
              <Colxx xxs="6">
                <Label className="form-group has-float-label-group has-float-label">
                  <IntlMessages id="assessee.address" />
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
                  <IntlMessages id="assessee.city" />
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
                  <IntlMessages id="assessee.state" />
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
                  <IntlMessages id="assessee.zip" />
                  <Input
                    type="number"
                    name="zip"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedProperty.zip}
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

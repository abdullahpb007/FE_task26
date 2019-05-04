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
      modalAddassessee: false,
      modalEditassessee: false,
      modalViewassessee: false,

      assesseeData: [
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

      assesseeColumn: [
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

      selectedassessee: {},

      pin: "",
      name: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    };
  }

  //Assessee Details

  AddAssessee = () => {
    this.setState({
      modalAddassessee: !this.state.modalAddassessee
    });
  };

  viewAssessee = () => {
    this.setState({
      modalViewassessee: !this.state.modalViewassessee
    });
  };

  editAssessee = () => {
    this.setState({
      modalEditassessee: !this.state.modalEditassessee
    });
  };

  viewBtnControl = assessee => {
    const selectedassessee = { ...assessee };
    this.setState({ selectedassessee });
    this.viewAssessee();
  };

  editBtnControl = assessee => {
    const selectedassessee = { ...assessee };
    this.setState({ selectedassessee });
    this.editAssessee();
  };

  handleInputChange = event => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const assesseeData = [...this.state.assesseeData];

    assesseeData.push({
      name: this.state.name,
      pin: assesseeData.length + 6000,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    });
    this.AddAssessee();
    this.setState({ assesseeData });
  };

  handleEditSubmit = event => {
    event.preventDefault();
    const updatedassessee = {
      pin:
        this.state.pin == "" ? this.state.selectedassessee.pin : this.state.pin,
      name:
        this.state.name == ""
          ? this.state.selectedassessee.name
          : this.state.name,
      address:
        this.state.address == ""
          ? this.state.selectedassessee.address
          : this.state.address,
      city:
        this.state.city == ""
          ? this.state.selectedassessee.city
          : this.state.city,
      state:
        this.state.state == ""
          ? this.state.selectedassessee.state
          : this.state.state,
      zip:
        this.state.zip == "" ? this.state.selectedassessee.zip : this.state.zip
    };
    const assesseeData = [...this.state.assesseeData];
    const index = assesseeData.findIndex(p => {
      return p.pin == this.state.selectedassessee.pin;
    });
    console.log(index);
    assesseeData[index] = { ...updatedassessee };
    this.editAssessee();
    this.setState({ assesseeData });
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
                    onClick={this.AddAssessee}
                  >
                    <IntlMessages id="assessee.popup" />
                  </Button>
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
                    data={this.state.assesseeData}
                    columns={this.state.assesseeColumn}
                    defaultPageSize={5}
                    className="mt-3 ml-3 mr-3"
                  />
                </Card>
              </div>
            </Colxx>
          </Row>
        </div>
        <Modal
          isOpen={this.state.modalAddassessee}
          toggle={this.AddAssessee}
          size="lg"
        >
          <ModalHeader toggle={this.AddAssessee}>
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
            <Button color="secondary" outline onClick={this.AddAssessee}>
              <IntlMessages id="pages.cancel" />
            </Button>
            <Button color="primary" onClick={this.handleSubmit}>
              <IntlMessages id="pages.submit" />
            </Button>{" "}
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={this.state.modalViewassessee}
          toggle={this.viewAssessee}
          size="lg"
        >
          <ModalHeader toggle={this.viewAssessee}>
            <IntlMessages id="assessee.view" />
          </ModalHeader>
          <ModalBody>
            <Row>
              <Colxx xxs="12">
                <Table hover>
                  <tbody>
                    <tr>
                      <th scope="row">Name</th>
                      <th>{this.state.selectedassessee.name}</th>
                    </tr>
                    <tr>
                      <th scope="row">Address</th>
                      <th>{this.state.selectedassessee.address}</th>
                    </tr>
                    <tr>
                      <th scope="row">City</th>
                      <th>{this.state.selectedassessee.city}</th>
                    </tr>
                    <tr>
                      <th scope="row">State</th>
                      <th>{this.state.selectedassessee.state}</th>
                    </tr>
                    <tr>
                      <th scope="row">Zip</th>
                      <th>{this.state.selectedassessee.zip}</th>
                    </tr>
                  </tbody>
                </Table>
              </Colxx>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" outline onClick={this.viewAssessee}>
              <IntlMessages id="pages.cancel" />
            </Button>{" "}
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={this.state.modalEditassessee}
          toggle={this.editAssessee}
          size="lg"
        >
          <ModalHeader toggle={this.editAssessee}>
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
                    defaultValue={this.state.selectedassessee.name}
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
                    defaultValue={this.state.selectedassessee.address}
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
                    defaultValue={this.state.selectedassessee.city}
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
                    defaultValue={this.state.selectedassessee.state}
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
                    defaultValue={this.state.selectedassessee.zip}
                    required
                  />
                </Label>
              </Colxx>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" outline onClick={this.editAssessee}>
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

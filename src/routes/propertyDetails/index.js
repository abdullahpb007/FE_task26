import React, { Component, Fragment } from "react";
import { injectIntl } from "react-intl";
import { Row, Button } from "reactstrap";

import IntlMessages from "Util/IntlMessages";
import { Colxx, Separator } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";

import PropertyGrid from "./propertyGrid.jsx";
import ViewModal from "./viewModal.jsx";
import AddModal from "./addModal.jsx";
import EditModal from "./editModal.jsx";

import mouseTrap from "react-mousetrap";

class PropertyDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalAddProperty: false,
      modalEditProperty: false,
      modalViewProperty: false,

      selectedProperty: {}
    };
  }

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
          <PropertyGrid
            viewBtnHandler={this.viewBtnControl}
            editBtnHandler={this.editBtnControl}
          />
        </div>

        <AddModal
          modalAddHandler={this.state.modalAddProperty}
          toggleModalAdd={this.toggleAddProperty}
          onSubmit={this.handleSubmit}
        />

        <ViewModal
          modalViewHandler={this.state.modalViewProperty}
          toggleModalView={this.toggleViewProperty}
          details={this.state.selectedProperty}
        />

        <EditModal
          modalEditHandler={this.state.modalEditProperty}
          toggleModalEdit={this.toggleEditProperty}
          onSubmit={this.handleEditSubmit}
          details={this.state.selectedProperty}
        />
      </Fragment>
    );
  }

  //PropertyDetails
  handleSubmit = values => {
    const propertyData = [...this.state.propertyData];
    const payload = { ...values };

    propertyData.push(payload);
    this.toggleAddProperty();
    this.setState({ propertyData });
  };

  handleEditSubmit = values => {
    event.preventDefault();
    const updatedProperty = { ...values };
    const propertyData = [...this.state.propertyData];
    const index = propertyData.findIndex(p => {
      return p.pin == this.state.selectedProperty.pin;
    });
    propertyData[index] = { ...updatedProperty };
    this.toggleEditProperty();
    this.setState({ propertyData });
  };

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
}
export default injectIntl(mouseTrap(PropertyDetails));

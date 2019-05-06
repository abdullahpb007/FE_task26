import React, { Component, Fragment } from "react";
import { injectIntl } from "react-intl";
import { Row, Button } from "reactstrap";

import IntlMessages from "Util/IntlMessages";
import { Colxx, Separator } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";

import PropertyGrid from "./components/propertyGrid.jsx";
import ViewModal from "./components/viewModal.jsx";
import AddModal from "./components/addModal.jsx";
import EditModal from "./components/editModal.jsx";

import mouseTrap from "react-mousetrap";

class PropertyDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
            data={this.state.propertyData}
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

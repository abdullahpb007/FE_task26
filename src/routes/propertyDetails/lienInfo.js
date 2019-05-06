import React, { Component, Fragment } from "react";
import { injectIntl } from "react-intl";
import { Row, Button } from "reactstrap";

import IntlMessages from "Util/IntlMessages";
import { Colxx, Separator } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";

import PropertyGrid from "./lieninfo/propertyGrid.jsx";
import ViewModal from "./lieninfo/viewModal.jsx";
import AddModal from "./lieninfo/addModal.jsx";
import EditModal from "./lieninfo/editModal.jsx";

import mouseTrap from "react-mousetrap";

class PropertyDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalAddLien: false,
      modalEditProperty: false,
      modalViewProperty: false,

      lienData: [
        {
          propertyNumber: "1409276022Sans",
          creditor: "Jay Pvt",
          amount: "20000",
          paymentAmount: "12000"
        },
        {
          propertyNumber: "1409276022Kane",
          creditor: "Macro",
          amount: "25000",
          paymentAmount: "18000"
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
                  <IntlMessages id="menu.lieninfo" />
                </h1>

                <div className="float-sm-right">
                  <Button
                    color="success"
                    size="lg"
                    className="default"
                    onClick={this.toggleAddLien}
                  >
                    <IntlMessages id="lien.add-modal-title" />
                  </Button>
                  {"  "}
                </div>

                <BreadcrumbItems match={this.props.match} />
              </div>
              <Separator className="mb-5" />
            </Colxx>
          </Row>
          <PropertyGrid
            data={this.state.lienData}
            viewBtnHandler={this.viewBtnControl}
            editBtnHandler={this.editBtnControl}
          />
        </div>

        <AddModal
          modalAddHandler={this.state.modalAddLien}
          toggleModalAdd={this.toggleAddLien}
          onSubmit={this.handleSubmit}
        />
      </Fragment>
    );
  }

  //PropertyDetails
  handleSubmit = values => {
    const propertyData = [...this.state.propertyData];
    const payload = { ...values };

    propertyData.push(payload);
    this.toggleAddLien();
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

  toggleAddLien = () => {
    this.setState({
      modalAddLien: !this.state.modalAddLien
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

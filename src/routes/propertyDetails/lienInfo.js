import React, { Component, Fragment } from "react";
import { injectIntl } from "react-intl";
import { Row, Button } from "reactstrap";

import IntlMessages from "Util/IntlMessages";
import { Colxx, Separator } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";

import LienGrid from "./lieninfo/lienGrid.jsx";
import ViewModal from "./lieninfo/viewModal.jsx";
import AddModal from "./lieninfo/addModal.jsx";
import EditModal from "./lieninfo/editModal.jsx";

import mouseTrap from "react-mousetrap";

class PropertyDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalAddLien: false,
      modalEditLien: false,
      modalViewLien: false,

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

      selectedLien: {}
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
          <LienGrid
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

        <ViewModal
          modalViewHandler={this.state.modalViewLien}
          toggleModalView={this.toggleViewLien}
          details={this.state.selectedLien}
        />

        <EditModal
          modalEditHandler={this.state.modalEditLien}
          toggleModalEdit={this.toggleEditLien}
          onSubmit={this.handleEditSubmit}
          details={this.state.selectedLien}
        />
      </Fragment>
    );
  }

  //PropertyDetails
  handleSubmit = values => {
    const lienData = [...this.state.lienData];
    const payload = { ...values };

    lienData.push(payload);
    this.toggleAddLien();
    this.setState({ lienData });
  };

  handleEditSubmit = values => {
    event.preventDefault();
    const updatedLien = { ...values };
    const lienData = [...this.state.lienData];
    const index = lienData.findIndex(p => {
      //return p.pin == this.state.selectedProperty.pin;
      return 1;
    });
    lienData[index] = { ...updatedLien };
    this.toggleEditLien();
    this.setState({ lienData });
  };

  toggleAddLien = () => {
    this.setState({
      modalAddLien: !this.state.modalAddLien
    });
  };

  toggleViewLien = () => {
    this.setState({
      modalViewLien: !this.state.modalViewLien
    });
  };

  toggleEditLien = () => {
    this.setState({
      modalEditLien: !this.state.modalEditLien
    });
  };

  viewBtnControl = lien => {
    const selectedLien = { ...lien };
    this.setState({ selectedLien });
    this.toggleViewLien();
  };

  editBtnControl = lien => {
    const selectedLien = { ...lien };
    this.setState({ selectedLien });
    this.toggleEditLien();
  };

  handleInputChange = event => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };
}
export default injectIntl(mouseTrap(PropertyDetails));

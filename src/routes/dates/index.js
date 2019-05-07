import React, { Component, Fragment } from "react";
import { injectIntl } from "react-intl";
import { Row, Button } from "reactstrap";

import IntlMessages from "Util/IntlMessages";
import { Colxx, Separator } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";

import DatesGrid from "./components/datesGrid.jsx";
import ViewModal from "./components/viewModal.jsx";
import AddModal from "./components/addModal.jsx";
import EditModal from "./components/editModal.jsx";

import mouseTrap from "react-mousetrap";

class PropertyDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalAddDates: false,
      modalEditDates: false,
      modalViewDates: false,

      dateData: [
        {
          propertyNumber: "1409276022Sans",
          estimatedDate: "2019-02-12",
          actualEstimatedDate: "2019-02-12",
          firstInstallmentDate: "2019-02-12",
          secondInstallmentDate: "2019-02-12",
          estimatedPetitionDate: "2019-02-12",
          petitionFiledDate: "2019-02-12",
          extentionDate: "2019-02-12",
          expirationDate: "2019-02-12",
          assignmentCallDate: "2019-02-12",
          proveUpDate: "2019-02-12",
          orderOfDate: "2019-02-12"
        },
        {
          propertyNumber: "1409276022Kane",
          estimatedDate: "2019-02-12",
          actualEstimatedDate: "2019-02-12",
          firstInstallmentDate: "2019-02-12",
          secondInstallmentDate: "2019-02-12",
          estimatedPetitionDate: "2019-02-12",
          petitionFiledDate: "2019-02-12",
          extentionDate: "2019-02-12",
          expirationDate: "2019-02-12",
          assignmentCallDate: "2019-02-12",
          proveUpDate: "2019-02-12",
          orderOfDate: "2019-02-12"
        }
      ],

      selectedDate: {}
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
                  <IntlMessages id="menu.dates" />
                </h1>

                <div className="float-sm-right">
                  <Button
                    color="success"
                    size="lg"
                    className="default"
                    onClick={this.toggleAddDate}
                  >
                    <IntlMessages id="dates.add-modal-title" />
                  </Button>
                  {"  "}
                </div>

                <BreadcrumbItems match={this.props.match} />
              </div>
              <Separator className="mb-5" />
            </Colxx>
          </Row>
          <DatesGrid
            data={this.state.dateData}
            viewBtnHandler={this.viewBtnControl}
            editBtnHandler={this.editBtnControl}
          />
        </div>

        <AddModal
          modalAddHandler={this.state.modalAddDates}
          toggleModalAdd={this.toggleAddDate}
          onSubmit={this.handleSubmit}
        />

        <EditModal
          modalEditHandler={this.state.modalEditDates}
          toggleModalEdit={this.toggleEditDate}
          onSubmit={this.handleEditSubmit}
          details={this.state.selectedDate}
        />

        <ViewModal
          modalViewHandler={this.state.modalViewDates}
          toggleModalView={this.toggleViewDate}
          details={this.state.selectedDate}
        />
      </Fragment>
    );
  }

  //PropertyDetails
  handleSubmit = values => {
    const dateData = [...this.state.dateData];
    const payload = { ...values };

    dateData.push(payload);
    this.toggleAddDate();
    this.setState({ dateData });
  };

  handleEditSubmit = values => {
    event.preventDefault();
    const updatedDate = { ...values };
    const dateData = [...this.state.dateData];
    const index = dateData.findIndex(p => {
      //return p.orderOfDate == this.state.selectedDate.orderOfDate;
      return 1;
    });
    dateData[index] = { ...updatedDate };
    this.toggleEditDate();
    this.setState({ dateData });
  };

  toggleAddDate = () => {
    this.setState({
      modalAddDates: !this.state.modalAddDates
    });
  };

  toggleViewDate = () => {
    this.setState({
      modalViewDates: !this.state.modalViewDates
    });
  };

  toggleEditDate = () => {
    this.setState({
      modalEditDates: !this.state.modalEditDates
    });
  };

  viewBtnControl = date => {
    const selectedDate = { ...date };
    this.setState({ selectedDate });
    this.toggleViewDate();
  };

  editBtnControl = date => {
    const selectedDate = { ...date };
    this.setState({ selectedDate });
    this.toggleEditDate();
  };

  handleInputChange = event => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };
}
export default injectIntl(mouseTrap(PropertyDetails));

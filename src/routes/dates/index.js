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
          id: 1,
          propertyNumber: "0326302355BOONE",
          estimatedDate: "2019-02-12",
          actualEstimatedDate: "2019-02-18",
          firstInstallmentDate: "2019-02-19",
          secondInstallmentDate: "2019-02-22",
          estimatedPetitionDate: "2019-02-28",
          petitionFiledDate: "2019-02-30",
          extentionDate: "2019-03-02",
          expirationDate: "2019-03-06",
          assignmentCallDate: "2019-03-11",
          proveUpDate: "2019-03-18",
          orderOfDate: "2019-03-19"
        },
        {
          id: 2,
          propertyNumber: "0326306351BOONE",
          estimatedDate: "2019-05-02",
          actualEstimatedDate: "2019-05-23",
          firstInstallmentDate: "2019-05-25",
          secondInstallmentDate: "2019-05-28",
          estimatedPetitionDate: "2019-05-30",
          petitionFiledDate: "2019-06-01",
          extentionDate: "2019-06-03",
          expirationDate: "2019-06-05",
          assignmentCallDate: "2019-06-08",
          proveUpDate: "2019-06-10",
          orderOfDate: "2019-06-11"
        },
        {
          id: 3,
          propertyNumber: "0326304563BOONE",
          estimatedDate: "2019-08-12",
          actualEstimatedDate: "2019-08-15",
          firstInstallmentDate: "2019-08-16",
          secondInstallmentDate: "2019-08-18",
          estimatedPetitionDate: "2019-08-20",
          petitionFiledDate: "2019-08-22",
          extentionDate: "2019-08-23",
          expirationDate: "2019-08-25",
          assignmentCallDate: "2019-08-29",
          proveUpDate: "2019-08-30",
          orderOfDate: "2019-09-05"
        },
        {
          id: 4,
          propertyNumber: "0526401266BOONE",
          estimatedDate: "2019-01-12",
          actualEstimatedDate: "2019-01-15",
          firstInstallmentDate: "2019-01-17",
          secondInstallmentDate: "2019-01-18",
          estimatedPetitionDate: "2019-01-20",
          petitionFiledDate: "2019-01-23",
          extentionDate: "2019-01-25",
          expirationDate: "2019-01-28",
          assignmentCallDate: "2019-01-30",
          proveUpDate: "2019-02-01",
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
      return p.id == updatedDate.id;
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

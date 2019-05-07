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
import DataTablePagination from "Components/DataTables/pagination";
import mouseTrap from "react-mousetrap";
import { injectIntl } from "react-intl";

import AssesseeGrid from './assesseeGrid';
import AddModal from './addModal';
import ViewModal from './viewModal';
import EditModal from './editModal';

class AssesseeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Assessee Details
      modalAddAssessee: false,
      modalEditAssessee: false,
      modalViewAssessee: false,

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

      selectedAssessee: {},
    };
  }


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
                    onClick={this.toggleAddAssessee}
                  >
                    <IntlMessages id="assessee.popup" />
                  </Button>
                </div>

                <BreadcrumbItems match={this.props.match} />
              </div>
              <Separator className="mb-3" />
            </Colxx>
          </Row>

          <AssesseeGrid
            data={this.state.assesseeData}
            viewBtnHandler={this.viewBtnControl}
            editBtnHandler={this.editBtnControl}
          />

          <AddModal
            data={this.state.assesseeData.length}
            modalAddHandler={this.state.modalAddAssessee}
            toggleModalAdd={this.toggleAddAssessee}
            onSubmit={this.handleSubmit}
          />

          <ViewModal
            modalViewHandler={this.state.modalViewAssessee}
            toggleView={this.viewAssessee}
            details={this.state.selectedAssessee}
          />

          <EditModal
            modalEditHandler={this.state.modalEditAssessee}
            toggleModalEdit={this.editAssessee}
            onSubmit={this.handleEditSubmit}
            details={this.state.selectedAssessee}
          />

        </div>
      </Fragment >
    );
  }

  handleSubmit = values => {
    console.log("submited");
    const assesseeData = [...this.state.assesseeData];
    const payload = { ...values };

    assesseeData.push(payload);
    this.toggleAddAssessee();
    this.setState({ assesseeData });
  };

  handleInputChange = event => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  toggleAddAssessee = () => {
    this.setState({
      modalAddAssessee: !this.state.modalAddAssessee
    });
  };

  viewAssessee = () => {
    this.setState({
      modalViewAssessee: !this.state.modalViewAssessee
    });
  };

  editAssessee = () => {
    this.setState({
      modalEditAssessee: !this.state.modalEditAssessee
    });
  };

  viewBtnControl = assessee => {
    const selectedAssessee = { ...assessee };
    this.setState({ selectedAssessee });
    this.viewAssessee();
  };

  editBtnControl = assessee => {
    const selectedAssessee = { ...assessee };
    this.setState({ selectedAssessee });
    this.editAssessee();
  };


  handleEditSubmit = values => {
    event.preventDefault();
    const updatedValues = { ...values };
    const assesseeData = [...this.state.assesseeData];
    const index = assesseeData.findIndex(p => {
      return p.pin == this.state.selectedAssessee.pin;
    });
    assesseeData[index] = { ...updatedValues };
    this.editAssessee();
    this.setState({ assesseeData });
  };
}

export default injectIntl(mouseTrap(AssesseeDetails));
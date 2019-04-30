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

class DateDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Property Details

      modalAddDate: false,
      modalEditDate: false,
      modalViewDate: false,

      dateData: [
        {
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

      dateColumn: [
        {
          Header: "Estimated Date",
          accessor: "estimatedDate",
          sortable: true,
          style: {
            margin: "auto"
          }
        },
        {
          Header: "Actual Estimated Date",
          accessor: "actualEstimatedDate",
          sortable: true,
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

      selectedDate: {},

      purchaseDate: "2019-02-12",

      estimatedDate: this.estimatedDateCal(this.purchaseDate),
      actualEstimatedDate: "",
      firstInstallmentDate: "",
      secondInstallmentDate: "",
      estimatedPetitionDate: "",
      petitionFiledDate: "",
      extentionDate: "",
      expirationDate: "",
      assignmentCallDate: "",
      proveUpDate: "",
      orderOfDate: ""
    };
  }

  //DatesDetails

  dateDisplay = value => {
    let req = new Date(value);
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let month = months[req.getMonth()];
    let date = req.getDate();
    let year = req.getFullYear();
    return `${month}-${date}-${year}`;
  };

  estimatedDateCal = value => {
    let startDate = new Date(value);
    let incdate = 60 * 60 * 24 * 1000 * 125;
    let endDate = new Date(startDate.getTime() + incdate);
    return endDate;
  };

  toggleAddDate = () => {
    this.setState({
      modalAddDate: !this.state.modalAddDate
    });
  };

  toggleViewDate = () => {
    this.setState({
      modalViewDate: !this.state.modalViewDate
    });
  };

  toggleEditDate = () => {
    this.setState({
      modalEditDate: !this.state.modalEditDate
    });
  };

  viewBtnControl = dateP => {
    const selectedDate = { ...dateP };
    this.setState({ selectedDate });
    this.toggleViewDate();
  };

  editBtnControl = dateP => {
    const selectedDate = { ...dateP };
    this.setState({ selectedDate });
    this.toggleEditDate();
  };

  handleInputChange = event => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const dateData = [...this.state.dateData];

    dateData.push({
      estimatedDate: this.state.estimatedDate,
      actualEstimatedDate: this.state.actualEstimatedDate,
      firstInstallmentDate: this.state.firstInstallmentDate,
      secondInstallmentDate: this.state.secondInstallmentDate,
      estimatedPetitionDate: this.state.estimatedPetitionDate,
      petitionFiledDate: this.state.petitionFiledDate,
      extentionDate: this.state.extentionDate,
      expirationDate: this.state.expirationDate,
      assignmentCallDate: this.state.assignmentCallDate,
      proveUpDate: this.state.proveUpDate,
      orderOfDate: this.state.orderOfDate
    });
    this.toggleAddDate();
    this.setState({ dateData });
  };

  handleEditSubmit = event => {
    event.preventDefault();
    const updatedDate = {
      actualEstimatedDate:
        this.state.actualEstimatedDate == ""
          ? this.state.selectedDate.actualEstimatedDate
          : this.state.actualEstimatedDate,
      firstInstallmentDate:
        this.state.firstInstallmentDate == ""
          ? this.state.selectedDate.firstInstallmentDate
          : this.state.firstInstallmentDate,
      secondInstallmentDate:
        this.state.secondInstallmentDate == ""
          ? this.state.selectedDate.secondInstallmentDate
          : this.state.secondInstallmentDate,
      petitionFiledDate:
        this.state.petitionFiledDate == ""
          ? this.state.selectedDate.petitionFiledDate
          : this.state.petitionFiledDate,
      extentionDate:
        this.state.extentionDate == ""
          ? this.state.selectedDate.extentionDate
          : this.state.extentionDate,
      expirationDate:
        this.state.expirationDate == ""
          ? this.state.selectedDate.expirationDate
          : this.state.expirationDate,
      assignmentCallDate:
        this.state.assignmentCallDate == ""
          ? this.state.selectedDate.assignmentCallDate
          : this.state.assignmentCallDate,
      proveUpDate:
        this.state.proveUpDate == ""
          ? this.state.selectedDate.proveUpDate
          : this.state.proveUpDate,
      orderOfDate:
        this.state.orderOfDate == ""
          ? this.state.selectedDate.orderOfDate
          : this.state.orderOfDate
    };
    const dateData = [...this.state.dateData];
    const index = dateData.findIndex(d => {
      return d.estimatedDate == this.state.selectedDate.estimatedDate;
    });
    dateData[index] = { ...updatedDate };
    this.toggleEditDate();
    this.setState({ dateData });
  };

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
          <Row>
            <Colxx xxs="12" className="mb-3">
              <Card className="d-flex flex-row">
                <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                  <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                    <ReactTable
                      className="w-100"
                      data={this.state.dateData}
                      columns={this.state.dateColumn}
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
          isOpen={this.state.modalAddDate}
          toggle={this.toggleAddDate}
          size="lg"
        >
          <ModalHeader toggle={this.toggleAddDate}>
            <IntlMessages id="dates.add-modal-title" />
          </ModalHeader>
          <ModalBody>
            <Row>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <Input
                    type="date"
                    name="actualEstimatedDate"
                    onChange={this.handleInputChange}
                  />
                  <IntlMessages id="dates.actualEstimatedDate" />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <Input
                    type="date"
                    name="firstInstallmentDate"
                    onChange={this.handleInputChange}
                  />
                  <IntlMessages id="dates.firstInstallmentDate" />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <Input
                    type="date"
                    name="secondInstallmentDate"
                    onChange={this.handleInputChange}
                  />
                  <IntlMessages id="dates.secondInstallmentDate" />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <Input
                    type="date"
                    name="petitionFiledDate"
                    onChange={this.handleInputChange}
                  />
                  <IntlMessages id="dates.petitionFiledDate" />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <Input
                    type="date"
                    name="extentionDate"
                    onChange={this.handleInputChange}
                  />
                  <IntlMessages id="dates.extentionDate" />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <Input
                    type="date"
                    name="expirationDate"
                    onChange={this.handleInputChange}
                  />
                  <IntlMessages id="dates.expirationDate" />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <Input
                    type="date"
                    name="assignmentCallDate"
                    onChange={this.handleInputChange}
                  />
                  <IntlMessages id="dates.assignmentCallDate" />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <Input
                    type="date"
                    name="proveUpDate"
                    onChange={this.handleInputChange}
                  />
                  <IntlMessages id="dates.proveUpDate" />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <Input
                    type="date"
                    name="orderOfDate"
                    onChange={this.handleInputChange}
                  />
                  <IntlMessages id="dates.orderOfDate" />
                </Label>
              </Colxx>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" outline onClick={this.toggleAddDate}>
              <IntlMessages id="pages.cancel" />
            </Button>
            <Button color="primary" onClick={this.handleSubmit}>
              <IntlMessages id="pages.submit" />
            </Button>{" "}
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={this.state.modalViewDate}
          toggle={this.toggleViewDate}
          size="lg"
        >
          <ModalHeader toggle={this.toggleViewDate}>
            <IntlMessages id="property.view-modal-title" />
          </ModalHeader>
          <ModalBody>
            <Row>
              <Colxx xxs="6">
                <Table hover>
                  <tbody>
                    <tr>
                      <th scope="row">Estimated Date</th>
                      <th>{this.state.selectedDate.estimatedDate}</th>
                    </tr>
                    <tr>
                      <th scope="row">Actual Estimated Date</th>
                      <th>{this.state.selectedDate.actualEstimatedDate}</th>
                    </tr>
                    <tr>
                      <th scope="row">First Installment Date</th>
                      <th>{this.state.selectedDate.firstInstallmentDate}</th>
                    </tr>
                    <tr>
                      <th scope="row">Second Installment Date</th>
                      <th>{this.state.selectedDate.secondInstallmentDate}</th>
                    </tr>
                    <tr>
                      <th scope="row">Estimated Petition Date</th>
                      <th>{this.state.selectedDate.estimatedPetitionDate}</th>
                    </tr>
                    <tr>
                      <th scope="row">Petition Filed Date</th>
                      <th>{this.state.selectedDate.petitionFiledDate}</th>
                    </tr>
                  </tbody>
                </Table>
              </Colxx>
              <Colxx xxs="6">
                <Table hover>
                  <tbody>
                    <tr>
                      <th scope="row">Extention Date</th>
                      <th>{this.state.selectedDate.extentionDate}</th>
                    </tr>
                    <tr>
                      <th scope="row">Expiration Date</th>
                      <th>{this.state.selectedDate.expirationDate}</th>
                    </tr>
                    <tr>
                      <th scope="row">Assignment Call Date</th>
                      <th>{this.state.selectedDate.assignmentCallDate}</th>
                    </tr>
                    <tr>
                      <th scope="row">Prove Up Date</th>
                      <th>{this.state.selectedDate.proveUpDate}</th>
                    </tr>
                    <tr>
                      <th scope="row">Order Of Date</th>
                      <th>{this.state.selectedDate.orderOfDate}</th>
                    </tr>
                  </tbody>
                </Table>
              </Colxx>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" outline onClick={this.toggleViewDate}>
              <IntlMessages id="pages.close" />
            </Button>{" "}
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={this.state.modalEditDate}
          toggle={this.toggleEditDate}
          size="lg"
        >
          <ModalHeader toggle={this.toggleEditDate}>
            <IntlMessages id="property.add-modal-title" />
          </ModalHeader>
          <ModalBody>
            <Row>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <Input
                    type="date"
                    name="actualEstimatedDate"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedDate.actualEstimatedDate}
                  />
                  <IntlMessages id="dates.actualEstimatedDate" />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <Input
                    type="date"
                    name="firstInstallmentDate"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedDate.firstInstallmentDate}
                  />
                  <IntlMessages id="dates.firstInstallmentDate" />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <Input
                    type="date"
                    name="secondInstallmentDate"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedDate.secondInstallmentDate}
                  />
                  <IntlMessages id="dates.secondInstallmentDate" />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <Input
                    type="date"
                    name="petitionFiledDate"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedDate.petitionFiledDate}
                  />
                  <IntlMessages id="dates.petitionFiledDate" />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <Input
                    type="date"
                    name="extentionDate"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedDate.extentionDate}
                  />
                  <IntlMessages id="dates.extentionDate" />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <Input
                    type="date"
                    name="expirationDate"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedDate.expirationDate}
                  />
                  <IntlMessages id="dates.expirationDate" />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <Input
                    type="date"
                    name="assignmentCallDate"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedDate.assignmentCallDate}
                  />
                  <IntlMessages id="dates.assignmentCallDate" />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <Input
                    type="date"
                    name="proveUpDate"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedDate.proveUpDate}
                  />
                  <IntlMessages id="dates.proveUpDate" />
                </Label>
              </Colxx>
              <Colxx xxs="4">
                <Label className="form-group has-top-label">
                  <Input
                    type="date"
                    name="orderOfDate"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.selectedDate.orderOfDate}
                  />
                  <IntlMessages id="dates.orderOfDate" />
                </Label>
              </Colxx>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" outline onClick={this.toggleEditDate}>
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
export default injectIntl(mouseTrap(DateDetails));

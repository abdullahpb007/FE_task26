import React, { Component } from "react";
import {
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table
} from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";

class viewModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.modalViewHandler}
        toggle={this.props.toggleModalView}
        size="lg"
      >
        <ModalHeader toggle={this.props.toggleModalView}>
          <IntlMessages id="property.view-modal-title" />
        </ModalHeader>
        <ModalBody>
          <Row>
            <Colxx xxs="6">
              <Table hover>
                <tbody>
                  <tr>
                    <th scope="row">Estimated Date</th>
                    <th>{this.props.details.estimatedDate}</th>
                  </tr>
                  <tr>
                    <th scope="row">Actual Estimated Date</th>
                    <th>{this.props.details.actualEstimatedDate}</th>
                  </tr>
                  <tr>
                    <th scope="row">First Installment Date</th>
                    <th>{this.props.details.firstInstallmentDate}</th>
                  </tr>
                  <tr>
                    <th scope="row">Second Installment Date</th>
                    <th>{this.props.details.secondInstallmentDate}</th>
                  </tr>
                  <tr>
                    <th scope="row">Estimated Petition Date</th>
                    <th>{this.props.details.estimatedPetitionDate}</th>
                  </tr>
                  <tr>
                    <th scope="row">Petition Filed Date</th>
                    <th>{this.props.details.petitionFiledDate}</th>
                  </tr>
                </tbody>
              </Table>
            </Colxx>
            <Colxx xxs="6">
              <Table hover>
                <tbody>
                  <tr>
                    <th scope="row">Extention Date</th>
                    <th>{this.props.details.extentionDate}</th>
                  </tr>
                  <tr>
                    <th scope="row">Expiration Date</th>
                    <th>{this.props.details.expirationDate}</th>
                  </tr>
                  <tr>
                    <th scope="row">Assignment Call Date</th>
                    <th>{this.props.details.assignmentCallDate}</th>
                  </tr>
                  <tr>
                    <th scope="row">Prove Up Date</th>
                    <th>{this.props.details.proveUpDate}</th>
                  </tr>
                  <tr>
                    <th scope="row">Order Of Date</th>
                    <th>{this.props.details.orderOfDate}</th>
                  </tr>
                </tbody>
              </Table>
            </Colxx>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            outline
            onClick={this.props.toggleModalView}
          >
            <IntlMessages id="pages.close" />
          </Button>{" "}
        </ModalFooter>
      </Modal>
    );
  }
}

export default viewModal;

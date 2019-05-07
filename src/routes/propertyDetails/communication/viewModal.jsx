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
      >
        <ModalHeader toggle={this.props.toggleModalView}>
          <IntlMessages id="lien.view-modal-title" />
        </ModalHeader>
        <ModalBody>
          <Row>
            <Colxx xxs="12">
              <Table hover>
                <tbody>
                  <tr>
                    <th scope="row">Property Number</th>
                    <th>{this.props.details.propertyNumber}</th>
                  </tr>
                  <tr>
                    <th scope="row">Creditor</th>
                    <th>{this.props.details.creditor}</th>
                  </tr>
                  <tr>
                    <th scope="row">Amount</th>
                    <th>{this.props.details.amount}</th>
                  </tr>
                  <tr>
                    <th scope="row">Payment Amount</th>
                    <th>{this.props.details.paymentAmount}</th>
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

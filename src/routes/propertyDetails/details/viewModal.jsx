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
                    <th scope="row">Property Number</th>
                    <th>{this.props.details.propertyNumber}</th>
                  </tr>
                  <tr>
                    <th scope="row">Pin</th>
                    <th>{this.props.details.pin}</th>
                  </tr>
                  <tr>
                    <th scope="row">County</th>
                    <th>{this.props.details.county}</th>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <th>{this.props.details.address}</th>
                  </tr>
                  <tr>
                    <th scope="row">City</th>
                    <th>{this.props.details.city}</th>
                  </tr>
                  <tr>
                    <th scope="row">State</th>
                    <th>{this.props.details.state}</th>
                  </tr>
                  <tr>
                    <th scope="row">Zip</th>
                    <th>{this.props.details.zip}</th>
                  </tr>
                  <tr>
                    <th scope="row">Township</th>
                    <th>{this.props.details.township}</th>
                  </tr>
                  <tr>
                    <th scope="row">Class Code</th>
                    <th>{this.props.details.classCode}</th>
                  </tr>
                  <tr>
                    <th scope="row">Assessed Value</th>
                    <th>{"$" + this.props.details.assessedValue}</th>
                  </tr>
                </tbody>
              </Table>
            </Colxx>
            <Colxx xxs="6">
              <Table hover>
                <tbody>
                  <tr>
                    <th scope="row">Market Value</th>
                    <th>{"$" + this.props.details.marketValue}</th>
                  </tr>
                  <tr>
                    <th scope="row">Taxes Per Year</th>
                    <th>{"$" + this.props.details.taxesPerYear}</th>
                  </tr>
                  <tr>
                    <th scope="row">PREEQEXM</th>
                    <th>{"$" + this.props.details.preeqexm}</th>
                  </tr>
                  <tr>
                    <th scope="row">Home Owner</th>
                    <th>{"$" + this.props.details.homeOwner}</th>
                  </tr>
                  <tr>
                    <th scope="row">Senior Exemption</th>
                    <th>{"$" + this.props.details.seniorExemption}</th>
                  </tr>
                  <tr>
                    <th scope="row">Senior Freeze</th>
                    <th>{"$" + this.props.details.seniorFreeze}</th>
                  </tr>
                  <tr>
                    <th scope="row">Total Acres</th>
                    <th>{this.props.details.totalAcres}</th>
                  </tr>
                  <tr>
                    <th scope="row">Legal Description</th>
                    <th>{this.props.details.legalDescription}</th>
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

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

class ViewModal extends Component {
    render() {
        return (
            <Modal
                isOpen={this.props.modalViewHandler}
                toggle={this.props.toggleView}
                size="lg"
            >
                <ModalHeader toggle={this.props.toggleView}>
                    <IntlMessages id="assessee.view" />
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Colxx xxs="12">
                            <Table hover>
                                <tbody>
                                    <tr>
                                        <th scope="row">Name</th>
                                        <th>{this.props.details.name}</th>
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
                                </tbody>
                            </Table>
                        </Colxx>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" outline onClick={this.props.toggleViewAssessee}>
                        <IntlMessages id="pages.cancel" />
                    </Button>{" "}
                </ModalFooter>
            </Modal>
        );
    }
}

export default ViewModal;
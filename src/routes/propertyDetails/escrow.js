import React, { Component, Fragment } from "react";
import {
    Form,
    Field,
    Row,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    Card,
    CardBody,
    CardTitle,
    FormGroup,
} from "reactstrap";

import ReactAutosuggest from "Components/ReactAutosuggest";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";



import IntlMessages from "Util/IntlMessages";
import { Colxx, Separator } from "Components/CustomBootstrap";

const propertyNumbers = [

];


class Escrow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //Assessee Details
            modalAddAssessee: false,
            autoCompleate: [
                {
                    name: "1409276011KANE"
                },
                {
                    name: "0326304016BOONE"
                },
                {
                    name: "1404276011KANE"
                },
                {
                    name: "1409276021KANE"
                },
                {
                    name: "0326304026BOONE"
                },
                {
                    name: "1405276021KANE"
                },
            ]
        }
    }


    render() {
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <div className="mb-2">
                            <h1>
                                <IntlMessages id="escrow.title" />
                            </h1>

                            <BreadcrumbItems match={this.props.match} />
                        </div>
                        <Separator className="mb-3" />
                    </Colxx>
                </Row>
                <Row className="mb-4">
                    <Colxx xxs="12">
                        <Card>
                            <CardBody>
                                <b>
                                    <IntlMessages id="escrow.property-number" /> </b>
                                <Row className="mt-3">
                                    <Colxx xxs="12" sm="6">
                                        <ReactAutosuggest
                                            placeholder="Enter The Property Number"
                                            data={this.state.autoCompleate}
                                            onChange={this.handleInputChange}
                                        />
                                    </Colxx>
                                    <div className="float-sm-right">
                                        <Button
                                            color="success"
                                            size="lg"
                                            className="default"
                                            onClick={this.handleSubmit}
                                        >
                                            <IntlMessages id="escrow.submit" />
                                        </Button>
                                    </div>
                                </Row>
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>
            </Fragment>
        );
    }
    handleInputChange = e => {
        const autoCompleate = e;
        console.log(autoCompleate);
        this.setState({ autoCompleate });
    }
    handleSubmit = values => {
        const propertyNum = this.state.autoCompleate;
        this.state.autoCompleate.map((name, index) => {
            console.log(name);
        })
        console.log(propertyNum);
        console.log(allProperty);

    }
    toggleAddAssessee = () => {
        this.setState({
            modalAddAssessee: !this.state.modalAddAssessee
        });
    };
    checkProperty = auto => {
        console.log(auto);
    }
}

export default Escrow;
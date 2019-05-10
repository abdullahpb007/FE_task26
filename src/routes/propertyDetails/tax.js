import React, { Component, Fragment } from "react";
import { injectIntl } from "react-intl";
import {
    Row,
    Button,
    Card,
    CardBody,
    CardTitle,
    Form,
    Label,
    Input
} from "reactstrap";
import ReactAutosuggest from "Components/ReactAutosuggest";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";
import IntlMessages from "Util/IntlMessages";
import { Colxx, Separator } from "Components/CustomBootstrap";
import ReactTable from "react-table";
import EscrowGrid from './escrow/EscrowGrid';
import dataTableData from './tax/dataTableData.json';

const dataOutTableColumns = [
    {
        Header: "Sub Date",
        accessor: "subDate",
        Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
        Header: "Sub Amount",
        accessor: "amount",
        Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
        Header: "Intrest Changed",
        accessor: "intrestChanged",
        Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
        Header: "Accured Intrest",
        accessor: "accuredIntrest",
        Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
        Header: "Sub Total",
        accessor: "subTotal",
        Cell: props => <p className="text-muted">{props.value}</p>
    },
];


class Tax extends Component {

    constructor(props) {
        super(props);
        this.state = {
            property: '',
            taxBalance: '',
            dateOfSale: '',
            faceAmount: '',
            selectedInProperty: [],
            selectedOutProperty: [],
        }
    }

    checkProperty = () => {
        event.preventDefault();
        dataTableData.find(e => {
            if (this.state.property == e.propertyNumber) {
                const taxBalance = e.taxBalance;
                const pinNum = e.pinNum;
                const dateOfSale = e.dateOfSale;
                const intrestRate = e.intrestRate;
                const buyersName = e.buyersName;
                const faceAmount = e.faceAmount;
                const intrestFace = e.intrestFace;
                const accuredIntrest = e.accuredIntrest;
                const faceValue = e.faceValue;
                this.setState({
                    taxBalance, pinNum, dateOfSale, intrestRate, buyersName, faceAmount,
                    intrestFace, accuredIntrest, faceValue
                });
            }
        });
    }

    render() {
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <div className="mb-2">
                            <h1>
                                <IntlMessages id="tax.title" />
                            </h1>

                            <BreadcrumbItems match={this.props.match} />
                        </div>
                        <Separator className="mb-3" />
                    </Colxx>
                </Row>
                <Row className="mb-4">
                    <Colxx xxs="4">
                        <Card>
                            <CardBody>
                                <b>
                                    <IntlMessages id="tax.certificate-number" /> </b>
                                <Row className="mt-3">
                                    <Colxx xxs="12" sm="10">
                                        <Form onSubmit={this.checkProperty}>
                                            <ReactAutosuggest
                                                placeholder="Search By Certificate Number"
                                                data={propertyData}
                                                onChange={values => {
                                                    this.state.property = values;
                                                }}
                                            />
                                        </Form>
                                    </Colxx>
                                </Row>
                            </CardBody>
                        </Card>
                    </Colxx>

                    <Colxx xxs="8">
                        <Card>
                            <CardBody>
                                <b>
                                    <IntlMessages id="tax.fees" /> </b>
                                <Row className="mt-3">
                                    <Colxx xxs="12" sm="3">
                                        <Input
                                            type="text"
                                            name="detail"
                                            placeholder={"Detail"}
                                        />
                                    </Colxx>
                                    <Colxx xxs="12" sm="4">
                                        <Input
                                            type="date"
                                            name="date"
                                            placeholder={"Date"}
                                        />
                                    </Colxx>
                                    <Colxx xxs="12" sm="3">
                                        <Input
                                            type="number"
                                            name="amount"
                                            placeholder={"Amount"}
                                        />
                                    </Colxx>
                                    <div className="float-sm-right">
                                        <Button
                                            color="success"
                                            size="sm"
                                            className="default"
                                        >
                                            <IntlMessages id="escrow.submit" />
                                        </Button>
                                    </div>
                                </Row>
                            </CardBody>
                        </Card>
                    </Colxx>

                </Row>
                <Row>
                    <Colxx xxs="12">
                        <Card className="mb-4">
                            <CardBody>
                                <CardTitle>
                                    <IntlMessages id="tax.info" />
                                </CardTitle>

                                <Form>
                                    <Row>
                                        <Colxx xxs="6">
                                            <Label className="form-group has-top-label" >
                                                <Input type="text" disabled value={this.state.taxBalance} />
                                                <IntlMessages id="tax.year" />
                                            </Label>
                                        </Colxx>
                                        <Colxx xxs="6">
                                            <Label className="form-group has-top-label">
                                                <Input type="number" disabled value={this.state.pinNum} />
                                                <IntlMessages id="tax.pin" />
                                            </Label>
                                        </Colxx>
                                    </Row>
                                    <Row>
                                        <Colxx xxs="6">
                                            <Label className="form-group has-top-label" >
                                                <Input type="text" disabled value={this.state.dateOfSale} />
                                                <IntlMessages id="tax.date" />
                                            </Label>
                                        </Colxx>
                                        <Colxx xxs="6">
                                            <Label className="form-group has-top-label">
                                                <Input type="number" disabled value={this.state.intrestRate} />
                                                <IntlMessages id="tax.intrest" />
                                            </Label>
                                        </Colxx>
                                    </Row>
                                    <Row>
                                        <Colxx xxs="6">
                                            <Label className="form-group has-top-label" >
                                                <Input type="text" disabled value={this.state.buyersName} />
                                                <IntlMessages id="tax.buyer" />
                                            </Label>
                                        </Colxx>
                                        <Colxx xxs="6">
                                            <Label className="form-group has-top-label">
                                                <Input type="text" disabled value={this.state.faceAmount} />
                                                <IntlMessages id="tax.face" />
                                            </Label>
                                        </Colxx>
                                    </Row>
                                    <Row>
                                        <Colxx xxs="6">
                                            <Label className="form-group has-top-label" >
                                                <Input type="text" disabled value={this.state.intrestFace} />
                                                <IntlMessages id="tax.rate" />
                                            </Label>
                                        </Colxx>
                                        <Colxx xxs="6">
                                            <Label className="form-group has-top-label">
                                                <Input type="text" disabled value={this.state.accuredIntrest} />
                                                <IntlMessages id="tax.accured" />
                                            </Label>
                                        </Colxx>
                                    </Row>
                                    <Row>
                                        <Colxx xxs="6">
                                            <Label className="form-group has-top-label" >
                                                <Input type="text" disabled value={this.state.faceValue} />
                                                <IntlMessages id="tax.total" />
                                            </Label>
                                        </Colxx>
                                        <Colxx xxs="6">
                                            <Label className="form-group has-top-label">
                                                <Input type="text" disabled value={this.state.property} />
                                                <IntlMessages id="tax.certificate-number" />
                                            </Label>
                                        </Colxx>
                                    </Row>
                                    {/* <Button color="primary">
                                        <IntlMessages id="forms.submit" />
                                    </Button> */}
                                </Form>
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>
                <Row>
                    <Colxx xxs="12" lg="5" className="h-100">
                        <Card >
                            <CardBody>
                                <CardTitle>
                                    <IntlMessages id="tax.info" />
                                </CardTitle>
                                <Form>
                                    <Colxx xxs="12" className="mb-5">
                                        <Label className="form-group has-top-label" >
                                            <Input type="text" disabled value={this.state.escrowBalance} />
                                            <IntlMessages id="tax.estimate" />
                                        </Label>
                                    </Colxx>
                                    <Colxx xxs="12" className="mb-5">
                                        <Label className="form-group has-top-label">
                                            <Input type="number" disabled />
                                            <IntlMessages id="tax.redemption" />
                                        </Label>
                                    </Colxx>
                                    <Colxx xxs="12" className="mb-5">
                                        <Label className="form-group has-top-label" >
                                            <Input type="text" disabled value={this.state.escrowBalance} />
                                            <IntlMessages id="tax.increase-change" />
                                        </Label>
                                    </Colxx>
                                    <Colxx xxs="12" className="mb-5">
                                        <Label className="form-group has-top-label">
                                            <Input type="number" disabled />
                                            <IntlMessages id="tax.certificate" />
                                        </Label>
                                    </Colxx>
                                </Form>
                            </CardBody>
                        </Card>
                    </Colxx>
                    <Colxx xxs="12" lg="7">
                        <EscrowGrid
                            Data={this.state.selectedOutProperty}
                            columns={dataOutTableColumns}
                        />
                    </Colxx>
                </Row>

            </Fragment>
        );
    }
}

export default Tax;

const propertyData = [
    {
        propertyNumber: "1409276011KANE201500020"
    },
    {
        propertyNumber: "1409276011KANE201500022"
    },
    {
        propertyNumber: "1409276011KANE201500025"
    },
    {
        propertyNumber: "1409276011KANE201500033"
    },
    {
        propertyNumber: "1409276011KANE201500036"
    },
    {
        propertyNumber: "1409276011KANE201500049"
    },
];
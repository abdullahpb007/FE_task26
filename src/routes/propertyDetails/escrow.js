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
import dataTableData from './escrow/dataTableData.json';

const dataTableColumns = [
    {
        Header: "Amount",
        accessor: "amount",
        Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
        Header: "Date",
        accessor: "date",
        Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
        Header: "Bill",
        accessor: "billingCode",
        Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
        Header: "Payment",
        accessor: "appPaymentNumber",
        Cell: props => <p className="text-muted">{props.value}</p>
    }
];


const dataOutTableColumns = [
    {
        Header: "Date",
        accessor: "date",
        Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
        Header: "Amount",
        accessor: "amount",
        Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
        Header: "Blling Code",
        accessor: "billingCode",
        Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
        Header: "Payment To",
        accessor: "paymentTo",
        Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
        Header: "Reason",
        accessor: "reason",
        Cell: props => <p className="text-muted">{props.value}</p>
    }
];

class Escrow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            property: '',
            escrowBalance: '',
            selectedInProperty: [],
            selectedOutProperty: [],
        }
    }

    checkProperty = () => {
        event.preventDefault();
        dataTableData.find(e => {
            if (this.state.property == e.propertyNumber) {
                const selectedInProperty = e.dataIn;
                const selectedOutProperty = e.dataOut;
                const escrowBalance = e.EscrowBalance;
                this.setState({ selectedInProperty, selectedOutProperty, escrowBalance });
                console.log(this.state.selectedInProperty, this.state.selectedOutProperty, escrowBalance);
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
                                <IntlMessages id="escrow.title" />
                            </h1>

                            <BreadcrumbItems match={this.props.match} />
                        </div>
                        <Separator className="mb-3" />
                    </Colxx>
                </Row>
                <Row className="mb-4">
                    <Colxx xxs="6">
                        <Card>
                            <CardBody>
                                <b>
                                    <IntlMessages id="escrow.property-number" /> </b>
                                <Row className="mt-3">
                                    <Colxx xxs="12" sm="10">
                                        <Form onSubmit={this.checkProperty}>
                                            <ReactAutosuggest
                                                placeholder="Search By Property Number"
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

                    <Colxx xxs="6">
                        <Card>
                            <CardBody>
                                <b>
                                    <IntlMessages id="escrow.pay" /> </b>
                                <Row className="mt-3">
                                    <Colxx xxs="12" sm="3">
                                        <Input
                                            type="text"
                                            name="type"
                                            placeholder={"Type"}
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
                                            size="lg"
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
                                    <IntlMessages id="escrow.ballance" />
                                </CardTitle>

                                <Form>
                                    <Label className="form-group has-top-label" >
                                        <Input type="text" disabled value={this.state.escrowBalance} />
                                        <IntlMessages id="escrow.ballance" />
                                    </Label>
                                    <Label className="form-group has-top-label">
                                        <Input type="number" />
                                        <IntlMessages id="escrow.amount" />
                                    </Label>
                                    <Label className="form-group has-top-label">
                                        <Input type="date" />
                                        <IntlMessages id="escrow.due" />
                                    </Label>
                                    <Label className="form-group has-top-label">
                                        <Input type="date" />
                                        <IntlMessages id="escrow.pay-day" />
                                    </Label>
                                    <Button color="primary">
                                        <IntlMessages id="forms.submit" />
                                    </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>
                <Row>
                    <Colxx xxs="12" lg="5">
                        <EscrowGrid
                            Data={this.state.selectedInProperty}
                            columns={dataTableColumns}
                        />
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

export default Escrow;

const propertyData = [
    {
        propertyNumber: "1409276011KANE"
    },
    {
        propertyNumber: "0326304016BOONE"
    },
    {
        propertyNumber: "1404276011KANE"
    },
    {
        propertyNumber: "1409276021KANE"
    },
    {
        propertyNumber: "0326304026BOONE"
    },
    {
        propertyNumber: "1405276021KANE"
    },
];
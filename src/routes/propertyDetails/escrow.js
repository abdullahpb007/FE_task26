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
import PerfectScrollbar from "react-perfect-scrollbar";
import classnames from "classnames";
import { Colxx, Separator } from "Components/CustomBootstrap";
import ReactTable from "react-table";

const CustomTbodyComponent = props => (
    <div {...props} className={classnames("rt-tbody", props.className || [])}>
        <PerfectScrollbar option={{ suppressScrollX: true }}>
            {props.children}
        </PerfectScrollbar>
    </div>
);

const dataTableData = [
    {
        amount: '$5,000',
        date: '02/01/2019',
        billingCode: 'Deposit',
        appPaymentNumber: '1409276011KANE'
    },
    {
        amount: '$5,000',
        date: '02/02/2019',
        billingCode: 'Deposit',
        appPaymentNumber: '1409276011KANE'
    },
    {
        amount: '$5,000',
        date: '12/02/2019',
        billingCode: 'Deposit',
        appPaymentNumber: '1409276011KANE'
    },
    {
        amount: '$5,000',
        date: '11/02/2019',
        billingCode: 'Deposit',
        appPaymentNumber: '1409276011KANE'
    },
    {
        amount: '$5,000',
        date: '10/02/2019',
        billingCode: 'Deposit',
        appPaymentNumber: '1409276011KANE'
    }
]

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

const dataOutTableData = [
    {
        amount: '$ 5,000.00 ',
        date: '02/01/2019',
        billingCode: 'DEPOSIT',
        paymentTo: 'SURE PAY, LLC',
        reason: 'Monthly fee'
    },
    {
        amount: '$ 5,000.00 ',
        date: '02/02/2019',
        billingCode: 'DEPOSIT',
        paymentTo: 'SURE PAY, LLC',
        reason: 'Monthly fee'
    },
    {
        amount: '$ 5,000.00 ',
        date: '12/02/2019',
        billingCode: 'DEPOSIT',
        paymentTo: 'KANE COUNTY',
        reason: 'PAYMENT OF TAXES'
    },
    {
        amount: '$ 5,000.00 ',
        date: '11/02/2019',
        billingCode: 'DEPOSIT',
        paymentTo: 'SURE PAY, LLC',
        reason: 'Estimate of Redemption'
    },
    {
        amount: '$ 5,000.00 ',
        date: '10/02/2019',
        billingCode: 'DEPOSIT',
        paymentTo: 'SURE PAY, LLC',
        reason: 'Overnight Mailing'
    }
]

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
            selectedProperty: '',
            enteredValue: '',
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
                    <Colxx xxs="6">
                        <Card>
                            <CardBody>
                                <b>
                                    <IntlMessages id="escrow.property-number" /> </b>
                                <Row className="mt-3">
                                    <Colxx xxs="12" sm="10">
                                        <ReactAutosuggest
                                            placeholder="Search By Property Number"
                                            data={propertyData}
                                            onChange={values => {
                                                this.state.property = values;
                                            }}
                                        />
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
                                        <Input type="text" disabled value='8000' />
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
                        <Card className="mb-4 escrow-width h-100">
                            <CardBody>
                                <CardTitle>
                                    <IntlMessages id="escrow.payments-in" />
                                </CardTitle>
                                <ReactTable
                                    data={dataTableData}
                                    TbodyComponent={CustomTbodyComponent}
                                    columns={dataTableColumns}
                                    defaultPageSize={8}
                                    showPageJump={false}
                                    showPageSizeOptions={false}
                                    showPagination={false}
                                    className={"react-table-fixed-height"}
                                />
                            </CardBody>
                        </Card>
                    </Colxx>
                    <Colxx xxs="12" lg="7">
                        <Card className="mb-4 escrow-width h-100">
                            <CardBody>
                                <CardTitle>
                                    <IntlMessages id="escrow.payments-out" />
                                </CardTitle>
                                <ReactTable
                                    data={dataOutTableData}
                                    TbodyComponent={CustomTbodyComponent}
                                    columns={dataOutTableColumns}
                                    defaultPageSize={8}
                                    showPageJump={false}
                                    showPageSizeOptions={false}
                                    showPagination={false}
                                    className={"react-table-fixed-height"}
                                />
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>

            </Fragment>
        );
    }
    handleSubmit = values => {
        const propertyNum = this.state.autoCompleate;
        this.state.autoCompleate.map((name, index) => {
            console.log(name);
        })
        console.log(propertyNum);
        console.log(allProperty);

    }
    checkProperty = () => {
        console.log(this.state.enteredValue);
    }
    showForms = () => {
        return (
            <h1>Form Compiled</h1>
        )
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
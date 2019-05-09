import React, { Component } from 'react'
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardTitle, CardBody } from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";
import ReactTable from "react-table";
import DataTablePagination from "Components/DataTables/pagination";
import PerfectScrollbar from "react-perfect-scrollbar";
import classnames from "classnames";


const CustomTbodyComponent = props => (
    <div {...props} className={classnames("rt-tbody", props.className || [])}>
        <PerfectScrollbar option={{ suppressScrollX: true }}>
            {props.children}
        </PerfectScrollbar>
    </div>
);

class EscrowGrid extends Component {
    render() {
        return (
            <Card className="mb-4 escrow-width h-100">
                <CardBody>
                    <CardTitle>
                        <IntlMessages id="escrow.payments-in" />
                    </CardTitle>
                    <ReactTable
                        data={this.props.Data}
                        TbodyComponent={CustomTbodyComponent}
                        columns={this.props.columns}
                        defaultPageSize={8}
                        showPageJump={false}
                        showPageSizeOptions={false}
                        showPagination={false}
                        className={"react-table-fixed-height"}
                    />
                </CardBody>
            </Card>
        );
    }
}

export default EscrowGrid;
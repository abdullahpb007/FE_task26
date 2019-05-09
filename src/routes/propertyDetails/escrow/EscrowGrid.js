import React, { Component } from 'react'
import IntlMessages from "Util/IntlMessages";
import { Row, Card, Button, ButtonGroup } from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";
import ReactTable from "react-table";
import DataTablePagination from "Components/DataTables/pagination";

class EscrowGrid extends Component {
    render() {
        return (
            <Row>
                <Colxx xxs="12" className="mb-3">
                    <Card className="d-flex flex-row">
                        <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                                <ReactTable
                                    data={this.props.data}
                                    columns={this.state.assesseeColumn}
                                    noDataText={"No Data Found..."}
                                    defaultPageSize={5}
                                    showPageSizeOptions={true}
                                    PaginationComponent={DataTablePagination}
                                    className="w-100"
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
        );
    }
}

export default EscrowGrid;
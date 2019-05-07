import React, { Component } from 'react'
import IntlMessages from "Util/IntlMessages";
import { Row, Card, Button, ButtonGroup } from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";
import ReactTable from "react-table";
import DataTablePagination from "Components/DataTables/pagination";

class AssesseeGrid extends Component {
    state = {
        assesseeColumn: [
            {
                Header: "Name",
                accessor: "name",
                filterable: "true"
            },
            {
                Header: "Address",
                accessor: "address",
                filterable: "true"
            },
            {
                Header: "City",
                accessor: "city",
                filterable: "true"
            },
            {
                Header: "State",
                accessor: "state",
                filterable: "true"
            },
            {
                Header: "",
                Cell: props => {
                    return (
                        <ButtonGroup className="m-auto">
                            <Button
                                outline
                                color="primary"
                                size="sm"
                                onClick={() => this.props.viewBtnHandler(props.original)}
                            >
                                <IntlMessages id="assessee.view" />
                            </Button>
                            <Button
                                outline
                                color="secondary"
                                size="sm"
                                onClick={() => this.props.editBtnHandler(props.original)}
                            >
                                <IntlMessages id="assessee.edit" />
                            </Button>
                        </ButtonGroup>
                    );
                }
            }
        ]
    }
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

export default AssesseeGrid;
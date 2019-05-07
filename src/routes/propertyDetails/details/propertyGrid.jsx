import React, { Component } from "react";

import IntlMessages from "Util/IntlMessages";
import { Row, Card, Button, ButtonGroup } from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";
import ReactTable from "react-table";
import DataTablePagination from "Components/DataTables/pagination";

class PropertyGrid extends Component {
  state = {
    propertyColumn: [
      {
        Header: "Pin",
        accessor: "pin",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "Address",
        accessor: "address",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "City",
        accessor: "city",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "State",
        accessor: "state",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "County",
        accessor: "county",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
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
                <IntlMessages id="property.viewbtn" />
              </Button>
              <Button
                outline
                color="secondary"
                size="sm"
                onClick={() => this.props.editBtnHandler(props.original)}
              >
                <IntlMessages id="property.editbtn" />
              </Button>
            </ButtonGroup>
          );
        }
      }
    ]
  };
  render() {
    return (
      <Row>
        <Colxx xxs="12" className="mb-3">
          <Card className="d-flex flex-row">
            <div className="pl-2 d-flex flex-grow-1 min-width-zero">
              <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                <ReactTable
                  className="w-100"
                  data={this.props.data}
                  columns={this.state.propertyColumn}
                  noDataText={"No Records Found !"}
                  defaultPageSize={5}
                  showPageSizeOptions={true}
                  PaginationComponent={DataTablePagination}
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

export default PropertyGrid;

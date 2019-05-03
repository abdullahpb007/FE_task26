import React, { Component } from "react";

import IntlMessages from "Util/IntlMessages";
import { Row, Card, Button, ButtonGroup } from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";
import ReactTable from "react-table";
import DataTablePagination from "Components/DataTables/pagination";

class PropertyGrid extends Component {
  state = {
    propertyData: [
      {
        propertyNumber: "1409276022Sans",
        pin: "6000",
        county: "San Francisco",
        address: "600 Guerrero St",
        city: "Poblacion Makati",
        state: "California",
        zip: "94110",
        township: "Coahuila",
        classCode: "40",
        assessedValue: "200000",
        marketValue: "180000",
        taxesPerYear: "3200",
        preeqexm: "0",
        homeOwner: "6000",
        seniorExemption: "0",
        seniorFreeze: "0",
        totalAcres: "1",
        legalDescription: "Strafford Woods - Lot 2"
      },
      {
        propertyNumber: "1409276022Sans",
        pin: "6001",
        county: "San Francisco",
        address: "519 Guerrero St",
        city: "Poblacion Makati",
        state: "California",
        zip: "94110",
        township: "Coahuila",
        classCode: "41",
        assessedValue: "302000",
        marketValue: "210000",
        taxesPerYear: "1200",
        preeqexm: "0",
        homeOwner: "3000",
        seniorExemption: "0",
        seniorFreeze: "0",
        totalAcres: "1.5",
        legalDescription: "Strafford Woods - Lot 2"
      }
    ],

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
                  data={this.state.propertyData}
                  columns={this.state.propertyColumn}
                  noDataText={"Loading Data..."}
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

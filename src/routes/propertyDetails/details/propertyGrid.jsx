import React, { Component } from "react";

import IntlMessages from "Util/IntlMessages";
import { Row, Card, Button, ButtonGroup } from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";
import ReactTable from "react-table";
import DataTablePagination from "Components/DataTables/pagination";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as apiCallCreator from "Redux/propertyDetails/_axios";
import * as actionCreator from "Redux/propertyDetails/actions";

class PropertyGrid extends Component {
  componentWillMount() {
    apiCallCreator.getPropertyData(0, 5, this.props.getPropertyDatas);
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/app/propertyDetails/detailsform" />;
    }
  };

  setRedirect = val => {
    this.props.selectProperty(val);
    this.setState({
      redirect: true
    });
  };

  clickEvent = val => {
    this.props.selectProperty(val);
    this.setRedirect();
  };

  state = {
    redirect: false,
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
              {this.renderRedirect()}
              <Button
                outline
                color="primary"
                size="sm"
                onClick={() => this.setRedirect(props.original)}
              >
                <IntlMessages id="property.viewbtn" />
              </Button>
              <Button
                outline
                color="secondary"
                size="sm"
                onClick={() => this.setRedirect(props.original)}
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
    console.log(this.props);
    return (
      <Row>
        <Colxx xxs="12" className="mb-3">
          <Card className="d-flex flex-row">
            <div className="pl-2 d-flex flex-grow-1 min-width-zero">
              <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                <ReactTable
                  className="w-100"
                  data={this.props.propertyDetails.propertyData}
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
                  manual
                  onFetchData={(state, instance) => {
                    apiCallCreator.getPropertyData(
                      state.page,
                      state.pageSize,
                      this.props.getPropertyDatas
                    );
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

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    getPropertyDatas: val => dispatch(actionCreator.GetPropertyData(val)),
    selectProperty: val => dispatch(actionCreator.SelectedData(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyGrid);

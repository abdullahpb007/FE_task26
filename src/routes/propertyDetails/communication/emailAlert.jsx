import React, { Component } from "react";

import { Card } from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";
import classnames from "classnames";
import ReactTable from "react-table";
import PerfectScrollbar from "react-perfect-scrollbar";

const CustomTbodyComponent = props => (
  <div {...props} className={classnames("rt-tbody", props.className || [])}>
    <PerfectScrollbar option={{ suppressScrollX: true }}>
      {props.children}
    </PerfectScrollbar>
  </div>
);

const dataTableColumns = [
  {
    Header: "Property Number",
    accessor: "propertyNumber"
  },
  {
    Header: "Email",
    accessor: "email"
  }
];

class EmailAlert extends Component {
  render() {
    return (
      <Card className="d-flex flex-row">
        <div className="pl-2 d-flex flex-grow-1 min-width-zero">
          <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
            <ReactTable
              data={this.props.details}
              TbodyComponent={CustomTbodyComponent}
              columns={dataTableColumns}
              defaultPageSize={5}
              showPageJump={false}
              showPageSizeOptions={false}
              showPagination={false}
              className={"react-table-fixed-height"}
            />
          </div>
        </div>
      </Card>
    );
  }
}

export default EmailAlert;

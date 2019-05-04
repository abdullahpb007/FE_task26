import React, { Component, Fragment } from "react";

import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Colxx, Separator } from "Components/CustomBootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import IntlMessages from "Util/IntlMessages";

import logsData from "Data/logs.json";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";
import ChartComponent, { Chart } from "react-chartjs-2";
import { barChartDashConfig } from "Constants/chartConfig";
import { BarShadow } from "Components/Charts";

const logs = logsData.data;

class custom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        pendingPayments: 18,
        pendingPaymentsThisWeek: 10,
        upcommingRenewals: 32,
        messagesFromClient: 43,
        totalProperties: 25,
        pendingToDOs: 9,
        TotalAssesseeAdded: 28
      }
    };
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.custom" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row className="icon-cards-row mb-2">
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <Card className="mb-4">
              <CardBody className="text-center">
                <i className="iconsminds-clock" />
                <p className="card-text font-weight-semibold mb-0">
                  <IntlMessages id="dashboards.pending-payments" />
                </p>
                <p className="lead text-center">
                  {this.state.data.pendingPayments}
                </p>
              </CardBody>
            </Card>
          </Colxx>

          <Colxx xxs="6" sm="4" md="3" lg="2">
            <Card className="mb-4">
              <CardBody className="text-center">
                <i className="simple-icon-login" />
                <p className="card-text font-weight-semibold mb-0">
                  <IntlMessages id="dashboards.upcomming-renewals" />
                </p>
                <p className="lead text-center">
                  {this.state.data.upcommingRenewals}
                </p>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <Card className="mb-4">
              <CardBody className="text-center">
                <i className="iconsminds-mail-inbox" />
                <p className="card-text font-weight-semibold mb-0">
                  <IntlMessages id="dashboards.messages" />
                </p>
                <p className="lead text-center">
                  {this.state.data.messagesFromClient}
                </p>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <Card className="mb-4">
              <CardBody className="text-center">
                <i className="iconsminds-home-4" />
                <p className="card-text font-weight-semibold mb-0">
                  <IntlMessages id="dashboards.properties" />
                </p>
                <p className="lead text-center">
                  {this.state.data.totalProperties}
                </p>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <Card className="mb-4">
              <CardBody className="text-center">
                <i className="iconsminds-check" />
                <p className="card-text font-weight-semibold mb-0">
                  <IntlMessages id="dashboards.to-do-list" />
                </p>
                <p className="lead text-center">
                  {this.state.data.pendingToDOs}
                </p>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <Card className="mb-4">
              <CardBody className="text-center">
                <i className="iconsminds-add" />
                <p className="card-text font-weight-semibold mb-0">
                  <IntlMessages id="dashboards.assessee-added" />
                </p>
                <p className="lead text-center">
                  {this.state.data.TotalAssesseeAdded}
                </p>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        <Row className="mb-4">
          <Colxx xxs="12" sm="12" md="12" lg="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.bar-chart-title" />
                </CardTitle>
                <CardSubtitle>
                  <IntlMessages id="dashboards.bar-chart-sub-title" />
                </CardSubtitle>
                <div className="chart-container">
                  <BarShadow {...barChartDashConfig} />
                </div>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        <Row >
          <Colxx xxs="12" >
            <div className="icon-cards-row">
              <ReactSiemaCarousel
                perPage={{
                  0: 1,
                  320: 2,
                  576: 3,
                  1800: 4
                }}
                controls={false}
                loop={true}
              >
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsminds-clock" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboards.pending-payments-week" />
                      </p>
                      <p className="lead text-center">
                        {this.state.data.pendingPaymentsThisWeek}
                      </p>
                    </CardBody>
                  </Card>
                </div>
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsminds-basket-coins" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboards.completed-orders" />
                      </p>
                      <p className="lead text-center">32</p>
                    </CardBody>
                  </Card>
                </div>
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsminds-arrow-refresh" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboards.refund-requests" />
                      </p>
                      <p className="lead text-center">74</p>
                    </CardBody>
                  </Card>
                </div>
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsminds-mail-read" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboards.new-comments" />
                      </p>
                      <p className="lead text-center">25</p>
                    </CardBody>
                  </Card>
                </div>
              </ReactSiemaCarousel>
            </div>
          </Colxx>
        </Row>
        <Row>

        </Row>

        <Row>
          <Colxx lg="5" md="6" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.to-do-list" />
                </CardTitle>
                <div className="dashboard-logs">
                  <PerfectScrollbar
                    option={{ suppressScrollX: true, wheelPropagation: false }}
                  >
                    <table className="table table-sm table-borderless">
                      <tbody>
                        {logs.map((log, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                <span
                                  className={`log-indicator align-middle ${
                                    log.color
                                    }`}
                                />
                              </td>
                              <td>
                                <span className="font-weight-medium">
                                  {log.label}
                                </span>
                              </td>
                              <td className="text-right">
                                <span className="text-muted">{log.time}</span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </PerfectScrollbar>
                </div>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}

export default custom;

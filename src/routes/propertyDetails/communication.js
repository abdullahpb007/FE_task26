import React, { Component, Fragment } from "react";
import { injectIntl } from "react-intl";
import {
  Card,
  CardBody,
  Form,
  Row,
  Button,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import ComGrid from "./communication/comGrid.jsx";

import IntlMessages from "Util/IntlMessages";
import { Colxx, Separator } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";
import ReactAutosuggest from "Components/ReactAutosuggest";

import mouseTrap from "react-mousetrap";

class PropertyDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      propertyNumber: "",
      phone: "",
      email: "",

      selectedData: [],
      selectedAttachment: []
    };
  }

  handlePropertySearch = () => {
    event.preventDefault();
    clientDetails.find(e => {
      if (this.state.propertyNumber == e.propertyNumber) {
        const selectedData = e.alert;
        const selectedAttachment = e.attachments;
        this.setState({ selectedData, selectedAttachment });
      }
    });
  };

  handlePhoneSearch = () => {
    event.preventDefault();
    clientDetails.find(e => {
      if (this.state.phone == e.phone) {
        const selectedData = e.alert;
        const selectedAttachment = e.attachments;
        this.setState({ selectedData, selectedAttachment });
      }
    });
  };

  handleEmailSearch = () => {
    event.preventDefault();
    clientDetails.find(e => {
      if (this.state.email == e.email) {
        const selectedData = e.alert;
        const selectedAttachment = e.attachments;
        this.setState({ selectedData, selectedAttachment });
      }
    });
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Fragment>
        <div className="disable-text-selection">
          <Row>
            <Colxx xxs="12">
              <div className="mb-2">
                <h1>
                  <IntlMessages id="menu.communication" />
                </h1>
                <BreadcrumbItems match={this.props.match} />
              </div>
              <Separator className="mb-5" />
              <Row>
                <div className="col-6">
                  <Form onSubmit={this.handlePropertySearch}>
                    <ReactAutosuggest
                      placeholder="Search By Property Number ex: 1409276022Sans"
                      data={clientDetails}
                      onChange={value => {
                        this.state.propertyNumber = value;
                      }}
                    />
                  </Form>
                </div>
                <div className="col-3">
                  <Form onSubmit={this.handlePhoneSearch}>
                    <InputGroup>
                      <Input
                        name="phone"
                        onChange={this.handleInputChange}
                        placeholder="Phone Number"
                      />
                      <InputGroupAddon addonType="append">
                        <Button
                          outline
                          color="primary"
                          onClick={this.handlePhoneSearch}
                        >
                          <span className="search-icon">
                            <i className="simple-icon-magnifier" />
                          </span>
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Form>
                </div>
                <div className="col-3">
                  <Form onSubmit={this.handleEmailSearch}>
                    <InputGroup>
                      <Input
                        name="email"
                        onChange={this.handleInputChange}
                        placeholder="Email"
                      />
                      <InputGroupAddon addonType="append">
                        <Button
                          outline
                          color="primary"
                          onClick={this.handleEmailSearch}
                        >
                          <span className="search-icon">
                            <i className="simple-icon-magnifier" />
                          </span>
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Form>
                </div>
              </Row>
            </Colxx>
            <Colxx xxs="8" className="mt-2">
              <ComGrid details={this.state.selectedData} />
            </Colxx>
            <Colxx xxs="4" className="mt-2">
              <Card className="h-100">
                <CardBody>
                  <h4>
                    <IntlMessages id="communication.attachments" />
                  </h4>
                  {this.state.selectedAttachment.map((e, i) => {
                    return (
                      <button
                        key={i}
                        type="button"
                        className="btn btn-outline-primary m-1"
                      >
                        {e.fileName + " +"}
                      </button>
                    );
                  })}
                </CardBody>
              </Card>
            </Colxx>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default injectIntl(mouseTrap(PropertyDetails));

const clientDetails = [
  {
    propertyNumber: "1409276022Sans",
    phone: "12345678912",
    email: "abdul@mail.com",
    alert: [
      {
        timestamp: "20/12/2019 9:00",
        alertType: "Email",
        contact: "abdul@mail.com",
        description: "None"
      },
      {
        timestamp: "22/12/2019 9:00",
        alertType: "Text",
        contact: "12345678912",
        description: "Auto Payment Alert"
      }
    ],
    attachments: [
      { fileName: "Doc1.pdf" },
      { fileName: "Doc2.pdf" },
      { fileName: "Doc3.pdf" }
    ]
  },
  {
    propertyNumber: "1401026022Sans",
    phone: "23456789123",
    email: "abdul@garena.com",
    alert: [
      {
        timestamp: "20/12/2019 9:00",
        alertType: "Email",
        contact: "abdul@garena.com",
        description: "None"
      },
      {
        timestamp: "20/12/2019 9:00",
        alertType: "Text",
        contact: "23456789123",
        description: "Payment Due Alert"
      }
    ],
    attachments: [
      { fileName: "documents1.pdf" },
      { fileName: "property.pdf" },
      { fileName: "ownership.pdf" }
    ]
  },
  {
    propertyNumber: "1409273201Kane",
    phone: "34567891234",
    email: "abdul@zohomail.com",
    alert: [
      {
        timestamp: "20/12/2019 9:00",
        alertType: "Email",
        contact: "abdul@zohomail.com",
        description: "None"
      },
      {
        timestamp: "20/12/2019 9:00",
        alertType: "Text",
        contact: "34567891234",
        description: "Payment OverDue Alert"
      }
    ],
    attachments: [
      { fileName: "payment.pdf" },
      { fileName: "proof.pdf" },
      { fileName: "address.pdf" }
    ]
  },
  {
    propertyNumber: "1420316022Kane",
    phone: "45678912345",
    email: "abdul@yahoomail.com",
    alert: [
      {
        timestamp: "20/12/2019 9:00",
        alertType: "Email",
        contact: "abdul@yahoomail.com",
        description: "None"
      },
      {
        timestamp: "20/12/2019 9:00",
        alertType: "Text",
        contact: "45678912345",
        description: "Auto Payment Alert"
      }
    ],
    attachments: [
      { fileName: "Doc1.pdf" },
      { fileName: "county.pdf" },
      { fileName: "identity.pdf" }
    ]
  },
  {
    propertyNumber: "1203276022Sans",
    phone: "56789123456",
    email: "abdullah@gmail.com",
    alert: [
      {
        timestamp: "20/12/2019 9:00",
        alertType: "Email",
        contact: "abdullah@gmail.com",
        description: "None"
      },
      {
        timestamp: "20/12/2019 9:00",
        alertType: "Text",
        contact: "56789123456",
        description: "None"
      }
    ],
    attachments: [
      { fileName: "countyDetails.pdf" },
      { fileName: "county.pdf" },
      { fileName: "assessee.pdf" }
    ]
  }
];

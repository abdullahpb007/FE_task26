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

import IntlMessages from "Util/IntlMessages";
import { Colxx, Separator } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";
import ReactAutosuggest from "Components/ReactAutosuggest";

import EmailAlert from "./communication/emailAlert.jsx";

import mouseTrap from "react-mousetrap";

class PropertyDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      propertyNumber: "",
      phone: "",
      email: "",

      selectedData: []
    };
  }

  handlePropertySearch = () => {
    event.preventDefault();
    clientDetails.find(e => {
      if (this.state.propertyNumber == e.propertyNumber) {
        const selectedData = e;
        this.setState({ selectedData });
      }
    });
  };

  handlePhoneSearch = () => {
    event.preventDefault();
    clientDetails.find(e => {
      if (this.state.phone == e.phone) {
        const selectedData = e;
        this.setState({ selectedData });
      }
    });
  };

  handleEmailSearch = () => {
    event.preventDefault();
    clientDetails.find(e => {
      if (this.state.email == e.email) {
        const selectedData = e;
        this.setState({ selectedData });
        console.log(this.state.selectedData);
      }
    });
  };

  handleInputChange = event => {
    console.log(event.target.name, event.target.value);
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
                      placeholder="Search By Property Number"
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
              <EmailAlert details={clientDetails} />
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
    emailAlert: [
      {
        date: "20/12/2019",
        time: "9:00",
        email: "abdul@mail.com",
        attachment: "None"
      },
      {
        date: "22/12/2019",
        time: "9:20",
        email: "abdul@mail.com",
        attachment: "None"
      },
      {
        date: "23/12/2019",
        time: "9:30",
        email: "abdul@mail.com",
        attachment: "None"
      }
    ]
  },
  {
    propertyNumber: "1401026022Sans",
    phone: "23456789123",
    email: "abdul@garena.com",
    emailAlert: [
      {
        date: "20/12/2019",
        time: "9:00",
        email: "abdul@garena.com",
        attachment: "None"
      },
      {
        date: "22/12/2019",
        time: "9:20",
        email: "abdul@garena.com",
        attachment: "None"
      },
      {
        date: "23/12/2019",
        time: "9:30",
        email: "abdul@garena.com",
        attachment: "None"
      }
    ]
  },
  {
    propertyNumber: "1409273201Kane",
    phone: "34567891234",
    email: "abdul@zohomail.com",
    emailAlert: [
      {
        date: "20/12/2019",
        time: "9:00",
        email: "abdul@zohomail.com",
        attachment: "None"
      },
      {
        date: "22/12/2019",
        time: "9:20",
        email: "abdul@zohomail.com",
        attachment: "None"
      },
      {
        date: "23/12/2019",
        time: "9:30",
        email: "abdul@zohomail.com",
        attachment: "None"
      }
    ]
  },
  {
    propertyNumber: "1420316022Kane",
    phone: "45678912345",
    email: "abdul@yahoomail.com",
    emailAlert: [
      {
        date: "20/12/2019",
        time: "9:00",
        email: "abdul@yahoomail.com",
        attachment: "None"
      },
      {
        date: "22/12/2019",
        time: "9:20",
        email: "abdul@yahoomail.com",
        attachment: "None"
      },
      {
        date: "23/12/2019",
        time: "9:30",
        email: "abdul@yahoomail.com",
        attachment: "None"
      }
    ]
  },
  {
    propertyNumber: "1203276022Sans",
    phone: "56789123456",
    email: "abdullah@gmail.com",
    emailAlert: [
      {
        date: "20/12/2019",
        time: "9:00",
        email: "abdullah@gmail.com",
        attachment: "None"
      },
      {
        date: "22/12/2019",
        time: "9:20",
        email: "abdullah@gmail.com",
        attachment: "None"
      },
      {
        date: "23/12/2019",
        time: "9:30",
        email: "abdullah@gmail.com",
        attachment: "None"
      }
    ]
  }
];

import React, { Component, Fragment } from "react";
import { Row, Button } from "reactstrap";

import IntlMessages from "Util/IntlMessages";
import { Colxx, Separator } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";

import PropertyGrid from "./details/propertyGrid.jsx";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreator from "Redux/propertyDetails/actions";
import { FORM_ADD } from "Constants/actionTypes";

class PropertyDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <div className="disable-text-selection">
          <Row>
            <Colxx xxs="12">
              <div className="mb-2">
                <h1>
                  <IntlMessages id="menu.propertyDetails" />
                </h1>

                <div className="float-sm-right">
                  <div>
                    {this.renderRedirect()}
                    <Button
                      color="success"
                      size="lg"
                      className="default"
                      onClick={this.setRedirect}
                    >
                      <IntlMessages id="property.add-modal-title" />
                    </Button>
                  </div>
                  {"  "}
                </div>

                <BreadcrumbItems match={this.props.match} />
              </div>
              <Separator className="mb-5" />
            </Colxx>
          </Row>
          <PropertyGrid />
        </div>
      </Fragment>
    );
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect push to="/app/propertyDetails/detailsform" />;
    }
  };

  setRedirect = () => {
    this.props.changeFormType(FORM_ADD);
    this.setState({
      redirect: true
    });
  };
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    changeFormType: val => dispatch(actionCreator.ChangeFormType(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyDetails);

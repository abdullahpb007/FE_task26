import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
    Row,
    Button,
    FormGroup,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label
} from "reactstrap";

import * as Yup from "yup";

import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";

const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    zip: Yup.number().required("Required"),
});

class AddModal extends Component {
    render() {
        return (
            <Modal
                isOpen={this.props.modalAddHandler}
                toggle={this.props.toggleModalAdd}
                size="lg"
            >
                <ModalHeader toggle={this.props.toggleModalAdd}>
                    <IntlMessages id="assessee.popupTitle" />
                </ModalHeader>

                <Formik
                    initialValues={{
                        name: "",
                        pin: this.props.data + 6000,
                        address: "",
                        city: "",
                        state: "",
                        zip: "",
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        this.props.onSubmit(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <ModalBody>
                                <Row>
                                    <Colxx xxs="12">
                                        <FormGroup className="form-group has-top-label">
                                            <Label>
                                                <IntlMessages id="assessee.name" />
                                            </Label>
                                            <Field
                                                className="form-control"
                                                type="text"
                                                name="name"
                                            />
                                            {errors.name && touched.name ? (
                                                <div className="invalid-feedback d-block">
                                                    {errors.name}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                    </Colxx>
                                    <Colxx xxs="12">
                                        <FormGroup className="form-group has-top-label">
                                            <Label>
                                                <IntlMessages id="assessee.address" />
                                            </Label>
                                            <Field
                                                className="form-control"
                                                type="text"
                                                name="address"
                                            />
                                            {errors.address && touched.address ? (
                                                <div className="invalid-feedback d-block">
                                                    {errors.address}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                    </Colxx>
                                    <Colxx xxs="12">
                                        <FormGroup className="form-group has-top-label">
                                            <Label>
                                                <IntlMessages id="assessee.city" />
                                            </Label>
                                            <Field
                                                className="form-control"
                                                type="text"
                                                name="city"
                                            />
                                            {errors.city && touched.city ? (
                                                <div className="invalid-feedback d-block">
                                                    {errors.city}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                    </Colxx>
                                    <Colxx xxs="12">
                                        <FormGroup className="form-group has-top-label">
                                            <Label>
                                                <IntlMessages id="assessee.state" />
                                            </Label>
                                            <Field
                                                className="form-control"
                                                type="text"
                                                name="state"
                                            />
                                            {errors.state && touched.state ? (
                                                <div className="invalid-feedback d-block">
                                                    {errors.state}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                    </Colxx>
                                    <Colxx xxs="12">
                                        <FormGroup className="form-group has-top-label">
                                            <Label>
                                                <IntlMessages id="assessee.zip" />
                                            </Label>
                                            <Field
                                                className="form-control"
                                                type="text"
                                                name="zip"
                                            />
                                            {errors.zip && touched.zip ? (
                                                <div className="invalid-feedback d-block">
                                                    {errors.zip}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                    </Colxx>
                                </Row>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary"
                                    outline
                                    onClick={this.props.toggleModalAdd}>
                                    <IntlMessages id="pages.cancel" />
                                </Button>
                                <Button color="primary" type="submit">
                                    <IntlMessages id="pages.submit" />
                                </Button>{" "}
                            </ModalFooter>
                        </Form>

                    )}

                </Formik>

            </Modal>
        );
    }
}

export default AddModal;
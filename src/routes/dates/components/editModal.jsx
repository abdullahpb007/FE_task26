import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
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

const dateSchema = Yup.object().shape({
  actualEstimatedDate: Yup.string().required("Required"),
  firstInstallmentDate: Yup.string().required("Required"),
  secondInstallmentDate: Yup.string().required("Required"),
  petitionFiledDate: Yup.string().required("Required"),
  extentionDate: Yup.string().required("Required"),
  expirationDate: Yup.string().required("Required"),
  assignmentCallDate: Yup.string().required("Required"),
  proveUpDate: Yup.string().required("Required"),
  orderOfDate: Yup.string().required("Required")
});

class EditModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.modalEditHandler}
        toggle={this.props.toggleModalEdit}
        size="lg"
      >
        <ModalHeader toggle={this.props.toggleModalEdit}>
          <IntlMessages id="dates.edit-modal-title" />
        </ModalHeader>

        <Formik
          initialValues={{
            actualEstimatedDate: this.props.details.actualEstimatedDate,
            firstInstallmentDate: this.props.details.firstInstallmentDate,
            secondInstallmentDate: this.props.details.secondInstallmentDate,
            petitionFiledDate: this.props.details.petitionFiledDate,
            extentionDate: this.props.details.extentionDate,
            expirationDate: this.props.details.expirationDate,
            assignmentCallDate: this.props.details.assignmentCallDate,
            proveUpDate: this.props.details.proveUpDate,
            orderOfDate: this.props.details.orderOfDate
          }}
          validationSchema={dateSchema}
          onSubmit={values => {
            this.props.onSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <ModalBody>
                <Row>
                  <Colxx xxs="4">
                    <FormGroup className="form-group has-top-label">
                      <Label
                        className={
                          errors.actualEstimatedDate &&
                          touched.actualEstimatedDate
                            ? "text-danger"
                            : ""
                        }
                      >
                        <IntlMessages id="dates.actualEstimatedDate" />
                      </Label>
                      <Field
                        className={
                          "form-control" +
                          (errors.actualEstimatedDate &&
                          touched.actualEstimatedDate
                            ? " border-danger"
                            : "")
                        }
                        type="date"
                        name="actualEstimatedDate"
                      />
                      {errors.actualEstimatedDate &&
                      touched.actualEstimatedDate ? (
                        <small className="text-danger">
                          {errors.actualEstimatedDate}
                        </small>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="4">
                    <FormGroup className="form-group has-top-label">
                      <Label
                        className={
                          errors.firstInstallmentDate &&
                          touched.firstInstallmentDate
                            ? "text-danger"
                            : ""
                        }
                      >
                        <IntlMessages id="dates.firstInstallmentDate" />
                      </Label>
                      <Field
                        className={
                          "form-control" +
                          (errors.firstInstallmentDate &&
                          touched.firstInstallmentDate
                            ? " border-danger"
                            : "")
                        }
                        type="date"
                        name="firstInstallmentDate"
                      />
                      {errors.firstInstallmentDate &&
                      touched.firstInstallmentDate ? (
                        <small className="text-danger">
                          {errors.firstInstallmentDate}
                        </small>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="4">
                    <FormGroup className="form-group has-top-label">
                      <Label
                        className={
                          errors.secondInstallmentDate &&
                          touched.secondInstallmentDate
                            ? "text-danger"
                            : ""
                        }
                      >
                        <IntlMessages id="dates.secondInstallmentDate" />
                      </Label>
                      <Field
                        className={
                          "form-control" +
                          (errors.secondInstallmentDate &&
                          touched.secondInstallmentDate
                            ? " border-danger"
                            : "")
                        }
                        type="date"
                        name="secondInstallmentDate"
                      />
                      {errors.secondInstallmentDate &&
                      touched.secondInstallmentDate ? (
                        <small className="text-danger">
                          {errors.secondInstallmentDate}
                        </small>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="4">
                    <FormGroup className="form-group has-top-label">
                      <Label
                        className={
                          errors.petitionFiledDate && touched.petitionFiledDate
                            ? "text-danger"
                            : ""
                        }
                      >
                        <IntlMessages id="dates.petitionFiledDate" />
                      </Label>
                      <Field
                        className={
                          "form-control" +
                          (errors.petitionFiledDate && touched.petitionFiledDate
                            ? " border-danger"
                            : "")
                        }
                        type="date"
                        name="petitionFiledDate"
                      />
                      {errors.petitionFiledDate && touched.petitionFiledDate ? (
                        <small className="text-danger">
                          {errors.petitionFiledDate}
                        </small>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="4">
                    <FormGroup className="form-group has-top-label">
                      <Label
                        className={
                          errors.extentionDate && touched.extentionDate
                            ? "text-danger"
                            : ""
                        }
                      >
                        <IntlMessages id="dates.extentionDate" />
                      </Label>
                      <Field
                        className={
                          "form-control" +
                          (errors.extentionDate && touched.extentionDate
                            ? " border-danger"
                            : "")
                        }
                        type="date"
                        name="extentionDate"
                      />
                      {errors.extentionDate && touched.extentionDate ? (
                        <small className="text-danger">
                          {errors.extentionDate}
                        </small>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="4">
                    <FormGroup className="form-group has-top-label">
                      <Label
                        className={
                          errors.expirationDate && touched.expirationDate
                            ? "text-danger"
                            : ""
                        }
                      >
                        <IntlMessages id="dates.expirationDate" />
                      </Label>
                      <Field
                        className={
                          "form-control" +
                          (errors.expirationDate && touched.expirationDate
                            ? " border-danger"
                            : "")
                        }
                        type="date"
                        name="expirationDate"
                      />
                      {errors.expirationDate && touched.expirationDate ? (
                        <small className="text-danger">
                          {errors.expirationDate}
                        </small>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="4">
                    <FormGroup className="form-group has-top-label">
                      <Label
                        className={
                          errors.assignmentCallDate &&
                          touched.assignmentCallDate
                            ? "text-danger"
                            : ""
                        }
                      >
                        <IntlMessages id="dates.assignmentCallDate" />
                      </Label>
                      <Field
                        className={
                          "form-control" +
                          (errors.assignmentCallDate &&
                          touched.assignmentCallDate
                            ? " border-danger"
                            : "")
                        }
                        type="date"
                        name="assignmentCallDate"
                      />
                      {errors.assignmentCallDate &&
                      touched.assignmentCallDate ? (
                        <small className="text-danger">
                          {errors.assignmentCallDate}
                        </small>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="4">
                    <FormGroup className="form-group has-top-label">
                      <Label
                        className={
                          errors.proveUpDate && touched.proveUpDate
                            ? "text-danger"
                            : ""
                        }
                      >
                        <IntlMessages id="dates.proveUpDate" />
                      </Label>
                      <Field
                        className={
                          "form-control" +
                          (errors.proveUpDate && touched.proveUpDate
                            ? " border-danger"
                            : "")
                        }
                        type="date"
                        name="proveUpDate"
                      />
                      {errors.proveUpDate && touched.proveUpDate ? (
                        <small className="text-danger">
                          {errors.proveUpDate}
                        </small>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                  </Colxx>
                  <Colxx xxs="4">
                    <FormGroup className="form-group has-top-label">
                      <Label
                        className={
                          errors.orderOfDate && touched.orderOfDate
                            ? "text-danger"
                            : ""
                        }
                      >
                        <IntlMessages id="dates.orderOfDate" />
                      </Label>
                      <Field
                        className={
                          "form-control" +
                          (errors.orderOfDate && touched.orderOfDate
                            ? " border-danger"
                            : "")
                        }
                        type="date"
                        name="orderOfDate"
                      />
                      {errors.orderOfDate && touched.orderOfDate ? (
                        <small className="text-danger">
                          {errors.orderOfDate}
                        </small>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                  </Colxx>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="secondary"
                  outline
                  onClick={this.props.toggleModalEdit}
                >
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

export default EditModal;

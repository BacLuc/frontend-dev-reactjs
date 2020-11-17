import React, {Component} from "react";
import {Breadcrumb, BreadcrumbItem, Button, Col, Label, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {Control, Errors, LocalForm, ValidatorFn} from "react-redux-form";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {Feedback} from "../store/ActionTypes";
import {addFeedback} from "../store/ActionCreators";

interface Props {
    addFeedback: Function
}

const mapDispatchToProps = (dispatch: Dispatch) : Props => ({addFeedback: (feedback : Feedback) => dispatch(addFeedback(feedback))})

const connector = connect(_ => {}, mapDispatchToProps);

interface Touched {
    firstName: boolean
    lastName: boolean
    email: boolean
}

interface ContactState {
    firstName: string
    lastName: string
    email: string
    touched: Touched
}

const required:ValidatorFn = (val:any):boolean => val && val.length > 0;
const maxLength = (len:number) => (val:any) => !(val) || (val.length <= len);
const minLength = (len:number) => (val:any) => val && (val.length >= len);
const validEmail = (val:any) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component<Props, ContactState> {
    public readonly state:ContactState = {
        firstName: '',
        lastName: '',
        email: '',
        touched: {
            firstName: false,
            lastName: false,
            email: false
        }
    }

    handleSubmit(values:any) {
        this.props.addFeedback(values);
    }


    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/home">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Contact Us</h3>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road
                            <br/>
                            Clear Water Bay, Kowloon
                            <br/>
                            HONG KONG
                            <br/>
                            <i className="fa fa-phone"/>: +852 1234 5678
                            <br/>
                            <i className="fa fa-fax"/>: +852 8765 4321
                            <br/>
                            <i className="fa fa-envelope"/>:{" "}
                            <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a className="btn btn-primary" href="tel:+85212345678" role="button">
                                <i className="fa fa-phone"/>
                                Call
                            </a>
                            <button className="btn btn-info">
                                <i className="fa fa-skype"/>
                                Skype
                            </button>
                            <a className="btn btn-success" href="mailto:confusion@food.net" role="button">
                                <i className="fa fa-envelope-o"/>
                                Email
                            </a>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>Send us your Feedback</h3>
                        </div>
                        <div className="col-12 col-md-9">
                            <LocalForm onSubmit={
                                (values) => this.handleSubmit(values)
                            }>

                                <Row className="form-group">
                                    <Label htmlFor="firstname"
                                           md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".firstname" id="firstname" name="firstname" placeholder="First Name" className="form-control"
                                                      validators={
                                                          {
                                                              required,
                                                              minLength: minLength(3),
                                                              maxLength: maxLength(15)
                                                          }
                                                      }/>
                                        <Errors className="text-danger" model=".firstname" show="touched"
                                                messages={
                                                    {
                                                        required: 'Required',
                                                        minLength: 'Must be greater than 2 characters',
                                                        maxLength: 'Must be 15 characters or less'
                                                    }
                                                }/>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastname"
                                           md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".lastname" id="lastname" name="lastname" placeholder="Last Name" className="form-control"
                                                      validators={
                                                          {
                                                              required,
                                                              minLength: minLength(3),
                                                              maxLength: maxLength(15)
                                                          }
                                                      }/>
                                        <Errors className="text-danger" model=".lastname" show="touched"
                                                messages={
                                                    {
                                                        required: 'Required',
                                                        minLength: 'Must be greater than 2 characters',
                                                        maxLength: 'Must be 15 characters or less'
                                                    }
                                                }/>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email"
                                           md={2}>Email</Label>
                                    <Col md={10}>
                                        <Control.text model=".email" id="email" name="email" placeholder="Email" className="form-control"
                                                      validators={
                                                          {required, validEmail}
                                                      }/>
                                        <Errors className="text-danger" model=".email" show="touched"
                                                messages={
                                                    {
                                                        required: 'Required',
                                                        validEmail: 'Invalid Email Address'
                                                    }
                                                }/>
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Label htmlFor="message"
                                           md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Control.textarea className="form-control" id="message" model=".message" name="message" rows={12}/>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={
                                        {
                                            size: 10,
                                            offset: 2
                                        }
                                    }>
                                        <Button color="primary" type="submit">
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default compose(connector)(Contact)
import React, {useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router";
import Loader from "../shared/Loader";
import {Link} from "react-router-dom";

function Registration(props) {
    const [email, changeEmailValue] = useState('');
    const [password, changePasswordValue] = useState('');
    const [confirmPassword, changeConfirmPasswordValue] = useState('');

    if(props.user.email) {
        return <Redirect to='vocabulary'/>
    }

    function register() {
        if(confirmPassword === password) {
            props.register({
                email: email,
                password: password
            });
        } else {
            alert('Passwords do not match')
        }
    }

    if(props.loader) {
        return(
            <Loader/>
        )
    }

    return(
        <div className='main_form'>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6" className='form'>
                        <form >
                            <p className="h5 text-center mb-4">Sign up</p>
                            <div className="grey-text">
                                <MDBInput
                                    value={email}
                                    onChange={e => changeEmailValue(e.target.value)}
                                    label="Your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    value={password}
                                    onChange={e => changePasswordValue(e.target.value)}
                                    label="Your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                />
                                <MDBInput
                                    value={confirmPassword}
                                    onChange={e => changeConfirmPasswordValue(e.target.value)}
                                    label="Confirm your password"
                                    icon="exclamation-triangle"
                                    group
                                    type="password"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn onClick={() => register()} color="primary">Register</MDBBtn>
                            </div>
                            <Link to='/login'>
                                <p className="h5 text-center mb-4 auth_link">Login</p>
                            </Link>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

const mapStateToProps = (state) => ({
    loader: state.loader,
    user: state.user
});

const mapDispatchToProps = (dispatch) =>  ({
    register: (user) => {dispatch({type: "REGISTER_USER", user: user})},
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration));

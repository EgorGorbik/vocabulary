import React, {useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {connect} from "react-redux";
import Loader from "../shared/Loader";
import {Link} from "react-router-dom";
import './styles/_index.scss';
import {Redirect, withRouter} from "react-router";

function Login(props) {
    const [email, changeEmailValue] = useState('');
    const [password, changePasswordValue] = useState('');

    if(props.user.email) {
        return <Redirect to='vocabulary'/>
    }

    function login() {
        props.login({
            email: email,
            password: password
        });
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
                            </div>
                            <div className="text-center">
                                <MDBBtn onClick={() => login()} color="primary">Login</MDBBtn>
                            </div>
                            <Link to='/registration'>
                                <p className="h5 text-center mb-4 auth_link">Registration</p>
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
    login: (user) => {dispatch({type: "LOGIN_USER", user: user})}
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login));

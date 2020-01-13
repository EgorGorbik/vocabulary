import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {Button} from "react-bootstrap";
import './styles/_index.scss';
import Words from "./Words";
import AddForm from "./AddForm";
import Loader from "../shared/Loader";
import {withRouter} from "react-router";

function Vocabulary(props) {
    const [isOpenInputArea, changeFlagInputArea] = useState(false);
    const [defaultInputValues, changeDefaultInputValues] = useState({});

    useEffect(() => {
        if (!props.user.email) {
            props.history.push('/login')
        }
    }, [props.history, props.user.email])

    if(props.loader) {
        return <Loader/>
    }

    function handleClick() {
        changeFlagInputArea(!isOpenInputArea);
        changeDefaultInputValues({})
    }

    return(
        <div className='main'>
            <Button className='add_btn' onClick={() => handleClick()}>{isOpenInputArea? 'отмена' : 'записать новое слово'}</Button>
            {isOpenInputArea?
                <AddForm defaultInputValues={defaultInputValues} changeFlagInputArea={changeFlagInputArea}/> :
                <Words changeDefaultInputValues={changeDefaultInputValues} changeFlagInputArea={changeFlagInputArea}/>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    loader: state.loader,
    user: state.user,
    vocabulary: state.vocabulary
});

const mapDispatchToProps = (dispatch) =>  ({
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Vocabulary));
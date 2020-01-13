import React, {useState, useEffect} from 'react';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";
import './styles/_index.scss';

function AddForm(props) {
    const [word, changeWordValue] = useState('');
    const [translate, changeTranslateValue] = useState('');

    useEffect(() => {
        if(props.defaultInputValues.word) {
            changeWordValue(props.defaultInputValues.word);
            changeTranslateValue(props.defaultInputValues.translate);
        } else {
            changeWordValue('');
            changeTranslateValue('');
        }
    }, [props.defaultInputValues.word, props.defaultInputValues.translate])

    function sendWord() {
        if(word.trim() !== '' && translate.trim() !== '') {
            if(props.defaultInputValues.id) {
                props.changeWord(props.user.email, props.defaultInputValues.id, {word: word, translate: translate})
            } else {
                props.addWord(props.user.email, word, translate)
            }
        }
        props.changeFlagInputArea(false)
    }

    return(
        <MDBContainer className='add_form'>
            <MDBRow>
                <MDBCol md="6" className='form'>
                    <form>
                        <div className="grey-text">
                            <MDBInput
                                value={word}
                                onChange={e => changeWordValue(e.target.value)}
                                label="Слово"
                                group
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                value={translate}
                                onChange={e => changeTranslateValue(e.target.value)}
                                label="Перевод"
                                group
                                validate
                            />
                        </div>
                        <div className="text-center">
                            <MDBBtn onClick={() => sendWord()} color="primary">Отправить</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

const mapStateToProps = (state) => ({
    loader: state.loader,
    user: state.user,
    vocabulary: state.vocabulary
});

const mapDispatchToProps = (dispatch) =>  ({
    addWord: (user, word, translate) => {dispatch({type: "ADD_WORD",  word: word, translate: translate, user: user})},
    changeWord: (user, id, word) => {dispatch({type: "CHANGE_WORD",user: user, id: id, word: word})}
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AddForm));

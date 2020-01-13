import React from 'react';
import {Table} from "react-bootstrap";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import './styles/_index.scss';

function Words(props) {
    function changeWord(el) {
        props.changeFlagInputArea(true);
        props.changeDefaultInputValues({id: el.id, word: el.word, translate: el.translate})
    }

    function deleteWord(el) {
        props.deleteWord(props.user.email, el.id)
    }

    return(
        <Table className='table' bordered hover >
                <thead>
                <tr key={123}>
                    <th className='word'>Слово</th>
                    <th className='word'>Перевод</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
            <tbody>
                {props.vocabulary.map(el => {
                    // kill the automatically generated empty document by firebase
                    if(el.word) {
                        return(
                            <tr key={el.id}>
                                <td className='word'>{el.word}</td>
                                <td className='word'>{el.translate}</td>
                                <td onClick={() => changeWord(el)} className='btn_cell'>
                                    <div className='img_container'>
                                        <img className='change_btn' alt='change img' src='/vocabulary/img/change.png'/>
                                    </div>
                                </td>
                                <td onClick={() => deleteWord(el)} className='btn_cell'>
                                    <div className='img_container'>
                                        <img className='delete_btn' alt='delete img' src='/vocabulary/img/delete.png'/>
                                    </div>
                                </td>
                            </tr>
                        )
                    } else return <div></div>
                }
            )}
            </tbody>
        </Table>
    )
}

const mapStateToProps = (state) => ({
    vocabulary: state.vocabulary,
    user: state.user
});

const mapDispatchToProps = (dispatch) =>  ({
    changeWord: (user, id, word) => {dispatch({type: "CHANGE_WORD",user: user, id: id, word: word})},
    deleteWord: (user, id) => {dispatch({type: "DELETE_WORD",user: user, id: id})}
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Words));

export default (state = [], action) => {
    switch (action.type) {
        case 'SET_VOCABULARY':
            return action.vocabulary;
        case 'SUCCESS_SET_WORD':
            return [action.word, ...state];
        case 'SUCCESS_CHANGE_WORD':
            return state.map(el => {
                if(el.id === action.id) {
                    el.word = action.word;
                    el.translate = action.translate;
                    return el;
                } else {
                    return el;
                }
            })
        case 'SUCCESS_DELETE_WORD':
            return state.filter(el => el.id !== action.id)
        default:
            return state;
    }
};
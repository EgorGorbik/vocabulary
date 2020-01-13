export const setVocabulary = (vocabulary) => ({type: 'SET_VOCABULARY', vocabulary: vocabulary});
export const setWord = (word) => ({type: 'SUCCESS_SET_WORD', word: word});
export const changeWordSuccess = (word) => ({type: 'SUCCESS_CHANGE_WORD', id: word.id, word: word.word, translate: word.translate});
export const deleteWordSuccess = (id) => ({type: 'SUCCESS_DELETE_WORD', id: id});
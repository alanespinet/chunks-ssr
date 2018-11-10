import { combineReducers } from 'redux';
import chunksReducer from './chunksReducer';

export default combineReducers({
  chunks: chunksReducer
});

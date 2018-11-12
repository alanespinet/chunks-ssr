import {
  FETCH_CHUNKS,
  ADD_CHUNK
} from '../actions';

export default ( state = [], action ) => {
  switch( action.type ){
    case FETCH_CHUNKS:
      return action.payload;

    case ADD_CHUNK:
      return [...state, action.payload];

    default:
      return state;
  }
}

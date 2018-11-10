import { FETCH_CHUNKS } from '../actions';

export default ( state = [], action ) => {
  switch( action.type ){
    case FETCH_CHUNKS:
      return action.payload;

    default:
      return state;
  }
}

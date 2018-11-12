import axios from 'axios';

export const FETCH_CHUNKS = 'fetch_chunks';
export const ADD_CHUNK = 'add_chunk';

export const fetchChunks = () => {
  return dispatch => {
    return axios.get('http://localhost:7200/chunks')
      .then( res => {
        dispatch({
          type: FETCH_CHUNKS,
          payload: res.data
        });
      });
  };
};

export const addChunk = (chunk) => {
  return dispatch => {
    return axios.post('http://localhost:7200/chunks', chunk)
      .then( res => {
        dispatch({
          type: ADD_CHUNK,
          payload: chunk
        });
      });
  };
}

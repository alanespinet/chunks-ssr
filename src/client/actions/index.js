import axios from 'axios';

export const FETCH_CHUNKS = 'fetch_chunks';

export const fetchChunks = () => {
  return dispatch => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
      .then( res => {
        dispatch({
          type: FETCH_CHUNKS,
          payload: res.data
        });
      });
  };
};

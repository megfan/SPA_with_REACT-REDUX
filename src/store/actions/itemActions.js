import axios from 'axios';

export const searchResult = search => async dispatch => {
  console.log(search);
  const response = await axios.get(`https://images-api.nasa.gov/search?q=${search}`);
  console.log(response);
  dispatch({
    type: 'SEARCH_RESULT',
    payload: response.data.collection.items
  });
   
};


import axios from 'axios';

export const searchResult = search => async dispatch => {
  const response = await axios.get(`https://images-api.nasa.gov/search?q=${search}&media_type=image`);
  dispatch({
    type: 'SEARCH_RESULT',
    payload: response.data.collection.items.slice(0,60)
  })
};


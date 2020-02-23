
import { CHANGE_SEARCH_FIELD,
        REQUEST_STARS_PENDING,
        REQUEST_STARS_SUCCESS,
        REQUEST_STARS_FAILED
     } from "./constants";

const STARS_API_URL = 'http://localhost:3001/api/stars';

// action
export const setSearchField = text => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestStars = () => (dispatch) => {
    dispatch({ type: REQUEST_STARS_PENDING });
    fetch(STARS_API_URL)
        .then(res => res.json())
        .then(data => dispatch({ type: REQUEST_STARS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_STARS_FAILED, payload: error }))
}
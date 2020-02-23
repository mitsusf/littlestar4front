import {
    CHANGE_SEARCH_FIELD,
    REQUEST_STARS_PENDING,
    REQUEST_STARS_SUCCESS,
    REQUEST_STARS_FAILED
} from './constants.js'

const initialStateSearch = {
    searchField: ""
};

const initialStateStars = {
    isPending: false,
    stars: [],
    error: ''
};

export const searchStars = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
};

export const requestStars = (state = initialStateStars, action = {}) => {
    switch (action.type) {
        case REQUEST_STARS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_STARS_SUCCESS:
            return Object.assign({}, state, { stars: action.payload, isPending: false });
        case REQUEST_STARS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;   // always return state by default
    }
};
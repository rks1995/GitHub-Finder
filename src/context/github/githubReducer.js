import {
    SEARCH_USER,
    GET_USER,
    CLEAR_USER,
    SET_LOADING,
    GET_REPOS
} from '../types'

const GithubReducer = (state, action) => {
    switch (action.type) {
        case SEARCH_USER:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case CLEAR_USER:
            return {
                ...state,
                users: [],
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default GithubReducer

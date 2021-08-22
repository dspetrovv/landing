import {FETCH_NEWS} from "./actionTypes";
import {combineReducers} from "redux";

const initialState = {fetchedNews: [{isLoaded: false}]}

export default function newsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_NEWS:
            return {
                ...state,
                fetchedNews: action.payload
            }
        default:
            return state
    }
}

export const rootReducer = combineReducers({news: newsReducer})
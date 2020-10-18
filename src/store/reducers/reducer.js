import * as ActionTypes from '../actions/ActionTypes'
import { updateObject } from '../utility';


const initialState = {
    token: null,
    error: null,
    isAuthenticated: false
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}


export default Reducer;
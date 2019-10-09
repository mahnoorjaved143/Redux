
import ActionTypes from '../constant/constant';

export function incrementCount() {
    return dispatch => {
        dispatch({ type: ActionTypes.INCREMENT })
    }
}

export function decrementCount(recpUID) {
    return dispatch => {
        dispatch({type: ActionTypes.DECREMENT})
    }
}


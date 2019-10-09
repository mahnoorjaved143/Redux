import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    count: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return ({     
                count: state.count + 1
            })
        case ActionTypes.DECREMENT:
            return ({   
                count: state.count - 1
            })  
        default:
            return state;
    }

}
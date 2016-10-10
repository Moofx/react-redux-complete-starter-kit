import ActionTypeConstants from "../constants/ActionTypeConstants.jsx";

export default function testReducer(state = [], action) {
    switch(action.type) {
        case ActionTypeConstants.CREATE_OBJECT:
            return [...state, Object.assign({}, action.obj)];

        default:
            return state;
    }
}

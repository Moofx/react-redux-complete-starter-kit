import ActionTypeConstants from "../constants/ActionTypeConstants.jsx";

export function createObject(obj) {
    return { type: ActionTypeConstants.CREATE_OBJECT, obj };
}

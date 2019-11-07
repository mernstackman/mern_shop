import produce from "immer";
import * as Actions from "../../actions";

const initialState = {
    open: false,
};

/* eslint-disable default-case, no-param-reassign */
const authDisplayReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case Actions.SHOW_AUTH:
                draft.open = true;
                break;
        }
    });
export default authDisplayReducer;

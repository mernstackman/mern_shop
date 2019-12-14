import produce from "immer";
import * as Actions from "../../actions";

const initialState = {
    result: {},
    isLoading: false,
    error: null,
};

/* eslint-disable default-case, no-param-reassign */
const registrationReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case Actions.REGISTER_USER:
                draft.isLoading = true;
                draft.error = null;
                break;

            case Actions.REGISTER_USER_SUCCESS:
                draft.result = action.payload;
                draft.isLoading = false;
                draft.error = null;
                break;

            case Actions.REGISTER_USER_ERROR:
                draft.isLoading = false;
                draft.error = action.payload;
        }
    });

export default registrationReducer;

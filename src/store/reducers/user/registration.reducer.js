import produce from "immer";
import * as Actions from "../../actions";

const initialState = {
    data: {},
    isLoading: false,
    error: false,
};

/* eslint-disable default-case, no-param-reassign */
const registrationReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case Actions.REGISTER_USER:
                draft.isLoading = true;
                draft.error = false;
                break;

            case Actions.REGISTER_USER_SUCCESS:
                draft.data = action.payload;
                draft.isLoading = false;
                draft.error = false;
                break;

            case Actions.REGISTER_USER_ERROR:
                draft.isLoading = false;
                draft.error = true;
        }
    });

export default registrationReducer;

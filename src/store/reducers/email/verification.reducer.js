import produce from "immer";
import * as Actions from "../../actions";

const initialState = {
    data: {},
    isLoading: false,
    error: null,
};

/* eslint-disable default-case, no-param-reassign */
const verificatioReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case Actions.SEND_VERIFICATION:
                draft.isLoading = true;
                draft.error = null;
                break;

            case Actions.SEND_VERIFICATION_SUCCESS:
                draft.data = action.payload;
                draft.isLoading = false;
                draft.error = null;
                break;

            case Actions.SEND_VERIFICATION_ERROR:
                draft.isLoading = false;
                draft.error = action.payload;
        }
    });

export default verificatioReducer;

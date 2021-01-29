import { GET_CLASSIFIEDS, CLASSIFIEDS_ERROR } from '../types';

const InitialState = {
    classifieds: [],
    loading: true
};

export default function reducer(state = InitialState, action) {
    
    switch(action.type) {
        case GET_CLASSIFIEDS:
            return {
                ...state,
                classifieds: action.payload,
                loading: false
            }

        case CLASSIFIEDS_ERROR:
            return {
                loading: false,
                error: action.payload
            }    

        default: return state;
    }
}
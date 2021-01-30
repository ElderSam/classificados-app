import { GET_CLASSIFIEDS, CLASSIFIEDS_ERROR } from '../types';
/* create all our actions like here it’s creating an action to fetch data from the API using the Axios library */

import api from './../../services/api';

export const getClassifieds = () => async dispatch => {
    
    try {
        const res = await api.get('/classifieds');
        dispatch({
            type: GET_CLASSIFIEDS,
            payload: res.data
        })
    }
    catch(error) {
        dispatch({
            type: CLASSIFIEDS_ERROR,
            payload: error,
        })
    }
}
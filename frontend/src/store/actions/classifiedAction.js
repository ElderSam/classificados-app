import { GET_CLASSIFIEDS, CLASSIFIEDS_ERROR } from '../types';
/* create all our actions like here it’s creating an action to fetch data from the API using the Axios library */

import axios from 'axios';

export const getClassifieds = () => async dispatch => {
    
    try {
        const res = await axios.get('/classifieds');
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
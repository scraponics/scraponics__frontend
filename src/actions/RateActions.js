import * as RateApi from '../api/RateRequests';

export const rateDataFetch = () => async (dispatch) => {
    
    dispatch({ type: "RATE_START" })
    try {
        const { data } = await RateApi.rateDataFetch();
        dispatch({ type: "RATE_SUCCESS", data: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: "RATE_FAIL" })
    }
}
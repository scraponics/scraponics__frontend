import * as AuthApi from '../api/AuthRequests';

export const logininduser = (userDetails, navigate) => async (dispatch) => {

    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.logininduser(userDetails);
        dispatch({ type: "AUTH_SUCCESS", data: data });
        navigate("../dashboarduser", { replace: true });
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL" })
    }
}

export const signupinduser = (userDetails) => async (dispatch) => {
    
    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.signupinduser(userDetails);
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL" })
    }
}

export const loginorg = (userDetails, navigate) => async (dispatch) => {

    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.loginorg(userDetails);
        dispatch({ type: "AUTH_SUCCESS", data: data });
        navigate("../dashboarduser", { replace: true });
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL" })
    }
}

export const signuporg = (userDetails) => async (dispatch) => {
    
    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.signuporg(userDetails);
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL" })
    }
}


export const loginvendor = (userDetails, navigate) => async (dispatch) => {

    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.loginvendor(userDetails);
        dispatch({ type: "AUTH_SUCCESS", data: data });
        navigate("../dashboardvendor", { replace: true });
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL" })
    }
}

export const signupvendor = (userDetails) => async (dispatch) => {
    
    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.signupvendor(userDetails);
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL" })
    }
}
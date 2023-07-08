// here we will store every data related to rate

const rateReducer = (state = { rateData: null, loading: false, error: false }, action) => {
    switch (action.type) {
        case "RATE_START":
            return { ...state, loading: true, error: false }
        case "RATE_SUCCESS":
            // storing the data into localStorage
            // localStorage.setItem("rateData", JSON.stringify({ ...action?.data }))
            return { ...state, rateData: action.data, loading: false, error: false }
        case "RATE_FAIL":
            return { ...state, loading: false, error: true }
        default:
            return state;
    }
};

export default rateReducer;
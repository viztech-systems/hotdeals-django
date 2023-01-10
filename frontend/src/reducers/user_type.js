const initialState = "";

export const userReducer = (state = initialState, action) => {
    if(action.type === "USER") {
        return action.payload;
    }
    return state;
}

export const adminReducer = (state = initialState, action) => {
    if(action.type === "ADMIN") {
        return action.payload;
    }
    return state;
}

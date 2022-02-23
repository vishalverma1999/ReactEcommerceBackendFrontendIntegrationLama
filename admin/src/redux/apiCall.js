import { loginFailure, loginStart, loginSuccess } from "./userSlice"
import { publicRequest } from "../requestMethod";


export const login = async (dispatch, userInfo) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", userInfo)
        dispatch(loginSuccess(res.data));
    }
    catch (error) {
        dispatch(loginFailure());
    }
}
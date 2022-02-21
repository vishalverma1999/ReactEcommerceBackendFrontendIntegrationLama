import { loginFailure, loginStart, loginSuccess } from "./userSlice"
import axios from 'axios';


export const login = async (dispatch, userInfo) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:5000/api/auth/login", userInfo)
        dispatch(loginSuccess(res.data));
    }
    catch (error) {
        dispatch(loginFailure());
    }
}
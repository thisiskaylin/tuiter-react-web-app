import {createSlice} from "@reduxjs/toolkit";
import profileArray from "../profile/users.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profileArray,

    reducers: {
        editProfile: (state, action) => {
            return action.payload;
        }
    }
});
export const{editProfile} = profileSlice.actions;
export default profileSlice.reducer;
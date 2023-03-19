import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,

    reducers: {
        likeTuit: (state, action) => {
            const tuit = state.findIndex(tuit => tuit._id === action.payload)
            if (tuit) {
                if (tuit.liked === true) {
                    tuit.liked = false;
                    tuit.stats.likes--;
                } else {
                    tuit.liked = true;
                    tuit.stats.likes++;
                }
            }
        }
    }
});

export const {likeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
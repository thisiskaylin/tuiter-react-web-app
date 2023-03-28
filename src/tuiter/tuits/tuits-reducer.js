import { createSlice } from "@reduxjs/toolkit";
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk} from "../../services/tuits-thunks";

const currentUser = {
    "username": "NASA",
    "handle": "nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "title": "SpaceX's Mission",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "disliked": false,
    "dislikes": 0
}

const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                // const tuit = {...templateTuit,
                //     _id: (new Date()).getTime(),
                //     ...payload}
                // console.log(payload)
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuit = {...templateTuit,
                    _id: (new Date()).getTime(),
                    ...payload}
                state.tuits.push(tuit)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            },
    },
    reducers: {
        // createTuit(state, action) {
        //     state.unshift({
        //         ...action.payload,
        //         ...templateTuit,
        //         _id: (new Date()).getTime(),
        //     })
        // },
        // deleteTuit(state, action) {
        //     const index = state
        //         .findIndex(tuit =>
        //             tuit._id === action.payload);
        //     state.splice(index, 1);
        // },
        // likeTuit(state, action) {
        //         const tuit = state.find(tuit => tuit._id === action.payload)
        //         if (tuit) {
        //             if (tuit.liked === true) {
        //                 tuit.liked = false;
        //                 tuit.likes--;
        //             } else {
        //                 tuit.liked = true;
        //                 tuit.likes++;
        //             }
        //         }
        //     }
        }
});

export const {likeTuit, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
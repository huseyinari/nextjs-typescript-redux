import { createSlice, createAsyncThunk, ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import Post from "@/src/models/Post";
import { getFirstPopularPost as getFirstPopularPostService, getSecondPopularPost as getSecondPopularPostService } from "../../services/PostService";
import { RootState } from "../store";

interface IPostStore {
    firstPopularPost: Post | null;
    secondPopularPost: Post | null;
}

const initialState: IPostStore = {
    firstPopularPost: null,
    secondPopularPost: null
}

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        reset: () => initialState,
        // exampleAction: (state: IPostStore, action: PayloadAction<string>) => {
        //     if (state.firstPopularPost)
        //         state.firstPopularPost.title = action.payload;
        // }
    },
    extraReducers: (builder: ActionReducerMapBuilder<IPostStore>) => {
        // builder.addCase(getFirstPopularPost.pending, (state, action) => {})
        // builder.addCase(getFirstPopularPost.rejected, (state, action) => {})
        builder.addCase(getFirstPopularPost.fulfilled, (state, action) => {
            state.firstPopularPost = action.payload;
        })
        builder.addCase(getSecondPopularPost.fulfilled, (state, action) => {
            state.secondPopularPost = action.payload;
        })
    }
});

// actions
export const getFirstPopularPost = createAsyncThunk("postReducer/getFirstPopularPostAction", getFirstPopularPostService);
export const getSecondPopularPost = createAsyncThunk("postReducer/getSecondPopularPost", getSecondPopularPostService);
export const { reset } = postSlice.actions;

// selectors
export const selectFirstPopularPost = (state: RootState) => state.postReducer.firstPopularPost;
export const selectSecondPopularPost = (state: RootState) => state.postReducer.secondPopularPost;
//  => tek objede tüm state'i de dönebiliriz.

// reducer
export default postSlice.reducer;
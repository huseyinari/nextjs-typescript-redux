// redux
import { createSlice, createAsyncThunk, ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
// models
import Post from "@/src/models/Post";
// services
import { 
    getFirstPopularPost as getFirstPopularPostService, 
    getSecondPopularPost as getSecondPopularPostService,
    getPosts as getAllPostsService
} from "../../services/PostService";

interface IPostState {
    allPosts: Array<Post>;
    firstPopularPost: Post | null;
    secondPopularPost: Post | null;
    saveSuccess: boolean;
}

const initialState: IPostState = {
    allPosts: [],
    firstPopularPost: null,
    secondPopularPost: null,
    saveSuccess: false
}

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        reset: () => initialState,
        addPost: (state, action: PayloadAction<Post>) => {
            state.allPosts = [...state.allPosts, action.payload];
            state.saveSuccess = true;
        },
        clearSuccess: (state) => {
            state.saveSuccess = false
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<IPostState>) => {
        // builder.addCase(getAllPosts.pending, (state, action) => {})
        // builder.addCase(getAllPosts.rejected, (state, action) => {})
        builder.addCase(getAllPosts.fulfilled, (state, action: PayloadAction<Array<Post>>) => {
            state.allPosts = action.payload;
        })
        builder.addCase(getFirstPopularPost.fulfilled, (state, action: PayloadAction<Post>) => {
            state.firstPopularPost = action.payload;
        })
        builder.addCase(getSecondPopularPost.fulfilled, (state, action: PayloadAction<Post>) => {
            state.secondPopularPost = action.payload;
        })
    }
});

// actions
export const getAllPosts = createAsyncThunk("postReducer/getAllPosts", async (limit?: number) => { 
    const posts = await getAllPostsService(limit);
    return posts;
});
export const getFirstPopularPost = createAsyncThunk("postReducer/getFirstPopularPostAction", getFirstPopularPostService);
export const getSecondPopularPost = createAsyncThunk("postReducer/getSecondPopularPost", getSecondPopularPostService);
export const { reset, addPost, clearSuccess } = postSlice.actions;


// selectors
export const selectFirstPopularPost = (state: RootState) => state.postReducer.firstPopularPost;
export const selectSecondPopularPost = (state: RootState) => state.postReducer.secondPopularPost;
//  => tek objede tüm state'i de dönebiliriz.
export const getPostState = (state: RootState) => {
    const { allPosts, firstPopularPost, secondPopularPost, saveSuccess } = state.postReducer;
    return {
        allPosts,
        firstPopularPost,
        secondPopularPost,
        saveSuccess
    }
}


// reducer
export default postSlice.reducer;
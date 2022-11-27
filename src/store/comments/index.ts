import { postAPI } from "../../api";
import {createSlice, createAsyncThunk, createEntityAdapter, } from "@reduxjs/toolkit";
import { IComment } from "../../types/data";



export const fetchComments= createAsyncThunk<IComment[], number>(
    "comments/fetchComments",
    async function (id, thunkAPI) {  
        const response = await postAPI.getPostComments(id)
        const data = await response.data
        return data
    }
)
type CommentsState={
    comments: IComment[]
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: <CommentsState> {
        comments:[]
    },
    reducers:{

      },
    extraReducers: (builder) =>
        builder
        .addCase(fetchComments.fulfilled, (state, action)=>{
            state.comments = [...state.comments, ...action.payload]
        })
})

import { IPost } from './../../types/data';
import { postAPI } from "../../api";
import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchPosts= createAsyncThunk<IPost[], undefined>(
    "posts/fetchPosts",
    async function (_, thunkAPI) {  
        const response = await postAPI.getPosts()
        const data = await response.data
        return data
    }
)
export const deletePost= createAsyncThunk<number, number>(
    "posts/deletePosts",
    async function (id, thunkAPI) {  
        const response = await postAPI.deletePost(id)
        return id
    }
)

export const addPost= createAsyncThunk<IPost, IPost>(
    "posts/addPosts",
    async function ({title, body, userId, id}) {  
        const response = await postAPI.addPost(title, body, userId, id)
        const data = await response.data
        return data
    }
)

export const changePost= createAsyncThunk<IPost, IPost>(
    "posts/changePosts",
    async function ({title, body, userId, id}, thunkAPI) {  
        const response = await postAPI.changePost(title, body, userId, id)
        const data = await response.data
        return data
    }
)


type PostsState = {
    posts: IPost[],
    status: string | null
}

const initialState: PostsState={
    posts: [],
    status: null
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{

    },
    extraReducers: (builder) =>
        builder
        .addCase(fetchPosts.fulfilled, (state, action)=>{
            state.posts = action.payload;
        })
        .addCase(deletePost.fulfilled, (state, action)=>{
            console.log('delete')
            state.posts= state.posts.filter(post=>post.id !== action.payload)
        })
        .addCase(addPost.fulfilled, (state, action)=>{
            state.posts.unshift(action.payload);
        })
        .addCase(changePost.fulfilled, (state, action)=>{
            state.posts = state.posts.map(post => {
                if (post.id === action.payload.id){
                    return action.payload;
                }

                return post;
            })
        })
})

export default postsSlice.reducer

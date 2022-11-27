import { ITodo } from './../../types/data';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { todosAPI } from "../../api"

type TodoState={
    todos: ITodo[];
    status: null | string
}

export const fetchTodos= createAsyncThunk<ITodo[] , undefined>(
    "todos/fetchTodos",
    async function (_, thunkAPI) { 
        const response = await todosAPI.getTodos()
        const data = await response.data
        return data
    }
)

export const todosSlice = createSlice({
    name: 'todos',
    initialState:<TodoState> {
        todos: [],
        status: null
    },
    reducers: {

    },
    extraReducers: (builder) =>
        builder
        .addCase(fetchTodos.pending, (state)=>{
            state.status = 'loading';
        })
        .addCase(fetchTodos.fulfilled, (state, action)=>{
            state.todos = action.payload;
            state.status = 'resolved';
        })
        .addCase(fetchTodos.rejected, (state)=>{
            state.status = 'rejected';
        })
        
})

export default todosSlice.reducer
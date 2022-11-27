import { combineReducers} from "redux";
import postsReducer from "./posts";

import { configureStore } from "@reduxjs/toolkit";
import { commentsSlice } from "./comments";
import { photoSlice } from "./photo";
import {todosSlice} from "./todos"

const rootReducer = combineReducers({
    postsReducer: postsReducer,
    commentsReducer: commentsSlice.reducer,
    photoReducer: photoSlice.reducer,
    todosReucer: todosSlice.reducer
  });

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
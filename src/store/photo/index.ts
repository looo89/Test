
import { IPhoto } from './../../types/data';

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { albumAPI } from "../../api";


type album ={
    albumId: number;
    photos: IPhoto[]
} 

type PhotoState={
    albums: album[];
    itemsCount: number;
    albumsCount: number;
    status: string | null
}


type fetchPhotosResponseType={
    albumId: number;
    photos: IPhoto[]
}
export const fetchPhotos= createAsyncThunk<fetchPhotosResponseType, number>(
    "photo/fetchPhotos",
    async function (id) {  
        const response = await albumAPI.getPhotoByAlbumId(id)
        const data = await response.data
        return {albumId: id, photos: data}
    }
)
export const photoSlice = createSlice({
    name: 'photo',
    initialState:<PhotoState> {
        albums: [],
        itemsCount: 4,
        albumsCount: 4,
        status: null
    },
    reducers :{
        changeAlbumsCount : (state)=>{
            state.albumsCount += state.itemsCount
        }
    },
    extraReducers: (builder) =>
        builder
        .addCase(fetchPhotos.pending, (state)=>{
            state.status = 'loading';
        })
        .addCase(fetchPhotos.fulfilled, (state, action)=>{
            state.albums.push(action.payload)
            state.status = 'resolved';
        })
        .addCase(fetchPhotos.rejected, (state)=>{
            state.status = 'rejected';
        })

})


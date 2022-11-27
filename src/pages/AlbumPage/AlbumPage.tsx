
import _ from "lodash"
import {useState, useEffect } from 'react'
import Slider from "../../components/Slider/Slider";
import { useAppDispatch, useAppSelector } from "../../hook";
import { fetchPhotos, photoSlice } from "../../store/photo";
import styles from "./styles.module.css"



const AlbumPage: React.FC =()=> {
  const [idAlbum, setIdAlbum]= useState(1)

  const dispatch = useAppDispatch()
  const albums = useAppSelector(state=> state.photoReducer.albums)
  const albumsCount=useAppSelector(state=>state.photoReducer.albumsCount)
  

  useEffect(()=>{
    if(albums.length<albumsCount){
      dispatch(fetchPhotos(idAlbum))
      .then(()=>{ setIdAlbum(idAlbum+1)
    })
    } 

  },[idAlbum, albumsCount]) 

  useEffect(()=>{
    const scrollHandler=(e: any)=>{
      if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)<200
        && albums.length<100){
        dispatch(photoSlice.actions.changeAlbumsCount())
      }  
    }
    document.addEventListener('scroll', _.debounce(scrollHandler, 200))
    return function(){
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <div className={styles.root}>
      {
        albums.map((album, index)=>
          <div className={styles.container}
            key={album.albumId}>
            <div className={styles.description}>Номер альбома: {index+1}</div>
            <Slider key={album.albumId} photos={album.photos}/>
          </div>
          
        )
      }
      
    </div>
  );

}
  
export default AlbumPage;
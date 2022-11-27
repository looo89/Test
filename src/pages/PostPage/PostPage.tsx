import React, {useState} from "react"

import {useEffect} from "react"
import { addPost, fetchPosts } from "../../store/posts";
import { useAppDispatch, useAppSelector } from "../../hook";
import PostItem from "../../components/PostItem/PostItem";
import styles from "./styles.module.css"


const PostPage: React.FC=()=> {
  
  const dispatch = useAppDispatch();
  const  posts = useAppSelector(state=>state.postsReducer.posts)

  
  useEffect(() => {
    dispatch((fetchPosts()));
  }, []);

  const [title, setTitle] =useState('')
  const [body, setBody] = useState('')

  const addNewPost=(e: any)=>{
    e.preventDefault()
    dispatch(addPost( {title, body, id: 111, userId: 1}))
    setTitle('')
    setBody('')
  }


  return (
    <div>
      <form className={styles.form}>
        <input 
        className={styles.input}
          value={title}
          onChange={e=>setTitle(e.target.value)}
          type="text" 
          placeholder="Название поста"
        />
        <input 
          className={styles.input}
          value={body}
          onChange={e=>setBody(e.target.value)}
          type="text" 
          placeholder="Описание поста"
        />
        <button 
          onClick={addNewPost}
          className={styles.button}
        >
          Создать пост
        </button>

      </form>
      {posts.map(item=>
          <PostItem key={item.id}  post={item}/>
        )}
    </div>
  );
}

export default PostPage

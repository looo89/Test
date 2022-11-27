import{useState} from "react"
import { useAppDispatch } from '../../hook';
import { addPost, deletePost } from '../../store/posts';
import { IPost } from '../../types/data';
import Comments from '../Comments/Comments';

import styles from "./styles.module.css";

interface PostItem {
  post: IPost;
}

const PostItem: React.FC<PostItem> = ({ post }) => {
  const {id, title, body} = post
  const dispatch = useAppDispatch()
  const clickDeletePost=(id: number)=>{
    dispatch(deletePost(id))

  }


    return (
      <div className={styles.root}>
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>{title}</div>
        <button 
          className={styles.button}
          onClick={()=>clickDeletePost(id)}>delete post
        </button>
        </div>
        <div className={styles.body}>{body}</div>
      
        <Comments key={id} postId={id}/> 
      </div>
    );
};

export default PostItem
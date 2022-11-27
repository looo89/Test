
import React from "react";
import {useState} from "react"
import { useAppDispatch, useAppSelector } from "../../hook";
import { fetchComments } from "../../store/comments";
import {CommentItem} from "../CommentItem/CommentItem";
import styles from "./styles.module.css"


type CommentsProps = {
  postId: number;
};

const Comments: React.FC<CommentsProps> =({postId})=> {
  const dispatch = useAppDispatch()

  const comments = useAppSelector(state=>state.commentsReducer.comments)
  const targetComments = comments.filter((comment)=>comment.postId===postId)

  const [isShowComments, setIsShowComments] = useState(false)
  
  const onClickFetchComments =(postId: number)=>{
    dispatch(fetchComments(postId))
    setIsShowComments(!isShowComments)
  }

  
    return (
      <div className={styles.root}> 
        <button
          onClick={()=>onClickFetchComments(postId)}
        >
          {isShowComments 
            ? <span>close Comments</span> 
            : <span>show Comments</span>
          }
        </button>
       
        
        <div>
        {   isShowComments &&
            targetComments.map(comment=> <CommentItem key={comment?.id} comment={comment}/> )
        }
        </div>
        
      </div>
    );
  };

  export default Comments
  
import React from "react"
import { IComment } from "../../types/data";

import styles from "./styles.module.css"

interface CommentItem{
  comment: IComment
}
const CommentItem: React.FC<CommentItem> = ({comment}) => {
    return (
      <div className={styles.root}>
            <div className={styles.description}>name: {comment.name}</div>
            <div className={styles.body}>{comment.body}</div>
      </div>
    );
  };

  export {CommentItem}
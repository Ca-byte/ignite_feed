import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { CommentsProps } from './Post';


export interface CommentProps {
  comment: CommentsProps;
    onDeleteComment: (id: number) => void;
}

export function Comment({ comment, onDeleteComment } : CommentProps){

  const [likeCount, setLikeCount] = useState(0)

function handleDeleteComment(id: number){
  onDeleteComment(id)
}

function handleLikeComment(){
  setLikeCount((state) => {
    return state + 1
  });

}

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={comment.avatarUrl}/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{comment.userName}</strong>
              <time title={comment.publishedAt?.toString()} dateTime={comment.publishedAt?.toString()}>{comment.publishedAt?.toString()}</time>
            </div>
              <button onClick={() => handleDeleteComment(comment.id)} title="Delete comment">
                <Trash size={24}/>
              </button>
          </header>
          <p>{comment.comment}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Applaud <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
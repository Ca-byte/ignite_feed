import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }){

  const [likeCount, setLikeCount] = useState(0)

function handleDeleteComment(){
  onDeleteComment(content)
}

function handleLikeComment(){
  setLikeCount((state) => {
    return state + 2
  });

}

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/andrelinos.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Andrelino Silva</strong>
              <time title= "July 13 at 10:15am" dateTime='2022-07-13 10:15:50'>Published 1h ago</time>
            </div>
              <button onClick={handleDeleteComment} title="Delete comment">
                <Trash size={24}/>
              </button>
          </header>
          <p>{content}</p>
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
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }){

function handleDeleteComment(){
  onDeleteComment(content)
}

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Ca-byte.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luiza Trentini</strong>
              <time title= "July 13 at 10:15am" dateTime='2022-07-13 10:15:50'>Published 1h ago</time>
            </div>
              <button onClick={handleDeleteComment} title="Delete comment">
                <Trash size={24}/>
              </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Applaud <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
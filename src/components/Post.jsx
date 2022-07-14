import { format, formatDistanceToNow } from 'date-fns'
import { LineSegment } from 'phosphor-react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'



export function Post({ author, content, publishedAt}){
  const publishedDateFormatted = format(publishedAt, "LLLL d',' 'at' HH:mm")
  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  })

  return(
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar 
              src={author.avatarUrl}
            />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
          <time title= {publishedDateFormatted} dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeNow}
          </time>
        </header>
        <div className={styles.content}>
          {
            content.map(item => {
              if(item.type === 'paragraph'){
                return <p>{item.content}</p>
              } else if(item.type === 'link'){
                return <p><a href='https://github.com/Ca-byte/event_platform_ignite_lab'>{item.content}</a></p>
              }
            })
          }
        </div>
        <form className={styles.commentForm}>
          <textarea
          placeholder='Add a comment'
          />
          <footer>
            <button type="submit">Post</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
  )
}
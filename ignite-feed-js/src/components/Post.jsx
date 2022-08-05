import { format, formatDistanceToNow } from 'date-fns'
import { LineSegment } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'



export function Post({ author, content, publishedAt}){
const [comments, setComments ] = useState([
  'Very good Carol, Congrats!! 👏👏'
])

const [newComment, setNewComment] = useState('')


  const publishedDateFormatted = format(publishedAt, "LLLL d',' 'at' HH:mm")
  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  })

  function handleCreateNewComment(){
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewComment(){
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  }

  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Very polite comment required!');

  }

  function deleteComment(commentTodelete){
    const commentsWithoutDeleteOne = comments.filter(comment =>{
      return comment !== commentTodelete;
    })
    setComments(commentsWithoutDeleteOne);
    
  }

  const isCommentEmpty = newComment.length === 0;

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
                return <p key={item.content}>{item.content}</p>
              } else if(item.type === 'link'){
                return <p key={item.content}><a href='https://github.com/Ca-byte/event_platform_ignite_lab'>{item.content}</a></p>
              }
            })
          }
        </div>
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <textarea
          value={newComment}
            onChange={handleNewComment}
            placeholder='Add a comment'
            onInvalid={handleNewCommentInvalid}
            required
          />
          <footer>
            <button type="submit" disabled={isCommentEmpty}>Post</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          {
            comments.map(comment => {
              return(
                <Comment 
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
                />
              )
            })
          }
        </div>
      </article>
  )
}
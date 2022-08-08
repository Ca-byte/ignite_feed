import { format, formatDistanceToNow } from 'date-fns'
import { LineSegment } from 'phosphor-react'
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

/* interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: string;
  content: string;
  href: string;
}

interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: Date;

} */

export interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

export interface Content {
  type: string;
  content: string;
  href?: string;
}

export interface PostProps {
  id?: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}


export function Post({ author, content, publishedAt} : PostProps){
const [comments, setComments ] = useState([''])

const [newComment, setNewComment] = useState('')

console.log(content)


  const publishedDateFormatted = format(publishedAt, "LLLL d',' 'at' HH:mm")
  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent){
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewComment(event:ChangeEvent<HTMLTextAreaElement> ){
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Very polite comment required!');

  }

  function deleteComment(commentTodelete: string){
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
                return <p key={item.content}><a href={item.href}>{item.content}</a></p>
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
import { format, formatDistanceToNow } from 'date-fns';
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

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

export interface CommentsProps {
  id: number;
  userName: string;
  avatarUrl: string;
  comment: string;
  publishedAt: string;
}
export interface PostProps {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
  comments: CommentsProps[];
}
export interface CommentProps {
  content: string;

}

export function Post({ author, content,comments, publishedAt} : PostProps){
const [postComments, setPostComments ] = useState<CommentsProps[]>(comments);

const [newComment, setNewComment] = useState('')

  const publishedDateFormatted = format(publishedAt, "LLLL d',' 'at' HH:mm")
  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent){
    event.preventDefault();

    const commentData = {
      id: 969,
      userName: 'Caroline Vieira',
      avatarUrl: 'https://github.com/cabyte.png',
      comment: newComment,
      publishedAt: '',

    };

    setPostComments([...postComments, commentData]);
    setNewComment('');
  }

  function handleNewComment(event:ChangeEvent<HTMLTextAreaElement> ){
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Very polite comment required!');

  }

  function deleteComment(commentTodelete: number){
    const commentsWithoutDeleteOne = postComments.filter(comment =>{
      return commentTodelete !== comment.id;
    })
    setPostComments(commentsWithoutDeleteOne);
    
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
          {content?.length > 0 &&
            content.map((item) => {
                if (item.type === 'paragraph') {
                    return <p key={item.content}>{item.content}</p>;
                } else if (item.type === 'link') {
                    return (
                      <p key={item.content}>
                          <a target="_blank" href={item.href}>
                              {item.content}
                          </a>
                      </p>
                    );
                }
            })}
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
          {postComments?.map((comment) => {
            return (
                <Comment
                  key={comment.id}
                  comment={comment}
                  onDeleteComment={() => deleteComment(comment.id)}
                />
            );
          })}
            </div>
      </article>
  )
}
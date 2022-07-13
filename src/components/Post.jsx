import { Comment } from './Comment'
import styles from './Post.module.css'



export function Post(props){
  return(
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
              <img 
                className={styles.avatar}
                src={props.UserImage}
              />
              <div className={styles.authorInfo}>
                <strong>Caroline Vieira</strong>
                <span>Web Developer</span>
              </div>
          </div>
          <time title= "July 13 at 10:15am" dateTime='2022-07-13 10:15:50'>Published 1h ago</time>
        </header>
        <div className={styles.content}>
          <p>Hello People 👋</p>
          <p>I just pushed a new project to my GitHub. It's a project that created during a Ignite Lab, Rocketseat's event. Super cool is a Event platform 🚀</p>
          <p><a href='https://github.com/Ca-byte/event_platform_ignite_lab'>👉 {""} Events Platform Ignite Lab</a></p>
          <p>
            <a href=''>#newproject</a> {""}
            <a href=''>#ignitelab</a> {""}
            <a href=''>#rocketseat</a> {""}
          </p>
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
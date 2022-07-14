import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css"
import styles from "./App.module.css"


const posts = [
  {
    id: 1,
    author:{
      avatarUrl: "https://github.com/Ca-byte.png",
      name: "Caroline Vieira",
      role: "Frontend Developer"
    },
    content:[
      { type: 'paragraph', content: 'Hello People 👋'},
      { type: 'paragraph', content: 'I just pushed a new project to my GitHub.Its a project that created during a Ignite Lab, Rocketseats event. Super cool is a Event platform 🚀'},
      { type: 'link', content: 'Events Platform Ignite Lab'},
    ],
    publishedAt: new Date('2022-07-13 18:35:50'),
  },
  {
    id: 2,
    author:{
      avatarUrl: "https://github.com/arthurmfgtab.png",
      name: "Arthur Gonçalves",
      role: "Frontend Developer"
    },
    content:[
      { type: 'paragraph', content: 'Hello People 👋'},
      { type: 'paragraph', content: 'I just pushed a new project to my GitHub. Its a project that created during a Ignite Lab, Rocketseats event. Super cool is a Event platform 🚀'},
      { type: 'link', content: 'Events Platform Ignite Lab'},
    ],
    publishedAt: new Date('2022-07-14 18:35:50'),
  },
]
export function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        { posts.map(post => {
            return(
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              
            />
            )
        })}
      </main>

    </div>
    </>
    
  )
}



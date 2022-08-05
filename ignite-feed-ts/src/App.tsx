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
    publishedAt: new Date('2022-08-07 6:00:50'),
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
    publishedAt: new Date('2022-08-5 11:35:50'),
  },
  {
    id: 3,
    author:{
      avatarUrl: "https://github.com/andrelinos.png",
      name: "Andrelino Silva",
      role: "Desenvolvedor Fullstack Jr."
    },
    content:[
      { type: 'paragraph', content: 'Galeraaa'},
      { type: 'paragraph', content: 'Video novo no canal como manipular #Arrays no #ReactJS - Adicionando Itens ao Array #Aula 04'},
      { type: 'link', content: 'Como manipular arrays no ReactJS'},
    ],
    publishedAt: new Date('2022-08-04 18:35:50'),
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
                key={post.id}
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



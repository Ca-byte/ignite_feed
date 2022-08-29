import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css"
import styles from "./App.module.css"


const posts = [
  {
    id: 1,
    author:{
      avatarUrl: "https://github.com/arthurmfgtab.png",
      name: "Arthur Gonçalves",
      role: "Frontend Developer"
    },
    content:[
      { type: 'paragraph', content: 'Hey Gang 🤙'},
      { type: 'paragraph', content: 'My first VueJs project. A small news portal consuming The New York Times API. Check it out ☕'},
      { type: 'link',href:'https://github.com/arthurmfgtab/nyt-news-portal', content: 'The New York Times API VueJs project 📰'},
    ],
    publishedAt: new Date('2022-08-23 20:35:50'),
    comments: [
      {
          id: 4,
          avatarUrl: 'https://github.com/maykbrito.png',
          userName: 'Mayk Brito',
          comment: 'React js, Native and now Vue, you are always on fire! ​🔥​',
          publishedAt: new Date('2022-08-29 6:00:50'),
      },
      {
          id: 5,
          avatarUrl: 'https://github.com/Ca-byte.png',
          userName: 'Caroline Vieira',
          comment: 'The project looks great!​🤠​ ',
          publishedAt: new Date('2022-08-29 6:00:50'),
      },
  ],
  },
  {
    id: 2,
    author:{
      avatarUrl: "https://github.com/andrelinos.png",
      name: "Andrelino Silva",
      role: "Desenvolvedor Fullstack Jr."
    },
    content:[
      { type: 'paragraph', content: 'Galeraaa 🚨'},
      { type: 'paragraph', content: 'Video novo no canal como manipular #Arrays no #ReactJS - Adicionando Itens ao Array #Aula 04'},
      { type: 'paragraph', content: 'Fiz com muito carinho, espero que gostem e se gostarem me ajudem a divulgar o canal curta, se inscreva e compartilhe! Ah deixe suas sugestoẽs de tema para os próximos videos 🤓'},
      { type: 'link', href:'https://www.youtube.com/watch?v=Cle93rqmoFk&list=PLSJ2-sPHvt385azrRIg-F7DosYyyYn1cv', content: 'Como manipular arrays no ReactJS 🤯'},
    ],
    publishedAt: new Date('2022-08-23 19:35:50'),
    comments: [
      {
          id: 0,
          avatarUrl: 'https://github.com/Ca-byte.png',
          userName: 'Andrelino Silva',
          comment: 'Arrays são sempre uma dor de cabeça 😅​, Arrasou!',
          publishedAt: new Date('2022-08-26 6:00:50'),
      },
      {
          id: 1,
          avatarUrl: 'https://github.com/diego3g.png',
          userName: 'Diego Fernandes',
          comment: 'Fala Andrelino, mandou bemzão, hein! 👏👏',
          publishedAt: new Date('2022-08-27 6:00:50'),
      },
  ],
  },
  {
    id: 3,
    author:{
      avatarUrl: "https://github.com/Ca-byte.png",
      name: "Caroline Vieira",
      role: "Frontend Developer"
    },
    content:[
      { type: 'paragraph', content: 'Hello People 💜'},
      { type: 'paragraph', content: 'I just pushed a new project to my GitHub.Its a project that created during a Ignite Lab, Rocketseats event. Super cool is a Event platform 🚀'},
      { type: 'link', href:'https://github.com/Ca-byte/event_platform_ignite_lab', content: 'Events Platform Ignite Lab 👩‍💻'},
    ],
    publishedAt: new Date('2022-08-28 6:00:50'),
    comments: [
      {
          id: 0,
          avatarUrl: 'https://github.com/andrelinos.png',
          userName: 'Andrelino Silva',
          comment: 'GraphQL, CMS, apollo uauuu esse projeto ficou muito!',
          publishedAt: new Date('2022-08-28 6:00:50'),
      },
    ],
  },
];
  

console.log(JSON.stringify(posts, null, 2))

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => {
              return (
                <Post
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                    comments={post.comments}
                    id={post.id}
                />
            );
          })}
        </main>
      </div>
    </>
    
  )
}



import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css"
import styles from "./App.module.css"

export function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post 
        UserImage="https://github.com/Ca-byte.png" />
        <Post 
        UserImage="https://images.unsplash.com/photo-1610989432929-9769f3cf8006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"  />
      </main>

    </div>
    </>
    
  )
}



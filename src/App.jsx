import { Header } from "./components/Header";
import { Post } from "./components/Post";
import "./global.css"

export function App() {
  return (
    <>
    <Header />
    <Post 
      autor="Paulo Ricardo" 
      content="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    />
    <Post 
      autor="Maria Rita" 
      content="Cevadis im ampola pa arma uma pindureta.Leite de capivaris, leite de mula manquis sem cabeça."
    />
    </>
    
  )
}



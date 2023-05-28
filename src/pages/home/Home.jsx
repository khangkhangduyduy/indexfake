import "./home.css";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";

export default function homes() {
  return (
    <>
    <Header/>
    <div className="homes"> 
      <Post/>
    </div>
    </>
  )
}

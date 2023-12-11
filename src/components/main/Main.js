import Article from "../article/Article";
import PostsData from "../../data/posts";
import { useState } from "react";
import AddArticle from "../AddArticle/AddArticle";

const Main = ()=>{
    const [clicked,setClicked] = useState(false);
    const [posts,setPosts] = useState([]);
    const handleClick = ()=>{
        setClicked(true)
    }
    console.log(clicked)
    const handleFormData = (data)=>{
        setPosts((prevData)=>{
            return[data,...prevData]
        })
    }

    console.log('is main',posts)

    return(
    <main>
        <div className="container">
            <h1>Naujienos</h1>
            {posts.map((post)=>
            <Article key={post.id} tittle={post.title} description={post.description}/>
            )}
            <button onClick={handleClick}>PASPAUDZIAU</button>
            {clicked ? <h1>Mygtukas paspaustas</h1>:<div>kazkas kitas</div>} 
        </div>

        <div>
            <h2>Prideti naujiena</h2>
            <AddArticle onSave={handleFormData}/>
        </div>
    </main>    
  );
}
export default Main
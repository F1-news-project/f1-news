import { useEffect, useState } from "react";
import axios from "axios";


function Homepage(){
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        axios.get("https://f1-news-database.adaptable.app/articles/")
        .then(response => {
            setArticles(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return(
        <div className="display-linebreak">
        {/* add conditional rendering for featured article */}

        {articles.length > 0 && 
            articles.map(article =>{
                return (
                    <>
                    <h1 className="text-3xl font-bold" key={article.id}>{article.title}</h1>
                    <h2 className="text-xl">{article.date} - {article.subtitle}</h2>
                    <p>{article.text}</p>
                    </>
                )
            })

        }
        </div>
    )
}

export default Homepage;

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

    console.log(articles)

    return(
        <h1>{articles.length > 0 && articles[0].title}</h1>
    )
}

export default Homepage;

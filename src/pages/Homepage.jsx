import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/constants"

function Homepage() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios
            .get(`${API_URL}/articles/`)
            .then((response) => {
                setArticles(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const featuredArticle = articles.find(article => article.featured === true);

    return (
        <div className="display-linebreak max-w-5xl m-auto">
            {/* add conditional rendering for featured article */}

            {featuredArticle &&
                <Link to={`/articles/${featuredArticle?.id}`}>
                <div className="grid grid-cols-1 gap 4 p-2 border-2 m-auto" key={featuredArticle?.id}>
                    <div className="m-auto"><img className="max-h-xl" src="https://media.formula1.com/image/upload/f_auto,c_limit,w_1242,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/2024/Imola%20(Emilia-Romagna)/It's_Race_Week_Imola_V1" /></div>
                    <div className="ml-2">
                        <h1 className="text-3xl font-bold">{featuredArticle?.title}</h1>
                        <p className="text-lg" >{featuredArticle?.date} - {featuredArticle?.subtitle}</p>
                    </div>
                </div>
                </Link>
            }

            {articles.length > 0 &&
                articles.map(article => {
                    if (article?.featured === false) {
                        return (
                            <Link to={`/articles/${article?.id}`}>
                            <div className="grid grid-cols-1 md:grid-cols-5 gap 4 p-2 border-2 m-auto mt-5" key={article?.id}>
                                <div className="col-span-2"><img src="https://media.formula1.com/image/upload/f_auto,c_limit,w_1242,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/2024/Imola%20(Emilia-Romagna)/It's_Race_Week_Imola_V1" /></div>
                                <div className="ml-2 col-span-3">
                                    <h1 className="text-lg font-bold">{article?.title}</h1>
                                    <p className="text-lg" >{article?.date} - {article?.subtitle}</p>
                                </div>
                            </div>
                            </Link>
                        )
                    }
                })
            }
        </div>
    )
}

export default Homepage;

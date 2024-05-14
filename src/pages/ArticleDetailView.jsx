import axios from "axios";
import { API_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ArticleDetailView() {
    const [article, setArticle] = useState();
    const { articleId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API_URL}/articles/${articleId}`)
            .then(response => {
                setArticle(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    const deleteArticle = () => {
        axios.delete(`${API_URL}/articles/${articleId}`)
            .then(() => {
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="display-linebreak max-w-5xl m-auto">
        {/* add conditional rendering for featured article */}

        {article &&
            <div className="grid grid-cols-1 gap-4 p-2 m-auto" key={article?.id}>
                <div className="m-auto"><img className="max-h-xl" src="https://media.formula1.com/image/upload/f_auto,c_limit,w_1242,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/2024/Imola%20(Emilia-Romagna)/It's_Race_Week_Imola_V1" /></div>
                <div className="ml-2">
                    <h1 className="text-3xl font-bold">{article?.title}</h1>
                    <p className="text-lg" >{article?.date} - {article?.subtitle}</p>
                    <p>{article?.text}</p>
                </div>
            </div>
        }
        <div className="flex justify-center mt-3 mb-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-32" onClick={() => {navigate(`/edit/${articleId}`)}}>Edit</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-3 w-32" onClick={deleteArticle}>Delete</button>
        </div>
        </div>
    )
}

export default ArticleDetailView;
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../utils/constants";

function EditArticle() {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [text, setText] = useState("");
    const { articleId } = useParams()

    useEffect(() => {
        axios.get(`${API_URL}/articles/${articleId}`)
            .then(response => {
                setTitle(response.data.title)
                setSubtitle(response.data.subtitle)
                setText(response.data.text)
            })
            .catch(error => {
                console.log(error);
            })
    }, [articleId])

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const editArticle = {
            title,
            subtitle,
            text,
            date: getDate(),
            featured: false
        };

        axios
            .put(`${API_URL}/articles/${articleId}`, editArticle)
            .then((response) => {
                navigate(`/articles/${articleId}`);
            })
            .catch((e) => {
                console.log("error editing an article ", e);
            });
    };

    return (

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="text-xl text-gray-600">
                                    Article Title:
                                    <input
                                        className="border-2 border-gray-300 p-2 w-full"
                                        type="text"
                                        name="title"
                                        placeholder="Enter the Article Title"
                                        value={title}
                                        onChange={(e) => {
                                            setTitle(e.target.value);
                                        }}
                                    />
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="text-xl text-gray-600">
                                    Article Subtitle:
                                    <input
                                        className="border-2 border-gray-300 p-2 w-full"
                                        type="text"
                                        name="subtitle"
                                        placeholder="Enter the Subtitle"
                                        value={subtitle}
                                        onChange={(e) => {
                                            setSubtitle(e.target.value);
                                        }}
                                    />
                                </label>
                            </div>
                            <div className="mb-8">
                                <label className="text-xl text-gray-600">
                                    Article Description:
                                    <textarea
                                        className="border-2 border-gray-500 w-full min-h-52"
                                        type="text"
                                        name="description"
                                        placeholder="Enter the Description"
                                        value={text}
                                        onChange={(e) => {
                                            setText(e.target.value);
                                        }}
                                    />
                                </label>
                            </div>
                            <div className="flex p-1">
                                <button className="p-3 bg-blue-500 text-white hover:bg-blue-400">
                                    Save changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditArticle;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../utils/constants";

function EditArticle() {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [text, setText] = useState("");
    const { articleId } = useParams()
    const [isFeatured, setIsFeatured] = useState();

    useEffect(() => {
        axios.get(`${API_URL}/articles/${articleId}`)
            .then(response => {
                setTitle(response.data.title)
                setSubtitle(response.data.subtitle)
                setText(response.data.text)
                setIsFeatured(response.data.featured)
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
            featured: isFeatured
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
                            <div>
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
                            <div className="inline-flex items-center">
                                <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                                    <input type="checkbox"
                                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                        id="check" checked={isFeatured} onChange={(e) => setIsFeatured(!isFeatured)} />
                                    <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" strokeWidth="1">
                                            <path fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </label>
                                <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="check">
                                    Featured Article
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

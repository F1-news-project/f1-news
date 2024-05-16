import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/constants";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isFeatured, setIsFeatured] = useState(false);
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

  const featuredArticle = articles.find((article) => article.featured === true);

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
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const htmlContent = draftToHtml(rawContentState);
    const newArticle = {
      title,
      subtitle,
      text: htmlContent,
      date: getDate(),
      featured: isFeatured,
    };

    if(featuredArticle){
      const featuredArticleUpdate = {...featuredArticle}
      featuredArticleUpdate.featured = false;

      axios.put(`${API_URL}/articles/${featuredArticle.id}`, featuredArticleUpdate)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

    axios
      .post(`${API_URL}/articles/`, newArticle)
      .then((response) => {
        navigate("/");
      })
      .catch((e) => {
        console.log("error creating a new article ", e);
      });
  };
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="text
                -xl text
                -gray-600"
                >
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
                <label
                  className="text
                -xl text
                -gray-600"
                >
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
                  <Editor
                    editorState={editorState}
                    toolbarClassName="toolbar-class"
                    wrapperClassName="border-2 border-gray-500 min-h-52"
                    editorClassName="p-2"
                    toolbar={toolbar}
                    onEditorStateChange={setEditorState}
                  />
                </label>
              </div>
              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="check"
                >
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="check"
                    checked={isFeatured}
                    onChange={(e) => setIsFeatured(!isFeatured)}
                  />
                  <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px font-light text-gray-700 cursor-pointer select-none"
                  htmlFor="check"
                >
                  Featured Article
                </label>
              </div>
              {/* {featuredArticle && (
                <div
                  className="bg-orange-100 border-l-4 border-orange-500 text
                  -orange-700 p-4"
                  role="alert"
                >
                  <p className="font-bold">Warning</p>
                  <p>
                    You already have a featured article. To make this article
                    featured, you need to disable the current featured article
                    first.
                  </p>
                </div>
              )} */}

              <div className="flex p-1">
                <button
                  className="p-3 bg-blue-500 text
                -white hover:bg-blue-400 max-w-none"
                >
                  Create new article
                </button>
              </div>
              <div
                className="flex items-center p-4 mb-4 rounded-xl text
                -sm border border-emerald-400 bg-emerald-50 text
                -emerald-500"
                role="alert"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0043 13.3333V9.16663M9.99984 6.66663H10.0073M9.99984 18.3333C5.39746 18.3333 1.6665 14.6023 1.6665 9.99996C1.6665 5.39759 5.39746 1.66663 9.99984 1.66663C14.6022 1.66663 18.3332 5.39759 18.3332 9.99996C18.3332 14.6023 14.6022 18.3333 9.99984 18.3333Z"
                    stroke="#10B981"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="font-semibold mr-1">Success</span> You created
                a new article
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateArticle;

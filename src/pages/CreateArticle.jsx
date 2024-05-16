import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/constants";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState("");
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
      image,
      featured: isFeatured,
    };

    if (featuredArticle?.featured === true && isFeatured === true) {
      const featuredArticleUpdate = { ...featuredArticle };
      featuredArticleUpdate.featured = false;

      axios
        .put(`${API_URL}/articles/${featuredArticle.id}`, featuredArticleUpdate)
        .then()
        .catch((error) => console.log(error));
    }

    axios
      .post(`${API_URL}/articles/`, newArticle)
      .then((response) => {
        toast.success("Article created successfully!", {
          position: "bottom-center",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
      })
      .catch((e) => {
        toast.error("Error Creating the Article", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log("error creating a new article ", e);
      });
  };

  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="font-bold">
                  Article Title:
                  <input
                    className="border-2 border-gray-300 p-2 w-full font-normal"
                    type="text"
                    name="title"
                    required
                    placeholder="Enter the Article Title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="font-bold">
                  Article Subtitle:
                  <input
                    className="border-2 border-gray-300 p-2 w-full font-normal"
                    type="text"
                    name="subtitle"
                    required
                    placeholder="Enter the Subtitle"
                    value={subtitle}
                    onChange={(e) => {
                      setSubtitle(e.target.value);
                    }}
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="font-bold">
                  Article Description:
                  <Editor
                    editorState={editorState}
                    toolbarClassName="toolbar-class"
                    wrapperClassName="border-2 border-gray-300 min-h-52"
                    editorClassName="p-2 font-normal"
                    toolbar={toolbar}
                    onEditorStateChange={setEditorState}
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="font-bold">
                  Image URL:
                  <input
                    className="border-2 border-gray-300 p-2 w-full font-normal"
                    type="URL"
                    name="image"
                    placeholder="Enter the Image URL"
                    value={image}
                    required
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
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
              <div className="flex p-1">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-50">
                  Create new article
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateArticle;

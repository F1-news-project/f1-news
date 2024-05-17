import axios from "axios";
import { API_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import Comments from "../components/Comments";

function ArticleDetailView() {
  const [article, setArticle] = useState();
  const { articleId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/articles/${articleId}`)
      .then((response) => {
        setArticle(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteArticle = () => {
    axios
      .delete(`${API_URL}/articles/${articleId}`)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const imageErrorHandler = (e) => {
    e.target.src =
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1242,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/2024/Imola%20(Emilia-Romagna)/It's_Race_Week_Imola_V1";
  };

  return (
    <div className="display-linebreak max-w-5xl m-auto">

      {article && (
        <div className="grid grid-cols-1 gap-4 p-2 mt-2 m-auto" key={article.id}>
          <div className="m-auto">
            <img
              className="max-h-xl"
              src={article?.image}
              onError={imageErrorHandler}
            />
          </div>
          <div className="mx-2">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{article?.title}</h1>
            <p className="text-lg font-thin mb-2">
              {article?.date}
            </p>
            <p className="text-xl font-semibold">
              {article?.subtitle}
            </p>
            <br />
            <div
              className="text-xl"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(article.text),
              }}
            />
          </div>
        </div>
      )}
      <div className="flex justify-center mt-3 mb-3">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-32"
          onClick={() => {
            navigate(`/edit/${articleId}`);
          }}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-3 w-32"
          onClick={deleteArticle}
        >
          Delete
        </button>
      </div>
      <div>
        <Comments />
      </div>
    </div>
  );
}

export default ArticleDetailView;

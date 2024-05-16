import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/constants";

function Comments() {
  const { articleId } = useParams();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/articles/${articleId}/comments`)
      .then((response) => setComments(response.data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, [articleId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        username: user,
        text: comment,
      };
      axios
        .post(`${API_URL}/articles/${articleId}/comments`, newComment)
        .then((response) => {
          setComments([...comments, response.data]);
          setComment("");
          setUser("");
        })
        .catch((error) => {
          console.error("Error posting comment:", error);
        });
    }
  };

  return (
    <div className="w-2/3 bg-white rounded-lg border p-4 my-4 m-auto mt-10">
      <h3 className="font-bold text-xl mb-3 ">Comments</h3>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
          {comments.map((c) => (
            <div
              key={c.id}
              className="border rounded-md p-3 ml-1 md:ml-3 md:mr-3 my-2"
            >
              <div className="flex gap-3 items-center">
                <h3 className="font-bold text-lg">{c.username}</h3>
              </div>
              <p className="text-gray-800 mt-2">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="mb-4 px-3 ">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className=" bg-gray-100 rounded border border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
            id="name"
            type="text"
            placeholder="Enter your name"
            required
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="w-full px-3 mb-4">
          <textarea
            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            name="body"
            placeholder="Type Your Comment"
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        <div className="w-full flex justify-end px-3">
          <input
            type="submit"
            className="px-4 py-2 rounded-md text-white text-sm bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300"
            value="Post Comment"
          />
        </div>
      </form>
    </div>
  );
}

export default Comments;

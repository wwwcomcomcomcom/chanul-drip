import { useEffect, useState } from "react";
// import { generatePosts } from "./apiMockup";
import { getPosts, Post } from "./api";
import axios from "axios";

export default function Posts() {
  // const posts = generatePosts();

  const [hidden, setHidden] = useState(true);
  const [post, setPost] = useState<Post[]>([]);
  useEffect(() => {
    getPosts().then((data) => {
      setPost(data);
    });
  }, []);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleBodyChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBody(event.target.value);
  }

  function submit() {
    if (!hidden) {
      const newPost = {
        id: post.length + 1,
        title: title,
        body: body,
      };
      const newPostDto = {
        title: title,
        body: body,
      };
      setPost([newPost, ...post]);

      axios
        .post("http://localhost:5173/api/posts", newPostDto)
        .then(() => {
          console.log("Success");
          // Handle the response here
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle any errors
        });
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-2/3">
        <div className="flex justify-end p-5 gap-8">
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="grow-2 border border-gray-300 rounded-lg px-2"
            value={title}
            onChange={handleTitleChange}
            style={hidden ? { display: "none" } : {}}
          ></input>
          <input
            type="text"
            id="body"
            placeholder="Body"
            className="grow border border-gray-300 rounded-lg px-2"
            value={body}
            onChange={handleBodyChange}
            style={hidden ? { display: "none" } : {}}
          ></input>
          <button
            className="bg-blue-500 text-white font-semibold rounded-[2rem] px-4 py-2"
            onClick={() => {
              submit();
              setHidden(!hidden);
            }}
          >
            {hidden ? "New Post" : "Post!"}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-10 pt-10 pb-10">
          {post.map((post, index) => (
            <div
              key={index}
              className="border border-gray-300 p-4 rounded-[2rem] transition-colors duration-300 hover:bg-gray-100"
            >
              <div className="px-7">
                <h2 className="text-2xl font-semibold pb-3 pt-4">
                  {post.title}
                </h2>
                <p className="text-xl font-medium pb-4 text-blue-600">
                  {post.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { generatePosts } from "./apiMockup";

export default function HomeMain() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-4/5">
        <h1 className="text-4xl font-bold">Home</h1>
        <p className="text-lg">Welcome to the home page.</p>
        {generatePosts().map((post) => {
          return (
            <div
              key={post.id}
              className="border border-gray-300 p-4 my-4 rounded-lg"
            >
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p>{post.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

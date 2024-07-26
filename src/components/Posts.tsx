import { generatePosts } from "./apiMockup";

export default function Posts() {
  const posts = generatePosts();

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-16 gap-y-10 pt-10 px-80 pb-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-300 p-4 rounded-[2rem] transition-colors duration-300 hover:bg-gray-100"
          >
            <div className="px-7">
              <h2 className="text-2xl font-semibold pb-3 pt-4">{post.title}</h2>
              <p className="text-xl font-medium pb-4 text-blue-600">
                {post.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

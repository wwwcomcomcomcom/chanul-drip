import { generatePosts } from "./apiMockup";

type Post = {
  id: number;
  title: string;
  content: string;
};

// Function to shuffle an array of Posts
function shuffle(array: Post[]): Post[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function HomeMain() {
  const posts = shuffle(generatePosts()).slice(0, 4);
  const seminGitHubProfileLink = () => {
    window.location.href = "https://github.com/wwwcomcomcomcom";
  };
  const damYulGitHubProfileLink = () => {
    window.location.href = "https://github.com/DAMNyul";
  };
  const hyojooGitHubProfileLink = () => {
    window.location.href = "https://github.com/jhj080802";
  };
  const chanulGitHubProfileLink = () => {
    window.location.href = "https://github.com/chanul0817";
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col w-full">
          <div className="relative w-full h-[40vh]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{
                backgroundImage:
                  "url(https://cdn.discordapp.com/attachments/1264849846213546005/1266254268340633631/Clipped_image_20240508_230611.png?ex=66a47aaf&is=66a3292f&hm=d34e25bdb8d1f2d8b73e8fc0a8baddebda84d7aa37939f5603c35995fca7dc2d&)",
              }}
            ></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <h1 className="text-4xl font-extrabold bg-black p-3 px-6 rounded-3xl">
                찬울이의 데일리 드립즈
              </h1>
              <p className="text-lg py-3 text-black">
                Welcome to the home page :]
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 pt-10 px-36 pb-10">
            {posts.map((post) => (
              <div
                key={post.id}
                className="border border-gray-300 p-4 rounded-[2rem]"
              >
                <div className="px-7">
                  <h2 className="text-2xl font-semibold pb-3 pt-4">
                    {post.title}
                  </h2>
                  <p className="text-xl font-medium pb-4 text-blue-600">
                    {post.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full px-36 pt-10">
        <hr></hr>
        <div className="pl-10 text-xl font-semibold pt-10">Team members✨</div>
        <div className="grid grid-cols-4 py-8 gap-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            <img
              src="https://avatars.githubusercontent.com/u/68013923?v=4"
              className="rounded-full w-24 cursor-pointer"
              onClick={seminGitHubProfileLink}
            />
            <h2 className="font-semibold pb-5 pt-2">이세민</h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://avatars.githubusercontent.com/u/164720957?v=4"
              className="rounded-full w-24 cursor-pointer"
              onClick={hyojooGitHubProfileLink}
            />
            <h2 className="font-semibold pb-5 pt-2">정효주</h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://avatars.githubusercontent.com/u/168736494?v=4"
              className="rounded-full w-24 cursor-pointer"
              onClick={chanulGitHubProfileLink}
            />
            <h2 className="font-semibold pb-5 pt-2">박찬울</h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://avatars.githubusercontent.com/u/162972723?v=4"
              className="rounded-full w-24 cursor-pointer"
              onClick={damYulGitHubProfileLink}
            />
            <h2 className="font-semibold pb-5 pt-2">김담율</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

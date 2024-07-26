import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-lvh">
      <div className="w-1/2 h-1/2 border border-gray-300 rounded-xl flex flex-col items-center py-4">
        <h2 className="text-2xl font-semibold">Login</h2>

        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="border border-gray-300 p-2 rounded-lg"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 p-2 rounded-lg"
          />
          <p className="text-gray-400 text-right mt-2 mb-4">
            회원이 아니신가요?
            <Link to="/signup" className="text-blue-400">
              회원가입
            </Link>
          </p>

          <button className="bg-blue-500 text-white p-2 rounded-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

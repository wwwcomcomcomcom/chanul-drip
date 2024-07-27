import { Link, useNavigate } from "react-router-dom";
import LeftArrowIcon from "./elements/LeftArrowIcon";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:5173/api/signup", { username, password })
      .then((response) => {
        // handle success
        console.log(response.data);
        // navigate to success page or perform any other action
        navigate("/login");
      })
      .catch((error) => {
        // handle error
        console.error(error);
        // navigate to error page or perform any other action
      });
  };

  return (
    <div>
      <div
        className="translate-x-24 translate-y-16 cursor-pointer w-fit"
        onClick={() => navigate(-1)}
      >
        <LeftArrowIcon />
      </div>
      <div className="flex justify-center items-center h-lvh">
        <div className="w-1/3 h-fit border border-gray-300 rounded-3xl flex flex-col items-center py-20">
          <h2 className="text-2xl font-semibold">Signup</h2>

          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="border border-gray-300 p-2 rounded-lg"
              value={username}
              onChange={handleUsernameChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 p-2 rounded-lg"
              value={password}
              onChange={handlePasswordChange}
            />
            <p className="text-gray-400 text-right mt-2 mb-4 text-sm">
              이미 회원이신가요?
              <Link to="/login" className="text-blue-400">
                로그인
              </Link>
            </p>

            <button
              className="bg-blue-500 text-white p-2 rounded-lg"
              onClick={handleSubmit}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

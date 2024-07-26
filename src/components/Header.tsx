import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to determine if the given path is the current path
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b border-gray-300 h-16 w-full flex justify-center gap-6 items-center font-semibold text-lg">
      <div
        className={`cursor-pointer ${isActive("/") ? "text-blue-500" : ""}`}
        onClick={() => navigate("/")}
      >
        Home
      </div>
      <div
        className={`cursor-pointer ${
          isActive("/posts") ? "text-blue-500" : ""
        }`}
        onClick={() => navigate("/posts")}
      >
        Posts
      </div>
      <div
        className={`cursor-pointer ${
          isActive("/login") ? "text-blue-500" : ""
        }`}
        onClick={() => navigate("/login")}
      >
        Login
      </div>
    </header>
  );
}

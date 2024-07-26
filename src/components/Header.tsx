import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="border-b border-black h-16 w-full flex justify-center gap-6 items-center font-semibold text-lg">
      <div onClick={() => navigate("/")}>Home</div>
      <div onClick={() => navigate("/search")}>Search</div>
      <div onClick={() => navigate("/login")}>Login</div>
    </header>
  );
}

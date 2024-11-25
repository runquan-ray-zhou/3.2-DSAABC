import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-evenly text-center bg-[#FFD60A] top-5 left-0 right-0 h-[50px] m-0 p-0">
      <Link to="/">
        <button className="font-josefin text-[1.3em] bg-transparent text-[#000814] border-none cursor-pointer p-[5px_10px] rounded-[25px] hover:bg-[#003566] hover:text-[#FFD60A]">
          Login
        </button>
      </Link>
      <Link to="/home">
        <button className="font-josefin text-[1.3em] bg-transparent text-[#000814] border-none cursor-pointer p-[5px_10px] rounded-[25px] hover:bg-[#003566] hover:text-[#FFD60A]">
          Home
        </button>
      </Link>
      <Link to="/about">
        <button className="font-josefin text-[1.3em] bg-transparent text-[#000814] border-none cursor-pointer p-[5px_10px] rounded-[25px] hover:bg-[#003566] hover:text-[#FFD60A]">
          About
        </button>
      </Link>
    </nav>
  );
}

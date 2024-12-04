import { Link } from "react-router-dom";
import LoginImg from "../assets/Login2.png";

export default function Login() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[265px] h-[265px] bg-white rounded-full flex items-center justify-center">
        <Link to="/home">
          <img
            src={LoginImg}
            alt="A squirrel below a tree with pears linked like a data structure"
            className="w-[92%] border-4 border-white rounded-full cursor-pointer hover:border-[#FFD60A]"
          />
        </Link>
      </div>
      <span className="font-josefin mt-4 text-[#003566] text-[4em] font-black text-center hover:text-[#FFD60A]">
        ABC's of DSA
      </span>
      <div className="flex flex-col items-center mt-[25px] bg-[#041B15] p-2 rounded-md">
        <div className="py-2 px-4 bg-[#003566] rounded-md">
          <p className="font-josefin text-[2em] m-0 text-[#FFD60A]">
            2025 EDITION
          </p>
        </div>
        <Link to="/home">
          <button className="font-josefin w-full text-[2em] mt-2 py-2 px-[61px] bg-[#041B15] text-[#FFD60A] rounded-md border-none cursor-pointer hover:bg-[#003566] hover:text-[#FFD60A]">
            ENTER
          </button>
        </Link>
      </div>
    </div>
  );
}

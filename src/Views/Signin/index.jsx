import olxLogo from "../../Components/Header/olxlogo.png";
import { useNavigate } from "react-router-dom";
import { loginApp } from "../../Config/firebase";
import { useState } from "react";

function Sign() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function signin() {
    try {
      await loginApp({ email, password });
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center 
      }`}
    >
      <div className="bg-white p-5 px-10    rounded-lg ">
        <div className="">
          <svg
            onClick={() => navigate("/")}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className="w-28 m-auto  ">
          <img className="my-2" src={olxLogo} alt="" />
        </div>
        <div className="my-2">
          <h1 className="text-center mb-10 m-auto font-bold ">Login</h1>
        </div>
        <div>
          <div className="my-3 ">
            <input
              onChange={(event) => setEmail(event.target.value)}
              className="border-2 border-black rounded-sm p-3 w-80"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              onChange={(event) => setPassword(event.target.value)}
              className="border-2 border-black rounded-sm p-3 w-80"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="bg-gray-200 my-5 p-2 flex justify-center cursor-pointer">
          <button className="" onClick={signin} >
            <h1 className="">Login</h1>
          </button>
        </div>
        <div className="p-3 text-sm">
          <h3>
            Dont have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register here
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
export default Sign;

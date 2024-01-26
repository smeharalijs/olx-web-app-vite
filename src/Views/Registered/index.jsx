import olxLogo from "../../Components/Header/olxlogo.png";
import { useNavigate } from "react-router-dom";
import  registerApp  from "../../Config/firebase";
import { useState } from "react";

function Registered() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function signup() {
    registerApp({ fullName, age, email, password });
  }

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center 
      }`}
    >
      <div className="bg-white p-5 px-10   rounded-lg ">
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
          <img className="" src={olxLogo} alt="" />
        </div>
        <div className="my-2">
          <h1 className="text-center my-2 m-auto font-bold mb-10 ">
            Create an Account
          </h1>
        </div>
        <div>
          <div className="my-3 ">
            <input
              onChange={(event) => setFullName(event.target.value)}
              className="border-2 border-black rounded-sm p-3 w-80"
              type="text"
              placeholder="Enter Your Full Name"
            />
          </div>

          <div className="my-3 ">
            <input
              onChange={(event) => setAge(event.target.value)}
              className="border-2 border-black rounded-sm p-3 w-80"
              type="number"
              placeholder="Enter Your Age"
            />
          </div>

          <div className="my-3 ">
            <input
              onChange={(event) => setEmail(event.target.value)}
              className="border-2 border-black rounded-sm p-3 w-80"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <input
              onChange={(event) => setPassword(event.target.value)}
              className="border-2 border-black rounded-sm p-3 w-80"
              type="password"
              placeholder="New Password"
            />
          </div>
        </div>

        <div className="bg-gray-200 my-5 p-2 flex justify-center cursor-pointer">
          <button className="" onClick={signup}>
            <h1 className="">Sign In</h1>
          </button>
        </div>
        <div className="p-3 text-sm">
          <h3>
            Already have an Account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/signin")}
            >
              Login here
            </span>{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}
export default Registered;

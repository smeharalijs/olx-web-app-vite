import olxLogo from "../../Components/Header/olxlogo.png";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate()

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center 
      }`}
    >
      <div className="bg-white p-10  px-5 rounded-lg  ">
        <div className="">
          <svg onClick={()=>navigate('/')}
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

        <div className="w-28 m-auto ">
          <img className="my-2" src={olxLogo} alt="" />
        </div>
        <div className="my-2">
          <h1 className="text-center my-3 m-auto font-bold ">Welcome to Olx</h1>
          <h2 className="text-center mt-5 font-sans">
            The trusted community of buyers{" "}
          </h2>
          <h2 className="text-center mb-8 font-sans ">and sellers</h2>
        </div>
        <div className="w-96 cursor-pointer">
          <div className="my-2 p-2 border-2 border-black  rounded-md hover:border-4 hover:border-black  ">
            <div className="flex justify-center ">
              <img
                className="w-6 mx-1"
                src="https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png"
                alt=""
              />
              <h1 className="text-center ">Continue with google</h1>
            </div>
          </div>
          <div className="my-2 p-2 border-2 border-black rounded-md hover:border-4 hover:border-black ">
            <div className="flex justify-center">
              <img
                className="w-6 mx-1"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                alt=""
              />
              <h1 className="text-center">Continue with Facebook</h1>
            </div>
          </div>
          <div className="my-2 p-2 border-2 border-black rounded-md hover:border-4 hover:border-black ">
            <div className="flex justify-center">
              <img
                className="w-10 mx-1"
                src="https://i.pinimg.com/736x/82/ee/a2/82eea2c87dc9a870eb5a354eae996b9f.jpg"
                alt=""
              />
              <h1 className="text-center" onClick={()=>navigate('/signin')}>Continue with Email</h1>
            </div>
          </div>
          <div className="my-2 p-2 border-2 border-black rounded-md hover:border-4 hover:border-black ">
            <div className="flex justify-center">
              <img
                className="w-6 mx-1"
                src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
                alt=""
              />
              <h1 className="text-center">Continue with Phone</h1>
            </div>
          </div>
        </div>
        <div className="text-xs">
          <h1 className="text-center mt-10  ">
            By continuing, you are accepting
          </h1>
          <h2 className="text-center"><span className="text-blue-700 cursor-pointer">OLX Terms of use</span> and <span className="text-blue-700 cursor-pointer">Privacy Policy</span></h2>
        </div>
      </div>
    </div>
  );
}

export default Login;

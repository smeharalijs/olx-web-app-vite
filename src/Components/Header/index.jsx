import olxLogo from "./olxlogo.png";
import olx from "./logo.png";
import border from "./border.png";
import carIcon from "./caricon.png";
import propertyIcon from "./propertyIcon.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut , getAuth } from "firebase/auth";
import {auth} from "../../Config/firebase";
import Modal from 'react-modal';
import profile from './emoji.png'



function Header( {username, profilePhoto, details}) {
  const navigate = useNavigate();
  const [category, setCategory] = useState();
  const [user, setUser] = useState(null);


  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);


function signout(){
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    alert("Sign-out successful")
  }).catch((error) => {
    // An error happened.
    alert(error)
  });
  
}



  useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user)
      }else{
        setUser(null)
      }
    })
  
  }, []);

  return (
    <nav className="">
      <div className="bg-gray-100  sm:px-20  md:px-20">
        <div className="flex p-2">
          <div className=" md:hidden">
            <a href="#" className="m-5 ">
              &#8801;
            </a>
          </div>
          <div className="" >
            <img className="w-10" src={olx} />
          </div>

          <div className="flex mx-14">
            <img
              className="w-6 mx-1 p-1 bg-gray-200 rounded-xl  "
              src={carIcon}
              alt=""
            />
            <span className="mr-8">Motors</span>
            <img
              className="w-6 mx-1 p-1 bg-gray-200 rounded-xl"
              src={propertyIcon}
              alt=""
            />
            <span>Property</span>
          </div>
        </div>

        <div className="md:flex " >
          <div className="md:w-20 md:block hidden    " >
            <img src={olxLogo} />
          </div>
          <div className="md:flex  hidden  md:space-x-2 md:m-5  ">
            <div className="">
              <input
                className="md:p-3 md:w-56 border-2 border-black	rounded-md"
                type="text"
                placeholder="Search city,area or locality"
              />
              
            </div>
            <div className="">
              <input
                className=" md:p-3 md:w-80 md:border-2 md:border-black md:rounded-l-md"
                type="text"
                placeholder="Find Cars, Mobile Phones and more..."
              />
              <button
                type="submit"
                className="md:p-5 md:pt-4 md:absolute   md:text-white md:bg-black md:rounded-e-lg "
              >
                <svg
                  className="md:w-3 md:h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>

            <div className="flex space-x-10 mt-3 m-auto ">
              {!user ? <div className="ml-28">
                <button
                  className="md:font-bold  md:border-b-2 md:border-black hover:border-hidden"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </div>
              :
              <div className="ml-20">
              <img
              id=""
              className="w-10"
                src={profile}
                alt="Profile"
                onClick={openModal}
                style={{ cursor: 'pointer' }}
              />
              <Modal 
              className="w-[90%] m-auto bg-white"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Profile Details"
                type="file"
              >
                <input type="file" name="" id="" />
                <h2>{username}s Profile</h2>
                <p>{details}</p>
                <button onClick={closeModal}>Close</button>
              </Modal>
            </div>}
              
              <div className="hidden md:block" onClick={()=>navigate('/postAdd')}>
                <button className="md:font-bold md:absolute md:top-[] md:right-[] md:translate-x-10">
                  <img className="md:w-28" src={border} />
                  <span className="md:relative md:bottom-9"> + Sell</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex p-2 border-b-2 shadow-sm space-x-10">
        <div className="md:ml-28 ml-5  ">
            <select
            className="p-1"
              name="category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="All Catogeries">All Catogeries</option>
              <option value="Cars">Cars</option>
              <option value="Cameras & Lenses">Cameras & Lenses</option>
              <option value="Computers & Laptops">Computers & Laptops</option>
              <option value="Mobile Phones">Mobile Phones</option>
              <option value="Motorcycles">Motorcycles</option>
              <option value="Tablets">Tablets</option>
            </select>
        </div>

        <div className="">
          <ul className="md:flex md:space-x-3 hidden ">
            <li>Mobile Phones</li>
            <li>Cars</li>
            <li>Motorcycles</li>
            <li>Houses</li>
            <li>Video-Audios</li>
            <li>Tablets</li>
            <li>Land & Plots</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

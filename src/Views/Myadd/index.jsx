import { useState, useEffect } from "react";
import { getAds } from "../../Config/firebase";
import { useNavigate } from "react-router-dom";


function Myadd() {
  const [myproduct, setMyproduct] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {
    getMYProduct();
  }, []);

  async function getMYProduct() {
    try {
      const ads = await getAds();
      console.log("ad in component ", ads);
      setMyproduct(ads);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="text-center m-20 font-bold">
        <h1>Seller Ads</h1>
      </div>

      <div className="flex flex-wrap justify-center">
        {
 myproduct.map((item, index) => {
    console.log("item ", item);
            const {id, title, brand, imageUrl } = item;
            return (
              <div onClick={()=>navigate(`/mydetail/${id}`)}
                key={index}
                className="w-[340px]  m-[10px] border border-black"
                id="btn"
              >
                <img
                  className="w-[100%] h-[200px] object-cover"
                  src={imageUrl}
                  alt="image"
                />
                <div className="p-[16px] bg-white text-white">
                  <div className=" text-gray-700">
                    {title} <br />
                    {brand}
                    <h6>2 days ago</h6>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Myadd;

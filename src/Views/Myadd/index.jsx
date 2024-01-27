import { useState, useEffect } from "react";
import { getAds } from "../../Config/firebase";

function Myadd() {
  const [myproduct, setMyproduct] = useState([]);

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
      <div>
        <h1>myAdd</h1>
      </div>

      <div className="flex flex-wrap justify-center">
        {
 myproduct.map((item, index) => {
            const { age, imageURL } = item;
            return (
              <div
                key={index}
                className="w-[340px]  m-[10px] border border-black"
                id="btn"
              >
                <img
                  className="w-[100%] h-[200px] object-cover"
                  src={imageURL}
                  alt="image"
                />
                <div className="p-[16px] bg-white text-white">
                  <div className=" text-gray-700">
                    {age} <br />
                    {/* {category} */}
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

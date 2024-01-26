// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import './index.css'

function Dashboard() {
  //   const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProduct(res.products);
      });
  };

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="md:px-1">
      <div className="flex content-center">
        <img
          className="my-[20px] md:my-[50px] m-auto md:m-auto w-[80%] md:w-[70%] "
          src="https://lh4.googleusercontent.com/7uUaexYudWdalU4nenfqPgU4lYTvSatgBCNLjPjs2WOKVH71F3qNx0MoNkGoJik8iIRDPj20MkmlofJunwkWE-unNgtxrI8hyV6u3WJ-H_ZaH-RS1AJzn341DTuTGGG-JqlGyJHbaLNxFgBzvmyvuLnIOaDMeY-WS8eVxO1ST_pkHMrKJcylNAMmuX5tUg"
        />
      </div>

      <div className="categories-container md:ml-4 md:font-bold sm:font-bold">
        <h2 className="m-10">All Categories</h2>
        <div className="categories-wrapper text-center">
          <div className="flex flex-wrap justify-center">
            <span className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <img className="w-20 mx-auto mb-2"
                src="https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png"
                alt=""
                
              />
              <h1 className="text-center">Mobiles</h1>
             
            </span>
            <span className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <img className="w-20 mx-auto mb-2"
                src="https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png"
                alt=""
              />
              <h1>Vehicles</h1>
            </span>
            <span className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <img className="w-20 mx-auto mb-2"
                src="https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png"
                alt=""
              />
              <h1>Property for Sale</h1>
            </span>
            <span className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <img className="w-20 mx-auto mb-2"
                src="https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png"
                alt=""
              />
              <h1>property for Rent</h1>
            </span>
            <span className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <img className="w-20 mx-auto mb-2"
                src="https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png"
                alt=""
              />
              <h1>Electronics and Home Appliances</h1>
            </span>
            <span className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <img className="w-20 mx-auto mb-2"
                src="https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png"
                alt=""
              />
              <h1>Bikes</h1>
            </span>
            <span className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <img  className="w-20 mx-auto mb-2"
                src="https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png"
                alt=""
              />
              <h1>Business, Industrial & Agriculture</h1>
            </span>
            <span className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <img className="w-20 mx-auto mb-2"
                src="https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png"
                alt=""
              />
              <h1>Services</h1>
            </span>
            <span className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <img className="w-20 mx-auto mb-2"
                src="https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png"
                alt=""
            />
            <h1>Jobs</h1>
            </span>
          </div>
          <div className="flex flex-wrap justify-center">
            <span className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <img className="w-20 mx-auto mb-2"
                src="https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png"
                alt=""
              />
              <h1>Animals</h1>
            </span >
            <span className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <img className="w-20 mx-auto mb-2"
                src="https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png"
                alt=""
              />
              <h1>Furniture & Home Decor</h1>
            </span>

            <span className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <img className="w-20 mx-auto mb-2"
                src="https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png"
                alt=""
              />
              <h1>Fashion and Beauty</h1>
            </span>
            <span className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <img className="w-20 mx-auto mb-2"
                src="https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png"
                alt=""
              />
              <h1>Books,Sports & Hobbies</h1>
            </span>
            <span className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <img className="w-20 mx-auto mb-2"
                src="https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png"
                alt=""
              />
              <h1>Kids</h1>
            </span>
            
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {product.map((item, index) => {
          const { title, thumbnail, category } = item;
          return (
            <div
              key={index}
              className="w-[340px]  m-[10px] border border-black"
              id="btn"
            >
              <img
                className="w-[100%] h-[200px] object-cover"
                src={thumbnail}
                alt={title}
              />
              <div className="p-[16px] bg-white text-white">
                <div className=" text-gray-700">
                  {title} <br />
                  {category}
                  <h6>2 days ago</h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './index.css';
// import FbImageLibrary from 'react-fb-image-grid'


function Detail() {
    const { id } = useParams();
    const [detail, setDetail] = useState();

    useEffect(() => {
        getApi();
    }, []);

    const getApi = () => {
      
    }
    

    if (!detail) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
   
    const { imageUrl,title, name, rs, brand, category, discription} = detail;



    return (
        <div className="body">
            <div className="main">
                <div className="thumbnail">
                    <img src={imageUrl} alt="Thumbnail" />
                </div>

                {/* <div className="imgLib">
                <FbImageLibrary images={images} />
                </div> */}

                <div className="details">
                    <div className="price">
                        <h2>Rs {rs}</h2>
                    </div>

                    <div className="detail">
                        <h3>Details</h3>
                        <p><strong>Seller Name :    </strong>{name}</p>
                        <p><strong>Title :    </strong>{title}</p>
                        <p><strong>Brand :    </strong>{brand}</p>
                        <p><strong>Category : </strong>{category}</p>
                    </div>

                    <div className="description">
                        <h3 className="font-bold" >Description</h3>
                        <p>{discription}</p>
                    </div>
                
                </div>
            </div>
        </div>
    );
}

export default Detail;

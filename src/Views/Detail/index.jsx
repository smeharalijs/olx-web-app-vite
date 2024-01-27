import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './style.css';
// import FbImageLibrary from 'react-fb-image-grid'


function Detail() {
    const { adId } = useParams();
    const [detail, setDetail] = useState();

    useEffect(() => {
        getApi();
    }, []);

    const getApi = () => {
        fetch(`https://dummyjson.com/products/${adId}`)
            .then(res => res.json())
            .then(res => setDetail(res))
    }

    if (!detail) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    const { thumbnail, title, discountPercentage, images, price, description, brand, category, stock, rating } = detail;



    return (
        <div className="body">
            <div className="main">
                <div className="thumbnail">
                    <img src={thumbnail} alt="Thumbnail" />
                </div>

                <div className="imgLib">
                {/* <FbImageLibrary images={images} /> */}
                </div>

                <div className="details">
                    <div className="price">
                        <h2>Rs {price}</h2>
                    </div>

                    <div className="detail">
                        <h3>Details</h3>
                        <p><strong>Title :    </strong>{title}</p>
                        <p><strong>Brand :    </strong>{brand}</p>
                        <p><strong>Category : </strong>{category}</p>
                        <p><strong>Stock : </strong>{stock}</p>
                        <p><strong>Rating :</strong>{rating}</p>
                        <p><strong>Discount :</strong>{discountPercentage}</p>
                    </div>

                    <div className="description">
                        <h3>Description</h3>
                        <p>{description}</p>
                    </div>
                
                </div>
            </div>
        </div>
    );
}

export default Detail;

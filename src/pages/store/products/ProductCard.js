import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CART_CONTEXT } from '../../../App';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const { productName, brand, productImage, _id } = product;

    const handleProductDetails = (id) => {
        navigate(`/productDetails/${id}`);
    };

    const { dispatch } = useContext(CART_CONTEXT);

    return (
        <section className="card card-compact">
            <figure className="bg-white border border-2 hover:border-warning rounded-xl">
                <img style={
                    {
                        maxHeight: "300px",
                        objectFit: "cover",
                        objectPosition: "center"
                    }
                } src={productImage} alt="Shoes" />
            </figure>
            <div className="py-4">
                <h2 className="card-title text-warning">{productName}</h2>
                <p>{brand}</p>
                <div className="flex align-center mt-3">
                    <button onClick={() => dispatch({ type: "AddCart", payload: product })} className="btn btn-outline btn-warning btn-circle">
                        <span className="material-symbols-outlined text-black">
                            shopping_cart
                        </span>
                    </button>
                    <button onClick={() => handleProductDetails(_id)} className="btn btn-outline btn-warning btn-circle ml-5">
                        <span className="material-symbols-outlined text-black">
                            visibility
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductCard;
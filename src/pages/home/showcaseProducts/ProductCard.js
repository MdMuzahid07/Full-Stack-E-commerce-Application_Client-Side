import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const { productName, brand, productImage } = product;

    const handleProductDetails = () => {
        navigate("/productDetails");
    };

    return (
        <section className="card card-compact">
            <figure className="bg-white border border-2 hover:border-warning rounded-xl"><img src={productImage} alt="Shoes" /></figure>
            <div className="py-4">
                <h2 className="card-title text-warning">{productName}</h2>
                <p>{brand}</p>
                <div className="flex align-center mt-3">
                    <button className="btn btn-outline btn-warning btn-circle">
                        <span class="material-symbols-outlined text-black">
                            shopping_cart
                        </span>
                    </button>
                    <button className="btn btn-outline btn-warning btn-circle mx-5">
                        <span class="material-symbols-outlined text-black">
                            favorite
                        </span>
                    </button>
                    <button onClick={handleProductDetails} className="btn btn-outline btn-warning btn-circle">
                        <span class="material-symbols-outlined text-black">
                            visibility
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductCard;
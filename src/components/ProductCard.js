import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { addToWishList } from "../slices/wishListSlice";

const ProductCard = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  function handleAddToCart(productId){
    let newProduct = products.find((item) => item.id === productId);
    dispatch(addToCart(newProduct));
  }

  return products.map((item) => {
    return (
      <div key={item.id} className="product-card">
        <div style={{display:'flex'}}>
          <img className="product-image" src={item.image} alt="product" />
        </div>
        <div className="product-title">${item.title}</div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <div className="info">
            <div className="price">Price: ${item.price}</div>
            <div className="row">Rating: ${item.rating.rate}</div>
          </div>
          <div onClick={() => dispatch(addToWishList(item))} className="wishlist-icon">❤</div>
        </div>
        <button onClick={() => {handleAddToCart(item.id)}} data-id={item.id} className="addBtn">
          Add to Cart
        </button>
      </div>
    );
  });
};

export default ProductCard;

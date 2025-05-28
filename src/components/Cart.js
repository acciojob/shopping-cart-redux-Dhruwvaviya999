import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseTheCount, removeFromCart } from "../slices/cartSlice";
import { addToWishList } from "../slices/wishListSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cart);

  return (
    <>
      <div className="product-cart">
        <h1 className="cart-heading">
          Cart ({cartProducts.length}{" "}
          {cartProducts.length > 1 ? "items" : "item"})
        </h1>
        {cartProducts.length > 0 ? (
          cartProducts.map((product) => {
            return (
              <div key={product.id} className="cart-product-card">
                <img
                  width={100}
                  height={100}
                  className="cart-product-image"
                  src={product.image}
                  alt=""
                />
                <div className="cart-product-info">
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div className="cart-product-title">
                        Title: {product.title}
                      </div>
                      <div className="color">Color: Black, Blue</div>
                    </div>
                    <div className="buttons">
                      <button onClick={() => dispatch(decreaseTheCount(product.id))} id="btn">-</button>
                      <p>{product.count}</p>
                      <button onClick={() => dispatch(addToCart(product))} id="btn">+</button>
                    </div>
                  </div>
                  <div>
                    <div>Size: M, L</div>
                    <div>Rating: {product.rating.rate}</div>
                  </div>
                  <div style={{ textAlign: "end" }}>Price: ${product.price}</div>

                  <div className="remove-and-wishlist">
                    <button onClick={() => dispatch(removeFromCart(product.id))} style={{ cursor: "pointer" }}>REMOVE ITEM X</button>
                    <button onClick={() => dispatch(addToWishList(product))} style={{ cursor: "pointer" }}>MOVE TO WISHLIST ❤</button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h2>Cart is empty !</h2>
        )}
      </div>
    </>
  );
};

export default Cart;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from "../slices/wishListSlice";

const Wishlist = () => {

  const dispatch = useDispatch();

  const wishlists = useSelector(state=> state.wishlist.wishlists);
  console.log(wishlists)

  return (
    <>
    <h1>Wishlists</h1>
    <h4>All Your Wishlists are here</h4>
    <div style={{display:'flex', flexWrap: 'wrap', gap:'2.5rem'}}>
      {wishlists.length > 0 ? (
        wishlists.map((item) => {
          return (
            <div key={item.id} className="product-card">
              <div>
                <img className="product-image" src={item.image} alt="product" />
              </div>
              <div className="product-title">${item.title}</div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="info">
                  <div className="price">Price: ${item.price}</div>
                  <div className="row">Rating: ${item.rating.rate}</div>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeFromWishList(item.id))}
                data-id={item.id}
                className="removeFromWishlist"
              >
                Remove From Wishlist
              </button>
            </div>
          );
        })
      ) : (
        <h2>No Wishlist Found !</h2>
      )}
    </div>
    </>
  );
};

export default Wishlist;

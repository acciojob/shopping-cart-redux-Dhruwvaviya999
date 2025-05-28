import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState:{
        wishlists: [],
    },
    reducers:{
        addToWishList: (state, action) => {
            state.wishlists.push(action.payload);
        },
        removeFromWishList: (state, action) => {
            state.wishlists = state.wishlists.filter(i => i.id !== action.payload);
        },
    }
})

export const { addToWishList, removeFromWishList } = wishlistSlice.actions

export default wishlistSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

// creating firstSlice
const cartSlice = createSlice({
    name: "cart",    // name of the store
    initialState: {
        products: [],    // initially empty array
        quantity: 0,    // this is cart quantity, how many items in the cart initially 
        total: 0,     // total price which is 0 initially
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);    // payload contains our new product
            state.total += action.payload.price * action.payload.quantity;    // this quantity is the product quantity jise hum +, - se inc ya dec kar sakte hai
        }
    },
})

export const { addProduct } = cartSlice.actions;     // exporting actions inside reducer to use in different components like navbar and etc
export default cartSlice.reducer;   // exporting reducer for store
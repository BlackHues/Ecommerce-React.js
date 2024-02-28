// Importing necessary modules from React
import { createContext, useState } from "react";

// Importing the array of all products
import all_product from '../Components/Assets/all_product'

// Creating a new context for managing shop-related state
export const ShopContext = createContext(null);

// Function to generate a default empty cart
const getDefaultCart = () => {
    let cart = {};
    // Initializing cart with 0 quantity for each product
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

// ShopContextProvider component responsible for managing shopping-related state
const ShopContextProvider = (props) => {
    // Initializing cartItems state with the default cart
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Function to add an item to the cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems); // Logging the cartItems after adding an item
    }

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    // Function to calculate the total amount of items in the cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        // Iterating over each item in the cart
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                // Finding the product information of the item
                let itemInfo = all_product.find((product) => product.id === Number(item));
                // Adding the price of the item multiplied by its quantity to the total amount
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    // Value to be provided by the context
    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount };

    // Providing the context value to the children components
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

// Exporting the ShopContextProvider component as default
export default ShopContextProvider;

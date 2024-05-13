import { useContext, useReducer, createContext } from "react";

const Cart = createContext();
const cartReducer = (state, action) => {
  const storedCart = JSON.parse(localStorage.getItem("shopping-cart")) || [];
  switch (action.type) {
    case "ADD_TO_CART":
      // eslint-disable-next-line no-case-declarations
      const existingProductIndex = storedCart.findIndex(
        (product) => product.name === action.payload.name
      );

      if (existingProductIndex !== -1) {
        // If the product is already in the cart, update its quantity
        storedCart[existingProductIndex].qty += 1;
      } else {
        // If the product is not in the cart, add it with quantity 1
        console.log("quantity satu");
        storedCart.push({ ...action.payload, qty: 1 });
      }

      // Save the updated cart data back to localStorage
      localStorage.setItem("shopping-cart", JSON.stringify(storedCart));

      // Return the updated state
      return { ...state, cart: storedCart };
    case "DELETE_FROM_CART":
      // eslint-disable-next-line no-case-declarations
      const updatedCart = storedCart.filter(
        (cartItem) => cartItem.name !== action.payload.name
      );

      // Menyimpan kembali data yang sudah diubah ke localStorage
      localStorage.setItem("shopping-cart", JSON.stringify(updatedCart));

      // Mengupdate state dengan cart yang sudah diubah
      return { ...state, cart: updatedCart };

    case "CLEAR_CART":
      // Mengatur localStorage dengan array kosong
      localStorage.setItem("shopping-cart", JSON.stringify([]));
      return {
        ...state,
        cart: [],
      };
    // kasus lainnya
    default:
      return state;
    case "DECREASE_CART":
      // eslint-disable-next-line no-case-declarations
      const productIndex = storedCart.findIndex(
        (product) => product.name === action.payload.name
      );
      if (storedCart[productIndex].qty > 1) {
        // If the product is already in the cart, update its quantity
        storedCart[productIndex].qty -= 1;
      } else if (storedCart[productIndex].qty === 1) {
        // If the product is not in the cart, add it with quantity 1
        storedCart.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      }
      // Save the updated cart data back to localStorage
      localStorage.setItem("shopping-cart", JSON.stringify(storedCart));
      return { ...state, cart: storedCart };
  }
};

// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: JSON.parse(localStorage.getItem("shopping-cart")) || [],
  });
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;

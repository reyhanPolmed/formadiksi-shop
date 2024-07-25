import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Products } from "./constant/index.jsx";
import { CartState } from "./Context.jsx";
const Home = () => {
  const navigate = useNavigate()
  const [items, setItem] = useState([]);
  const { dispatch, state } = CartState();
  const {cart} = state;
  useEffect(() => {
    setItem(Products);
  }, []);

  console.log(state);
  const addProductToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  };
  const removeFromCart = (product) => {
    dispatch({
      type: "DELETE_FROM_CART",
      payload: product,
    });

  };

  const buyProduct = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    navigate('/cart')
  };

  const categoryGoreng = () => {
    let filterGoreng = Products.filter((item) => item.category == "gorengan");
    setItem(filterGoreng);
  };

  const categoryAsia = () => {
    let filterGoreng = Products.filter((item) => item.category == "asia");
    setItem(filterGoreng);
  };

  const addToCart = (product) => {
    let isProductInCart = cart.filter((item) => item.id === product.id).length > 0;
     return isProductInCart
  }
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-sm w-full flex flex-col gap-5 border">
          {/* hero */}
          <div className="flex justify-center">
            <div className="box-border w-[94%] h-[250px] bg-slate-100 mt-3 rounded-[30px] ">
              <div className="flex justify-between pt-5 px-5">
                <h1 className="text-[40px] w-60">
                  <span className="font-bold">Formadiksi</span> sweet shop
                  <p className="text-xs">
                    Setiap hidangan,sebuah petualangan rasa yang menggugah!
                  </p>
                </h1>
                {/* cart basket */}
                <div className="relative w-10 h-10">
                  <a
                    href="/cart"
                    className="w-8 h-8 flex justify-center items-center border shadow-sm rounded-xl cursor-pointer bg-white mt-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </a>
                  <span className="absolute block top-1 right-2 font-bold">{cart.length}</span>
                </div>
              </div>
              <div className="px-5 mt-3 relative">
                <input
                  type="text"
                  placeholder="Search Items"
                  className="outline-none w-full p-3 px-12  rounded-xl text-slate-500"
                />
                {/* serach symbol */}
                <div className="absolute mt-[-35px] ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-slate-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
                {/*filter symbol  */}
                <div className="absolute mt-[-35px] right-9">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-slate-5 00"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* category */}
          <div className="flex justify-center">
            <div className="w-[94%] flex box-border gap-5 justify-between">
              <div
                className="h-[95px] flex flex-col items-center rounded-[10px] overflow-hidden"
                onClick={() => categoryGoreng()}
              >
                <div className="w-[65px] h-[50px]">
                  <img
                    src="https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/93cd9871-814f-4121-94d9-96430c3111a4_tag-image_1608202898934.jpg?fit=crop&w=200&h=200&auto=format"
                    alt="gorengan"
                  />
                </div>
                <span className="text-xs mt-5">gorengan</span>
              </div>
              <div className="h-[95px] flex flex-col items-center rounded-[10px] overflow-hidden">
                <div className="w-[65px] h-[50px]">
                  <img
                    src="https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/8e133f59-d50f-41b0-bfa7-1a61a074cc8b_tag-image_1608202870005.jpg?fit=crop&w=200&h=200&auto=format"
                    alt="minuman"
                  />
                </div>
                <span className="text-xs mt-5">minuman</span>
              </div>
              <div
                className="h-[95px] flex flex-col items-center rounded-[10px] overflow-hidden"
                onClick={() => categoryAsia()}
              >
                <div className="w-[65px] h-[50px]">
                  <img
                    src="https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/5b23658e-522c-438e-ad95-0eca5d5d0c7f_tag-image_1608203075313.jpg?fit=crop&w=200&h=200&auto=format"
                    alt="makanan asia"
                  />
                </div>
                <span className="text-xs mt-5">Asia</span>
              </div>
              <div className="h-[95px] flex flex-col items-center rounded-[10px] overflow-hidden">
                <div className="w-[65px] h-[50px]">
                  <img
                    src="https://res.cloudinary.com/dfcpydoq8/image/upload/v1715865605/soundSystem_b5deu0.jpg"
                    alt="sound system"
                    className="w-full h-[50px] mt-3"
                  />
                </div>
                  <span className="text-xs mt-5"><a href="/pulsa">Music</a></span>
              </div>
            </div>
          </div>
          {/* product */}
          <div className="flex justify-center">
            <div className="box-border w-[94%] h-full flex flex-col ">
              <div className="flex flex-col w-full h-full gap-5 pb-10">
                {items.map((product, index) => (
                  <div
                    key={index}
                    className="w-full h-[350px] rounded-[30px] flex flex-col p-5 gap-2 box-border border shadow"
                  >
                    {/* judul */}
                    <div className="flex items-center">
                      <span className="font-semibold text-[20px]">
                        {product.name}
                      </span>
                      <div className="flex-1 flex justify-end gap-2">
                        {/* save */}
                        <div className="w-8 h-8 flex justify-center items-center border shadow rounded-xl cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                            />
                          </svg>
                        </div>
                        {/* keranjang */}
                        <div className={`w-8 h-8 flex justify-center items-center border shadow rounded-xl cursor-pointer ${addToCart(product) ? 'bg-slate-700' : 'bg-white'}`} onClick={() => addToCart(product) ? removeFromCart(product) : addProductToCart(product)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`w-5 ${addToCart(product) ? 'text-white' : 'text-black'}`}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* gambar */}
                    <div className="flex-1 flex justify-center">
                      <img
                        src={product.img}
                        alt=""
                        className="w-full h-[175px] rounded-[30px] shadow"
                      />
                    </div>
                    {/* status */}
                    <div>
                      <span className={`${product.status == "Tersedia" ? "text-green-800" : "text-red-700"} font-bold`}>{product.status}</span>
                    </div>
                    {/* harga */}
                    <div className="flex items-center">
                      <span className="font-bold text-[20px] flex-1">
                        Rp {product.price}
                      </span>
                      <button
                        className="px-8 py-1 bg-black text-white rounded-xl font-semibold"
                        onClick={() => {
                          buyProduct(product);
                        }}
                      >
                        Beli Sekarang
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

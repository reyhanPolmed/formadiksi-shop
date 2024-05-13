import { CartState } from "./Context";
import { Link } from "react-router-dom";
const Cart = () => {
  const { dispatch, state } = CartState();
  const { cart } = state;
  console.log(cart);
  const onProductRemove = (product) => {
    dispatch({
      type: "DELETE_FROM_CART",
      payload: product,
    });
  };

  const onProductClear = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const DecreaseCart = (item) => {
    dispatch({
      type: "DECREASE_CART",
      payload: item,
    });
  };
  return (
    <>
      <div className="flex justify-center font-poppins">
        <div className="max-w-sm w-full flex flex-col gap-8 border py-5">
          {/* Checkout */}
          <div className="flex mx-3 justify-between items-center">
            <div className="p-1 bg-slate-200 rounded-full">
              <a href="/">
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
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </a>
            </div>
            <h2 className="font-semibold">Checkout</h2>
            <span className="invisible">back</span>
          </div>

          <div className="flex flex-col mx-3">
            <div className="flex gap-5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                />
              </svg>
              <p className="text-sm font-bold">Store</p>
            </div>

            {/* cart */}
            {cart.length === 0 ? (
              <div className="container font-sans py-24">
                <p className="font-bold uppercase">
                  your cart is currently empty
                </p>
                <Link to="/">
                  <span className="py-2 px-5 w-[130px] text-xs rounded-md border block mt-5">
                    Start Shopping
                  </span>
                </Link>
              </div>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="flex justify-center">
                  <div className="box-border w-full h-[120px] bg-slate-300 mt-3 rounded-2xl">
                    <div className="flex h-full gap-4 box-border px-5">
                      {/* gambar item */}
                      <div className="h-full flex items-center">
                        <img
                          src="https://res.cloudinary.com/dfcpydoq8/image/upload/v1715497216/gorengan_xoeds9.png"
                          alt=""
                          className="w-[120px] rounded-2xl"
                        />
                      </div>
                      {/* detail item */}
                      <div className="h-full flex flex-col justify-center gap-7 flex-1">
                        {/* nama */}
                        <div className="flex justify-between">
                          <span className="text-sm">{item.name}</span>
                          {/* remove logo */}
                          <div
                            className="pointer"
                            onClick={() => {
                              onProductRemove(item);
                            }}
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                fill="currentColor"
                                className="bi bi-trash"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                              </svg>
                            </span>
                          </div>
                        </div>

                        {/* price */}
                        <div className="flex justify-between">
                          <p className="text-sm">Rp. </p>
                          <div className="flex justify-between">
                            {/* button tambah-kurang */}
                            <p className="px-1 border text-xs rounded-lg">
                              <button className="mr-2 p-1">+</button>{item.qty}
                              <button
                                className="ml-2 p-1"
                                onClick={() => {
                                  DecreaseCart(item);
                                }}
                              >
                                -
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* clear cart */}
          <button
            className="p-2 px-5 border w-[120px] text-xs rounded-md bg-slate-500 mx-3"
            onClick={() => {
              onProductClear();
            }}
          >
            Clear Cart
          </button>

          {/* Alamat Pengantaran */}
          <div className="flex flex-col mx-3 gap-1">
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span className="text-sm font-bold">
                Alamat Pengantaran
                <sup> &#40;hanya lingkungann politeknik negeri medan&#41;</sup>
              </span>
            </div>
            <input
              type="text"
              placeholder="masukkan alamat pengantaran"
              className="px-2 py-2 outline-none border rounded-md text-sm"
            />
          </div>

          {/* cart detail */}
          <div className="mx-3 flex flex-col gap-2">
            <div className="flex items-center gap-5">
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
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
              <p className="font-bold text-sm">Ringkasan</p>
            </div>
            <div className="flex flex-col bg-white rounded-md  pt-3 border">
              {/* daftar pesanan */}
              <div className="flex flex-col gap-1">
                <div className="text-sm px-4 flex">
                  <p className="flex-1">RISOL MAYO :</p>
                  <p>Rp 10000</p>
                </div>
              </div>
              {/* total */}
              <div className="text-sm p-4 ">
                <div className="border-t flex pt-2">
                  <p className="flex-1">TOTAL PESANAN : </p>
                  <p>Rp. 20000</p>
                </div>
              </div>
            </div>
          </div>

          {/* button buy */}
          <div className="h-8 bg-black flex justify-center items-center mx-3 box-border rounded-md">
            <p className="text-white font-bold text-sm ">BELI</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

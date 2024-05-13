import { Products } from "./constant/index.jsx";
import { CartState } from "./Context.jsx";
const Home = () => {
  const { dispatch, state } = CartState();
  console.log(state)
  const addProductToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-sm w-full bg-slate-400 flex flex-col gap-5">
          {/* hero */}
          <a href="/cart">
            <div className="flex justify-center">
              <div className="box-border w-[94%] h-[250px] bg-slate-300 mt-3 rounded-[30px]"></div>
            </div>
          </a>
          {/* category */}
          <div className="flex justify-center">
            <div className="w-[94%] flex box-border gap-5 justify-between">
              <div className="h-[74px] bg-slate-200 flex flex-col justify-center items-center rounded-[10px] overflow-hidden">
                <div className="w-[65px]">
                  <h1>logo</h1>
                </div>
                <span className="text-sm">judul</span>
              </div>
              <div className="h-[74px] bg-slate-200 px-5 flex flex-col justify-center items-center rounded-[10px]">
                <h1>logo</h1>
                <span className="text-sm">judul</span>
              </div>
              <div className="h-[74px] bg-slate-200 px-5 flex flex-col justify-center items-center rounded-[10px]">
                <h1>logo</h1>
                <span className="text-sm">judul</span>
              </div>
              <div className="h-[74px] bg-slate-200 px-5 flex flex-col justify-center items-center rounded-[10px]">
                <h1>logo</h1>
                <span className="text-sm">judul</span>
              </div>
            </div>
          </div>
          {/* product */}
          <div className="flex justify-center">
            <div className="box-border w-[94%] h-full bg-slate-300 flex flex-col ">
              <div className="flex flex-col w-full h-full gap-5 pb-10">
                { Products.map((product, index) => (
                    <div key={index} className="w-full h-[300px] bg-slate-100 rounded-[30px] flex flex-col p-5 gap-2 box-border">
                    {/* judul */}
                    <div className="flex items-center">
                      <span className="font-semibold text-[25px]">{product.name}</span>
                      <div className="flex-1 flex justify-end gap-2">
                        {/* save */}
                        <div className="w-8 h-8 flex justify-center items-center bg-slate-500 rounded-xl">
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
                        <div className="w-8 h-8 flex justify-center items-center bg-slate-500 rounded-xl">
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
                        </div>
                      </div>
                    </div>
                    {/* gambar */}
                    <div className="flex-1 flex justify-center">
                      <img src={product.img} alt="" className="w-[250px] h-[165px] rounded-2xl"/>
                    </div>
                    {/* harga */}
                    <div className="flex items-center">
                      <span className="font-bold text-[25px] flex-1">
                        {product.price}
                      </span>
                      <button className="px-8 py-1 bg-blue-500 text-white rounded-xl font-semibold" onClick={() => {
                            addProductToCart(product)}}>
                        Buy Now
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

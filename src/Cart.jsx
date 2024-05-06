const Cart = () => {
  return (
    <>
      <div className="flex justify-center font-poppins">
        <div className="max-w-sm w-full flex flex-col gap-8 border">
   
         {/* Checkout */}
          <div className="flex mx-3 justify-between items-center">
            <div className="p-1 bg-slate-200 rounded-full">
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
            </div>
            <h2 className="font-semibold">Checkout</h2>
            <span className="invisible">back</span>
          </div>

          {/* cart */}
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
            <div className="flex justify-center">
              <div className="box-border w-full h-[150px] bg-slate-300 mt-3 rounded-2xl"></div>
            </div>
            <div className="flex justify-center">
              <div className="box-border w-full h-[150px] bg-slate-300 mt-3 rounded-2xl"></div>
            </div>
            <div className="flex justify-center">
              <div className="box-border w-full h-[150px] bg-slate-300 mt-3 rounded-2xl"></div>
            </div>
          </div>

          {/* clear cart */}
          <button className="p-2 px-5 border w-[120px] text-xs rounded-md bg-slate-500 mx-3">
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

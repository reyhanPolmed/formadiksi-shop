const cart = () => {
  return (
    <>
      <div className="flex justify-center px-10">
        <div className="max-w-sm w-full bg-slate-400 flex flex-col gap-5">
          {/* cart */}
          <div className="flex flex-col">
            <div className="flex justify-center">
              <div className="box-border w-[94%] h-[150px] bg-slate-300 mt-3 rounded-[30px]"></div>
            </div>
            <div className="flex justify-center">
              <div className="box-border w-[94%] h-[150px] bg-slate-300 mt-3 rounded-[30px]"></div>
            </div>
            <div className="flex justify-center">
              <div className="box-border w-[94%] h-[150px] bg-slate-300 mt-3 rounded-[30px]"></div>
            </div>
          </div>

          {/* clear cart */}
          <button className="p-2 px-5 border w-[120px] text-xs rounded-md ml-3">
            Clear Cart
          </button>

          {/* cart detail */}
          <div className="flex justify-center">
            <div className="mx-[5%] mt-8 w-[94%]">
              {/* Alamat Pengantaran */}
              <div className="flex flex-col">
                <span>Alamat Pengantaran<sup>hanya lingkungann politeknik negeri medan</sup></span>
                <textarea name="alamat" id="" placeholder="masukkan alamat pengantaran" className="p-2 outline-none border"></textarea>
              </div>
              {/* ringkasan */}
              <p className="font-bold text-sm py-4">RINGKASAN</p>
              <p className="text-sm border-t border-solid border-5 border-slate-300 py-4">
                TOTAL PESANAN : <span className="font-bold">Rp {}</span>
              </p>
              <div className="w-full h-8 bg-black flex justify-center items-center">
                <p className="text-white font-bold text-sm ">BELI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default cart;

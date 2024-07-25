// eslint-disable-next-line react/prop-types
const Alert = ({setAlert}) => {
  return (
    <>
      <div className="flex flex-col gap-4 font-bold text-lg justify-center items-center mt-20">
        <span>SEBELUM MELAKUKAKAN TRANSAKSI </span>
        <span className="text-base font-semibold flex text-center">
          mohon melakukan pembayaran terlebih dahulu melalui nomor tertera
        </span>
        <div className="flex flex-col gap-4 items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg"
            alt="logo dana"
            className="w-36"
          />
          <span className="text-2xl flex items-center">0823-8327-2872 <span className="text-sm ml-4">&#40; reyhan &#41;</span></span>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="w-40 h-9 bg-black text-white rounded-xl font-bold mt-10" onClick={() => setAlert()}>
          Baik
        </button>
      </div>
    </>
  );
};

export default Alert;

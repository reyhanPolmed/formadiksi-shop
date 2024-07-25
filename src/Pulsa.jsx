import { useState } from "react";
import { PulsaTelkomsel, PulsaAxis } from "./constant";
import { ThreeDots } from "react-loader-spinner";
import Alert from "./component/Alert";
const Pulsa = () => {
  const [click, setClick] = useState(false);
  const [alert, setAlert] = useState(false);
  const [contoh, setContoh] = useState({});
  const [noHp, setNoHp] = useState("");
  const [loading, setLoading] = useState(false);
  console.log("loading : ", loading);

  const validNoHp = noHp.length == 12 && noHp.length >= 4;

  const handleClick = ({ item }) => {
    setClick(!click);
    setContoh(item);
  };

  const handleClickAlert = () => {
    setAlert(!alert);
  };

  const handleAlert = () => {
    setAlert(false);
  };

  console.log("alert", alert);

  let pilihanPulsa;
  let logoProvider;
  const nomorAxis =
    noHp.includes("0831") || (noHp.includes("0838") && noHp.length == 12);
  const nomorTelkomsel =
    noHp.includes("0823") || (noHp.includes("0852") && noHp.length == 12);
  console.log(nomorAxis);

  if (nomorTelkomsel) {
    pilihanPulsa = (
      <div className="max-w-sm w-full flex flex-col gap-5 overflow-hidden">
        <div className="mt-44">
          <div className="flex flex-col ">
            {validNoHp
              ? PulsaTelkomsel.map((item, index) => (
                  <div
                    className="flex gap-1 py-4 border-b border-slate-400 mx-1 cursor-pointer"
                    onClick={() => handleClick({ item })}
                    key={index}
                  >
                    <div>
                      <img
                        src="https://res.cloudinary.com/dfcpydoq8/image/upload/v1721822588/logo-telkomsel_xhjnx7.png"
                        alt="logo-telkomsel"
                        className="w-16"
                      />
                    </div>
                    <div className="flex flex-col text-xs gap-1">
                      <span>{item.nama}</span>
                      <span>{item.deskripsi}</span>
                      <span>Rp. {item.harga}</span>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    );
    logoProvider =
      "https://res.cloudinary.com/dfcpydoq8/image/upload/v1721822588/logo-telkomsel_xhjnx7.png";
  } else if (nomorAxis) {
    pilihanPulsa = (
      <div className="max-w-sm w-full flex flex-col gap-5 overflow-hidden">
        <div className="mt-44">
          <div className="flex flex-col ">
            {validNoHp
              ? PulsaAxis.map((item, index) => (
                  <div
                    className="flex gap-4 py-4 border-b border-slate-400 mx-1 items-center cursor-pointer"
                    onClick={() => handleClick({ item })}
                    key={index}
                  >
                    <div>
                      <img
                        src="https://res.cloudinary.com/dfcpydoq8/image/upload/v1721884287/pngegg_islu6c.png"
                        alt="logo-axis"
                        className="w-14 ml-2"
                      />
                    </div>
                    <div className="flex flex-col text-xs gap-1">
                      <span>{item.nama}</span>
                      <span>{item.deskripsi}</span>
                      <span>Rp. {item.harga}</span>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    );
    logoProvider =
      "https://res.cloudinary.com/dfcpydoq8/image/upload/v1721884287/pngegg_islu6c.png";
  }

  const handleChange = (e) => {
    setNoHp(e.target.value);
    setLoading(true);
    // Mulai timeout baru setiap kali input berubah
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  let content = (
    <>
      <div className="flex justify-center">
        {/* header input */}
        <div className="fixed max-w-sm w-full flex flex-col gap-5 bg-white">
          {/* navbar */}
          <div className="flex justify-between px-2 h-10 items-center bg-blue-600 text-white font-bold">
            <div className="flex gap-4 items-center">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  />
                </svg>
              </a>
              <span className="font-bold text-lg">Pulsa</span>
            </div>
            <button
              className="text-6xl opacity-0 fade-in mr-2"
              onClick={handleClickAlert}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                />
              </svg>
            </button>
          </div>
          {/* input nomor hp */}
          <div className="px-4">
            <label htmlFor="nomor-hp" className="text-sm">
              Masukkan Nomor Handphone
            </label>
            <div className="relative px-1 mt-2">
              <input
                type="text"
                placeholder="Nomor Handphone"
                className="text-sm w-full border-b py-1 border-slate-400 outline-none px-1"
                onChange={handleChange}
              />
              <i className="bx bxs-contact absolute right-1 top-2"></i>
            </div>
          </div>
          {/* category */}
          {validNoHp && !loading ? (
            <div className="flex gap-1">
              <span className="w-20 h-8 text-sm flex items-center justify-center">
                Semua
              </span>
              <span className="w-20 h-8 text-sm flex items-center justify-center border-b border-slate-400">
                Reguler
              </span>
              <span className="w-20 h-8 text-sm flex items-center justify-center">
                Transfer
              </span>
              <span className="w-20 h-8 text-sm flex items-center justify-center">
                Telepon
              </span>
              <span className="w-20 h-8 text-sm flex items-center justify-center">
                SMS
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* pilihan pulsa */}
        {loading ? (
          <p className="max-w-sm w-full flex justify-center mt-48 z-10">
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="blue"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </p>
        ) : (
          pilihanPulsa
        )}
        {/* informasi pelanggan */}
        <div
          className={`fixed max-w-sm w-full bg-white border h-60 ${
            click && noHp.length == 12 ? "bottom-0" : "-bottom-60"
          }  transition-all rounded-t-xl`}
        >
          <div className="p-4 flex flex-col justify-between h-full">
            <p className="text-[14px]">Informasi Pelanggan</p>
            <div className="flex gap-1 py-4  mx-1">
              <div>
                <img src={logoProvider} alt="logo-provider" className="w-20" />
              </div>
              <div className="flex flex-col text-xs gap-2">
                <span>{contoh.nama}</span>
                <span>{contoh.deskripsi}</span>
                <span className="text-[14px]">{noHp}</span>
              </div>
            </div>
            <span className="text-[14px]">Detail Pembayaran</span>
            <div className="flex justify-between">
              <span className="text-[14px]">Total Harga</span>
              <span className="text-[14px] text-red-600">
                Rp {contoh.harga}
              </span>
            </div>
            <button className="bg-blue-600 text-white rounded-xl h-8">
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>
      {/* alert */}
      <div className="flex justify-center">
        <div
          className={`fixed max-w-sm w-full border min-h-screen  ${
            alert ? "top-0" : "-top-full"
          }  transition-all bg-white`}
        >
          <Alert setAlert={handleAlert} />
        </div>
      </div>
    </>
  );

  //   const CheckoutProduct = () => {
  //     const stok = cart.filter((item) => item.status == "Habis").length > 0;
  //     if(stok) {
  //       setPesanStok("Mohon periksa stok item yang anda beli")
  //       return
  //     } else {
  //       setPesanStok("")
  //     }

  //     if (cart.length === 0) {
  //       console.error("Error: Product data not loaded.");
  //       return;
  //     } else if (!nama && !alamat) {
  //       setPesanError("lengkapi data anda!");
  //       return;
  //     }

  //     // Mendapatkan nama produk

  //     // Membuat pesan WhatsApp
  //     let message = "Halo! Saya ingin membuat pesanan \n";

  //     // informasi pemesan
  //     message += `nama: ${nama} \n`;
  //     message += `alamat: ${alamat} \n`;

  //     // Menambahkan nama produk ke pesan
  //     message += "\nDaftar Pesanan: \n";
  //     message += cart
  //       .map(
  //         (item) =>
  //           `-${item.name} ${item.deskripsi} x ${item.qty} : Rp ${
  //             item.price * item.qty
  //           } \n`
  //       )
  //       .join("");

  //     // Menambahkan total harga pesanan ke pesan
  //     message += "\nTotal Yang Harus di Bayar : Rp " + cartTotalAmount;

  //     // Mengarahkan ke aplikasi WhatsApp dengan pesan otomatis
  //     window.location.href = `https://wa.me/6285372117078/?text=${encodeURIComponent(
  //       message
  //     )}`;
  //   };
  return content;
};

export default Pulsa;

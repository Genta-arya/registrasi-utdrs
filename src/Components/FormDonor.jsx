import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { Register, ValidateKTP } from "../Services/FormRegister";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import { toast } from "sonner";
import Icon from "./Icon";
import ktp from "../assets/ktp-elektronik.png";
import { p } from "framer-motion/client";
const FormDonor = () => {
  const [noKtp, setNoKtp] = useState("");
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [rememberKtp, setRememberKtp] = useState(false);

  useEffect(() => {
    const savedKtp = localStorage.getItem("savedNoKtp");
    if (savedKtp) {
      setNoKtp(savedKtp);
      setRememberKtp(true);
    }
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "no_hp") {
      if (!/^\d*$/.test(e.target.value)) {
        toast.info("Form hanya boleh diisi angka!");
      }

      if (e.target.value.length > 15) {
        toast.info("Form No Hp tidak boleh lebih dari 15 angka!");
      }
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if (noKtp.length !== 16) {
      setMessage({ type: "error", text: "No KTP harus 16 karakter!" });
      toast.info("No KTP harus 16 karakter! ");
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await ValidateKTP(noKtp);
      setFormData(response.data);
      setIsVerified(true);
      if (rememberKtp) {
        localStorage.setItem("savedNoKtp", noKtp);
      } else {
        localStorage.removeItem("savedNoKtp");
      }
      setMessage({
        type: "success",
        text: "Verifikasi berhasil.   Silahkan Periksa Biodata Anda",
      });
      toast.success("Verifikasi berhasil.   Silahkan Periksa Biodata Anda");
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.message || "Terjadi kesalahan!",
      });
      toast.error(error.response?.data.message || "Terjadi Kesalahan");
      setIsVerified(false);
    }

    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      await Register(formData);
      setMessage({ type: "success", text: "Registrasi berhasil!" });
      toast.success("Registrasi berhasil!");
      setFormData({});
      setNoKtp("");
      setIsVerified(false);
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.message || "Terjadi kesalahan!",
      });
      toast.error(error.response?.data?.message || "Terjadi kesalahan!");
    }

    setLoading(false);
  };

  const handleCancel = () => {
    setIsVerified(false);
    setFormData({});
    setMessage(null);
  };

  return (
    <div>
      {isVerified && (
        <>
          <h2 className="lg:text-2xl md:text-xl text-base lg:pt-12 md:py-t pt-4 text-gray-700 text-center tracking-wider font-extrabold mb-4 ">
            Form Registrasi Pendonor
          </h2>
          <div className="flex justify-center mb-12">
            <Icon w={"w-32 md:w-40 lg:w-40"} />
          </div>
        </>
      )}

      {message && (
        <div
          className={`relative p-3 mb-4 text-sm rounded flex justify-between items-center ${
            message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          <span>{message.text}</span>
          <button className="ml-2 text-lg" onClick={() => setMessage(null)}>
            <AiOutlineClose />
          </button>
        </div>
      )}

      {!isVerified ? (
        <form onSubmit={handleVerify}>
          <div>
            <div className="flex justify-center mt-12 lg:mb-0 md:mb-0 mb-8">
              <img src={ktp} alt="" className="w-40 md:w-80 lg:w-80 " />
            </div>
            <label className=" mb-3 pl-1 items-center  font-semibold text-gray-500 flex gap-1">
              <p>No KTP </p>
              <span className="text-red-500 text-xs">
                {noKtp.length > 0 && <p className="">({0 + noKtp.length}/16)</p>}
              </span>
            </label>
            <input
              type="text"
              inputMode="numeric"
              name="noKtp"
              maxLength="16"
              placeholder="Masukkan 16 digit No KTP"
              value={noKtp}
              onChange={(e) => setNoKtp(e.target.value)}
              className="w-full p-2 border rounded-lg mb-8  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
              required
            />
          </div>

          <div className="-mt-4">
            <Button
              type="submit"
              text="Verifikasi KTP"
              disabled={noKtp.length !== 16}
              loading={loading}
            />
          </div>

          <div className="flex items-center mb-6 pl-2 mt-4">
            <input
              type="checkbox"
              id="rememberKtp"
              checked={rememberKtp}
              onChange={() => setRememberKtp(!rememberKtp)}
              className="
      w-5 h-5 border-2 border-red-600 rounded-sm  text-white
      appearance-none cursor-pointer 
      checked:bg-red-600 checked:border-red-600 
      focus:ring-2 focus:ring-red-500 
      "
            />
            <label
              htmlFor="rememberKtp"
              className="ml-2 text-sm font-medium text-gray-700"
            >
              Simpan
            </label>
          </div>
        </form>
      ) : (
        <>
          <label className="block mb-3 pl-1  font-semibold text-gray-500">
            No KTP
          </label>
          <input
            type="text"
            inputMode="numeric"
            name="noKtp"
            maxLength="16"
            placeholder="Masukkan No KTP"
            value={noKtp}
            readOnly
            className="w-full cursor-default bg-gray-100 p-2 border rounded-lg mb-8  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
            required
          />
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <label className="block mb-3 pl-1 font-semibold text-gray-500">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama_lengkap"
                  value={formData.nama_lengkap || ""}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-3 pl-1 font-semibold text-gray-500">
                  Alamat
                </label>
                <textarea
                  name="alamat"
                  value={formData.alamat || ""}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
                  placeholder="Masukan alamat..."
                  required
                  rows={2}
                ></textarea>
              </div>

              <div>
                <label className="block mb-3 pl-1 font-semibold text-gray-500">
                  Jenis Kelamin
                </label>
                <select
                  name="jenis_kelamin"
                  value={formData.jenis_kelamin || ""}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
                  required
                >
                  <option value="">Pilih...</option>
                  <option value="L">Laki-laki</option>
                  <option value="P">Perempuan</option>
                </select>
              </div>

              <div>
                <label className="block mb-3 pl-1 font-semibold text-gray-500">
                  No HP
                </label>
                <input
                  type="text"
                  name="no_hp"
                  value={formData.no_hp || ""}
                  onChange={handleChange}
                  inputMode="numeric"
                  maxLength="15"
                  className="w-full p-2 border rounded-lg  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-3 pl-1 font-semibold text-gray-500">
                  Pekerjaan
                </label>
                <select
                  name="pekerjaan"
                  value={formData.pekerjaan || ""}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
                  required
                >
                  <option value="">Pilih...</option>
                  <option value="TNI_POLRI">TNI/POLRI</option>
                  <option value="PNS_Swasta">PNS/Swasta</option>
                  <option value="Petani_Buruh">Petani/Buruh</option>
                  <option value="Mahasiswa_Pelajar">Mahasiswa/Pelajar</option>
                  <option value="Pedagang">Pedagang</option>
                </select>
              </div>

              <div>
                <label className="block mb-3 pl-1 font-semibold text-gray-500">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  name="tanggal_lahir"
                  value={
                    formData.tanggal_lahir
                      ? DateTime.fromISO(formData.tanggal_lahir).toISODate()
                      : ""
                  }
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-3 pl-1 font-semibold text-gray-500">
                  Tanggal Donor Terakhir
                </label>
                <input
                  type="date"
                  name="tanggal_donor_terakhir"
                  readOnly
                  value={
                    formData.tanggal_donor_terakhir
                      ? DateTime.fromISO(
                          formData.tanggal_donor_terakhir
                        ).toISODate()
                      : ""
                  }
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-3 pl-1 font-semibold text-gray-500">
                  Bersedia Donor Saat Puasa?
                </label>
                <select
                  name="bersedia_donor_puasa"
                  value={formData.bersedia_donor_puasa || ""}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
                  required
                >
                  <option value="">Pilih...</option>
                  <option value="Ya">Ya</option>
                  <option value="Tidak">Tidak</option>
                </select>
              </div>

              <div className="col-span-full">
                <label className="block mb-3 pl-1 font-semibold text-gray-500">
                  Donor ke
                </label>
                <input
                  type="text"
                  name="no_hp"
                  value={formData.donor_ke || ""}
                  onChange={handleChange}
                  maxLength="15"
                  readOnly
                  className="w-full cursor-default p-2 border rounded-lg  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <Button type="submit" text={"Daftar"} loading={loading} />
              <button
                onClick={handleCancel}
                className="border mt-4 border-gray-500  text-black font-bold  w-full py-2 rounded-lg hover:opacity-80 transition-all  "
              >
                Kembali
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default FormDonor;

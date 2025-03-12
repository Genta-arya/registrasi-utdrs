import { useState } from "react";
import { DateTime } from "luxon";
import { Register, ValidateKTP } from "../Services/FormRegister";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import { toast } from "sonner";

const FormDonor = () => {
  const [noKtp, setNoKtp] = useState("");
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // no hp tidak boleh lebih dari 15 dan berupa angka
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
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await ValidateKTP(noKtp);
      setFormData(response.data);
      setIsVerified(true);
      setMessage({
        type: "success",
        text: "Verifikasi berhasil.   Silahkan Periksa Biodata Anda",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.message || "Terjadi kesalahan!",
      });
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
      setFormData({});
      setNoKtp("");
      setIsVerified(false);
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.message || "Terjadi kesalahan!",
      });
    }

    setLoading(false);
  };

  const handleCancel = () => {
    setIsVerified(false);
    setFormData({}); // Reset form data
    setMessage(null);
  };

  return (
    <div>
      <h2 className="text-2xl py-8 lg:py-12 md:py-12 font-bold text-center mb-4">
        Form Registrasi Pendonor
      </h2>

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
            <label className="block mb-3 pl-1 font-semibold text-gray-500">
              No KTP
            </label>
            <input
              type="text"
              name="noKtp"
              maxLength="16"
              placeholder="Masukkan No KTP"
              value={noKtp}
              onChange={(e) => setNoKtp(e.target.value)}
              className="w-full p-2 border rounded-lg mb-8  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
              required
            />
          </div>
          <Button type="submit" text="Verifikasi Data" loading={loading} />
        </form>
      ) : (
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
              Batal
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormDonor;

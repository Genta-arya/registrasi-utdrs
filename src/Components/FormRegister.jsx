import { useState } from "react";
import { Register } from "../Services/FormRegister";
import { toast } from "sonner";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";
import Icon from "./Icon";

const FormRegister = () => {
  const [formData, setFormData] = useState({
    no_ktp: "",
    nama_lengkap: "",
    alamat: "",
    jenis_kelamin: "",
    no_hp: "",
    pekerjaan: "",
    tanggal_lahir: "",
    tanggal_donor_terakhir: "",

    bersedia_donor_puasa: "",
  });

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "no_ktp") {
      if (!/^\d*$/.test(value))
        return toast.info("Form hanya boleh diisi angka!");
      if (value.length > 16)
        return toast.info("Form KTP tidak boleh lebih dari 16 angka!");
    }

    if (name === "no_hp") {
      if (!/^\d*$/.test(value))
        return toast.info("Form hanya boleh diisi angka!");
      if (value.length > 16)
        return toast.info("Form No Hp tidak boleh lebih dari 15 angka!");
    }

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {

      await Register(formData);

      setMessage({ type: "success", text: "Registrasi berhasil!" });
      toast.success("Registrasi berhasil!");
      setFormData({
        no_ktp: "",
        nama_lengkap: "",
        alamat: "",
        jenis_kelamin: "",
        no_hp: "",
        pekerjaan: "",
        tanggal_lahir: "",

        bersedia_donor_puasa: "",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.message || "Terjadi kesalahan!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <h2 className="lg:text-2xl md:text-xl text-base lg:pt-12 md:pt-8 pt-4 text-gray-700 text-center tracking-wider font-extrabold mb-4 ">
        Form Registrasi Pendonor
      </h2>
      <div className="flex justify-center mb-12">
            <Icon w={"w-32 md:w-40 lg:w-40"} />
          </div>

      {message && (
        <div
          className={`relative p-3 mb-4 text-sm rounded flex justify-between items-center ${
            message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          <span>{message.text}</span>
          <button
            className="ml-2 text-lg"
            onClick={() => setMessage(null)}
            aria-label="Close"
          >
            <AiOutlineClose />
          </button>
        </div>
      )}
      <div></div>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <label className="block pl-1  mb-2 font-semibold text-gray-500">
              No KTP
            </label>
            <input
              type="text"
              name="no_ktp"
              inputMode="numeric"
              maxLength="16"
              value={formData.no_ktp}
              placeholder="Masukan no KTP"
              onChange={handleChange}
              className="w-full p-2 border rounded-lg pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
              pattern="\d*"
              required
            />
          </div>

          <div>
            <label className="block pl-1  mb-2 font-semibold text-gray-500">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="nama_lengkap"
              placeholder="Masukan nama lengkap"
              value={formData.nama_lengkap}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block pl-1  mb-2 font-semibold text-gray-500">
              Alamat
            </label>
            <textarea
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
              placeholder="Masukan alamat"
              required
              rows={2}
            ></textarea>
          </div>

          <div>
            <label className="block pl-1 mb-2 font-semibold text-gray-500">
              Jenis Kelamin
            </label>
            <select
              name="jenis_kelamin"
              value={formData.jenis_kelamin}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
              required
            >
              <option value="">Pilih</option>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>

          <div>
            <label className="block pl-1 mb-2 font-semibold text-gray-500">
              No HP
            </label>
            <input
              type="text"
              name="no_hp"
              placeholder="Masukan no HP"
              value={formData.no_hp}
              onChange={handleChange}
              inputMode="numeric"
              className="w-full p-2 border rounded-lg  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
              pattern="\d*"
              maxLength="15"
              required
            />
          </div>

          <div>
            <label className="block pl-1 mb-2 font-semibold text-gray-500">
              Pekerjaan
            </label>
            <select
              name="pekerjaan"
              value={formData.pekerjaan}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
              required
            >
              <option value="">Pilih</option>
              <option value="TNI_POLRI">TNI/POLRI</option>
              <option value="PNS_Swasta">PNS/Swasta</option>
              <option value="Petani_Buruh">Petani/Buruh</option>
              <option value="Mahasiswa_Pelajar">Mahasiswa/Pelajar</option>
              <option value="Pedagang">Pedagang</option>
            </select>
          </div>

          <div>
            <label className="block pl-1 mb-2 font-semibold text-gray-500">
              Tanggal Lahir
            </label>
            <input
              type="date"
              name="tanggal_lahir"
              value={formData.tanggal_lahir}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
              required
            />
          </div>

          <div className="">
            <label className="block pl-1 mb-2 font-semibold text-gray-500">
              Bersedia Donor Saat Puasa?
            </label>
            <select
              name="bersedia_donor_puasa"
              value={formData.bersedia_donor_puasa}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg  pl-4 pr-4 focus:ring-2 focus:ring-muda focus:outline-none"
              required
            >
              <option value="">Pilih</option>
              <option value="Ya">Ya</option>
              <option value="Tidak">Tidak</option>
            </select>
          </div>
        </div>

        <div className="mt-8">
          <Button type={"submit"} text={"Daftar"} loading={loading} />
        </div>
      </form>
    </div>
  );
};

export default FormRegister;

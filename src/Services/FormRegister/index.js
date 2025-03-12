import axiosInstance from "../AxiosInstance";

export const ValidateKTP = async (no_ktp) => {
  try {
    const response = await axiosInstance.post("/check-ktp", { no_ktp });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const Register = async (formData) => {
  try {
    const response = await axiosInstance.post("/form/registration", {
      no_ktp: formData.no_ktp,
      nama_lengkap: formData.nama_lengkap,
      alamat: formData.alamat,
      jenis_kelamin: formData.jenis_kelamin,
      no_hp: formData.no_hp,
      pekerjaan: formData.pekerjaan,
      tanggal_lahir: formData.tanggal_lahir,
      tanggal_donor_terakhir: formData.tanggal_donor_terakhir,
      bersedia_donor_puasa: formData.bersedia_donor_puasa,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

import { useState } from "react";
import { Toaster } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import RegisterPage from "./Components/Tabs";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/footer";
import bg from "./assets/bg.webp";

function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div
      className="relative flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>

      <Navbar />

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black backdrop-blur-md bg-opacity-50 flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-xl lg:max-w-[60%] max-w-lg w-full text-center relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-red-600">
                🔔 Penting! Cara Registrasi
              </h2>

              <div className="mt-4 text-gray-700 text-sm md:text-base space-y-3 text-left">
                <p>
                  ✅{" "}
                  <span className="font-semibold text-sky-500">
                    Pendaftaran Baru
                  </span>
                  : Pilih opsi ini jika{" "}
                  <span className="text-red-700 font-bold underline">
                    **Anda baru pertama kali donor darah** dan **belum
                    terdaftar** dalam sistem
                  </span>
                  . Silakan isi biodata lengkap agar data Anda tersimpan.
                </p>
                <p>
                  ✅{" "}
                  <span className="font-semibold text-sky-500">
                    Donor Darah
                  </span>
                  : Jika Anda{" "}
                  <span className="text-red-700 font-bold underline">
                    **sudah pernah donor sebelumnya**, cukup masukkan **Nomor
                    KTP**
                  </span>
                  . Jika data Anda ditemukan, sistem akan menampilkan biodata
                  terakhir yang tercatat.
                </p>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition font-semibold"
              >
                Saya Mengerti
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="relative flex-grow mt-12 lg:mt-16 md:mt-12 lg:mb-3 flex items-center justify-center p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <RegisterPage />
      </motion.div>

      {/* Footer */}
      <Toaster
        position="bottom-center"
        richColors
        closeButton
        duration={3000}
      />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;

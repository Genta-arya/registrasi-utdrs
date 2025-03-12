import { useState } from "react";
import { Toaster } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import RegisterPage from "./Components/Tabs";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/footer";

function App() {
  const [showModal, setShowModal] = useState(true); // Modal muncul saat pertama kali buka

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Modal Informasi */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50 px-4"
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
              {/* Judul Modal */}
              <h2 className="text-2xl font-bold text-red-600">
                🔔 Penting! Cara Registrasi
              </h2>

              {/* Isi Modal */}
              <div className="mt-4 text-gray-700 text-sm md:text-base space-y-3 text-left">
                <p>
                  ✅{" "}
                  <span className="font-semibold text-sky-500">
                    Registrasi Biodata
                  </span>
                  : Pilih opsi ini jika{" "}
                  <span className="text-bata font-bold underline">
                    **Anda baru pertama kali donor darah** dan **belum
                    terdaftar** dalam sistem
                  </span>
                  . Silakan isi biodata lengkap agar data Anda tersimpan.
                </p>
                <p>
                  ✅{" "}
                  <span className="font-semibold text-sky-500">
                    Registrasi Donor Darah
                  </span>
                  : Jika Anda{" "}
                  <span className="text-bata font-bold underline">
                    **sudah pernah donor sebelumnya**, cukup masukkan **Nomor
                    KTP**
                  </span>
                  . Jika data Anda ditemukan, sistem akan menampilkan biodata
                  yang terakhir kali tercatat dalam sistem.
                </p>
              </div>

              {/* Tombol Tutup */}
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

      {/* Main Content */}
      <motion.div
        className="flex-grow mt-12 lg:mt-16 md:mt-12 flex items-center justify-center bg-white p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <RegisterPage />
      </motion.div>

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

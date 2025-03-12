import { Toaster } from "sonner";
import FormRegister from "./Components/FormRegister";
import RegisterPage from "./Components/Tabs";
import Navbar from "./Components/Navbar";

import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content - Gunakan flex-grow untuk mengisi ruang kosong */}
      <div className="flex-grow mt-12 lg:mt-16 md:mt-12 flex items-center justify-center bg-white p-4">
        <RegisterPage />
      </div>

      {/* Toaster Notification */}
      <Toaster position="bottom-center" richColors closeButton duration={3000} />

      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

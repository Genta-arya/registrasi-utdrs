import { Toaster } from "sonner";
import { motion } from "framer-motion";
import RegisterPage from "./Components/Tabs";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

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

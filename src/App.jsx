import { Toaster } from "sonner";
import FormRegister from "./Components/FormRegister";
import RegisterPage from "./Components/Tabs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen lg:mt-20 md:mt-0 mt-11 p-4 w-full flex items-center justify-center bg-white">
        <RegisterPage />
        <Toaster
          position="bottom-center"
          richColors
          closeButton
          duration={3000}
        />
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;

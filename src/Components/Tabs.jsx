import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FormRegister from "./FormRegister";
import FormDonor from "./FormDonor";

const RegisterPage = () => {
  const [activeTab, setActiveTab] = useState("registrasiData");

  return (
    <div className=" border border-gray-300 w-full text-xs lg:text-base md:text-base lg:max-w-[85%] md:max-w-[95%] max-w-full mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {/* Tabs Navigation */}
      <div className="flex mb-4">
        <button
          className={`flex-1 p-2 transition-colors duration-300 ${
            activeTab === "registrasiData"
              ? "bg-bata text-white rounded-tl-full rounded-bl-full"
              : "bg-gray-200 text-gray-700  rounded-tl-full rounded-bl-full"
          }`}
          onClick={() => setActiveTab("registrasiData")}
        >
          Registrasi Biodata
        </button>
        <button
          className={`flex-1 p-2 transition-colors duration-300 ${
            activeTab === "registrasiDonor"
              ? "bg-bata text-white rounded-tr-full rounded-br-full"
              : "bg-gray-200 text-gray-700 rounded-tr-full rounded-br-full"
          }`}
          onClick={() => setActiveTab("registrasiDonor")}
        >
          Registrasi Donor Darah
        </button>
      </div>

      {/* Tabs Content with Animation */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {activeTab === "registrasiData" && (
            <motion.div
              key="registrasiData"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <FormRegister />
            </motion.div>
          )}

          {activeTab === "registrasiDonor" && (
            <motion.div
              key="registrasiDonor"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <FormDonor />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RegisterPage;

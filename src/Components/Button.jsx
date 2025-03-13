import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { PulseLoader } from "react-spinners";

const Button = ({ children, onClick, text, loading, type, disabled }) => {
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptchaChange = (value) => {
    setRecaptchaToken(value); 
  };

  return (
    <div>
      <button
        className="bg-bata disabled:bg-gray-700 duration-300 disabled:opacity-70 mt-2 font-bold w-full py-2 rounded-lg hover:opacity-80 transition-all text-white"
        type={type}
        onClick={onClick}
        disabled={loading || disabled || !recaptchaToken}
      >
        {loading ? (
          <PulseLoader
            className="flex justify-center items-center mt-1"
            color="white"
            size={8}
          />
        ) : (
          text
        )}
      </button>

      <div className="mb-6 mt-4 text-xs flex justify-center">
        <ReCAPTCHA
          type="image"
          size="normal"
          sitekey="6Lcv3L4qAAAAAJoWWTTOuo9SubeanyIoNZ2wPKj5"
          onChange={handleRecaptchaChange}
        />
      </div>
    </div>
  );
};

export default Button;

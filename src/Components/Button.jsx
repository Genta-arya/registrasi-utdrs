import React from "react";
import { PropagateLoader, PulseLoader } from "react-spinners";

const Button = ({ children, onClick, text, loading, type }) => {
  return (
    <div>
      <button
        className="bg-bata disabled:opacity-70 mt-2 font-bold w-full py-2 rounded-lg hover:opacity-80 transition-all  text-white"
        type={type}
        onClick={onClick}
        disabled={loading}
      >
        {loading ? (
          <>
            <PulseLoader
              className="flex justify-center items-center mt-1"
              color="white"
              size={8}
            />
          </>
        ) : (
          <>{text}</>
        )}
      </button>
    </div>
  );
};

export default Button;

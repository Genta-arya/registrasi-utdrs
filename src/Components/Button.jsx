import React from "react";
import { PropagateLoader, PulseLoader } from "react-spinners";

const Button = ({ children, onClick, text, loading, type , disabled }) => {
  return (
    <div>
      <button
        className="bg-bata disabled:bg-gray-700 duration-300 disabled:opacity-70 mt-2 font-bold w-full py-2 rounded-lg hover:opacity-80 transition-all  text-white"
        type={type}
        onClick={onClick}
        disabled={loading || disabled}
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

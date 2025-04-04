import React from "react";

const Input = ({ name, value, handleChange, type, placeholder }) => {
  return (
    <div className="w-full border">
      <input
        name={name}
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

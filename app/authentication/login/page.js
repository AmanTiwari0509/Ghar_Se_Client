"use client"
import Input from "@/app/components/common-components/Input"
import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleChange = () => {

  }
  return (
    <div>
      <Input
        name="email"
        value={data.email}
        handleChange={handleChange}
        placeholder="Email"
        type="text"
      />
    </div>
  );
};

export default Login;

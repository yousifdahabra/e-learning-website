import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/pages/login.css';

const Login = () => {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    console.log(loginForm);
  }, [loginForm]);

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setLoginForm({
            ...loginForm,
            username: e.target.value,
          });


        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setLoginForm({
            ...loginForm,
            password: e.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          setError("");

          const data = new FormData();

          data.append("username", loginForm.username);
          data.append("password", loginForm.password);

          axios
            .post("http://localhost/ecommerse_website/server/login.php", data)
            .then((res) => {
              localStorage.setItem("userId", res.data.user.id);

              navigate("/users");
            })
            .catch((error) => {
              setError(error.response.data.status);
            });
        }}
      >
        Login
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;

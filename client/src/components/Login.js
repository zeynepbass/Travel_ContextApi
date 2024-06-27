import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./panel.css"
const Login = () => {
  const initialState = { email: "", password: "",role:"" };
  const [data, setData] = useState(initialState);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9363/user/signin", data);
      // Burada response kontrolü yapabilirsiniz
      if (response.status === 200) {

       localStorage.setItem("yonetici",JSON.stringify(data))
        navigate("/panel");
      } else {
        // Başarısız giriş durumu
        console.log("Giriş yapılamadı");
      }
    } catch (error) {
      // Hata durumu
      console.error("Giriş hatası:", error);
    }
  };
  
  return (
    <div className="login">
      <form  className="form" onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", color: "gray" }}>HOŞGELDİNİZ</h2>
        <br />
        <input
          type="text"
          name="role"
          placeholder="Role"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Parola"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button type="submit" className="btn btn-primary btn-block">
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default Login;

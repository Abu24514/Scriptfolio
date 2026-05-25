import React from "react";
import { Mail, Lock, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../configs/api";
import { useDispatch } from "react-redux";
import { login } from "../redux/features/authSlice";
import toast from "react-hot-toast"
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLogin = location.pathname === "/login";

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = isLogin ? "/api/users/login" : "/api/users/register";

      const { data } = await api.post(endpoint, formData);
      // console.log(data);
      if (isLogin) {
        dispatch(login(data));
        localStorage.setItem('token', data.token)
        toast.success(data.message);
        // redirect
        navigate("/app");
      } else {
        navigate("/login");
      }


    } catch (error) {
      console.log(error);
      toast(error?.response?.data?.message || error.message)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleState = () => {
    navigate(isLogin ? "/signup" : "/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md text-center border border-gray-300/60 rounded-2xl px-8 py-6 bg-white"
      >
        {/* Heading */}
        <h1 className="text-gray-900 text-3xl mt-4 font-medium">
          {isLogin ? "Login" : "Sign up"}
        </h1>

        <p className="text-gray-500 text-sm mt-2">
          {isLogin
            ? "Please sign in to continue"
            : "Please register to continue"}
        </p>

        {/* Name */}
        {!isLogin && (
          <div className="flex items-center mt-6 w-full border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
            <User size={16} className="text-gray-500" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full outline-none text-sm border-none focus:ring-0"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* Email */}
        <div className="flex items-center mt-4 w-full border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
          <Mail size={16} className="text-gray-500" />
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="w-full outline-none text-sm border-none focus:ring-0"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="flex items-center mt-4 w-full border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
          <Lock size={16} className="text-gray-500" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full outline-none text-sm border-none focus:ring-0"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="mt-4 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition"
        >
          {isLogin ? "Login" : "Sign up"}
        </button>

        {/* Toggle */}
        <p
          onClick={toggleState}
          className="text-gray-500 text-sm mt-4 mb-4 cursor-pointer"
        >
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span className="text-indigo-500 hover:underline">
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
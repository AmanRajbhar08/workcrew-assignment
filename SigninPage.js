import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function SigninPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        form,
        { withCredentials: true }
      );

      if (response.status === 201 || response.status === 200) {
        navigate("/dashboard");
      } else {
        setError("Sign-in failed. Please check your details and try again.");
      }
    } catch (error) {
      if (error.response) {
        setError(
          error.response.data.message ||
            "Sign-in failed. Please check your details and try again."
        );
      } else {
        setError("Network error. Please try again later.");
      }
      console.error("Sign-in error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google Sign-In success
  const handleGoogleSuccess = async (response) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/google",
        { tokenId: response.credential },
        { withCredentials: true }
      );
      console.log("Google sign-in successful:", res.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError("Google sign-in failed. Please try again.");
    }
  };

  // Handle Google Sign-In failure
  const handleGoogleFailure = (error) => {
    console.error("Google sign-in error:", error);
    setError("Google sign-in failed. Please try again.");
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white p-3 rounded"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Divider for Google sign-in */}
          <div className="mt-6 mb-6 text-center text-gray-500">or</div>

          {/* Google Sign-In Button */}
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default SigninPage;

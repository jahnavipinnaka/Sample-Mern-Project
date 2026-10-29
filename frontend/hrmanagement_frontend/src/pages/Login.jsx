
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Admin Login
      if (email.trim().toLowerCase() === "admin@gmail.com" &&
          password === "admin") {
        localStorage.setItem(
          "currentuser",
          JSON.stringify({ name: "admin", role: "admin" })
        );

        navigate("/adminhome");
        return;
      }

      // HR / Employee Login
      const req = await fetch(
        "http://localhost:3000/api/emp/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            password,
          }),
        }
      );

      const data = await req.json();

      if (!req.ok || !data.user) {
        setError(data.message || "Invalid email or password.");
        return;
      }

      const user = data.user;

      if (user.role !== "HR" && user.role !== "EMPLOYEE") {
        setError("Your account does not have a supported role.");
        return;
      }

      localStorage.setItem("currentuser", JSON.stringify(user));

      if (user.role === "HR") {
        navigate("/hrhome");
      } else {
        navigate("/emphome");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="row min-vh-100 justify-content-center align-items-center py-5">

          {/* Left Welcome Section */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="login-welcome">
              <div className="login-brand">
                <span className="login-brand-icon">T</span>
                TaskFlow
              </div>

              <h1>
                Welcome Back to <span>Productivity.</span>
              </h1>

              <p>
                Sign in to manage your tasks, collaborate with your
                team, and keep your work moving forward.
              </p>

              <div className="login-benefit">
                <span>✓</span>
                Simple task management
              </div>

              <div className="login-benefit">
                <span>✓</span>
                Dedicated HR and employee dashboards
              </div>

              <div className="login-benefit">
                <span>✓</span>
                Everything organized in one place
              </div>
            </div>
          </div>

          {/* Login Form */}
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <div className="login-card">

              <div className="login-mobile-brand d-lg-none">
                <span className="login-brand-icon">T</span>
                TaskFlow
              </div>

              <div className="login-heading">
                <span className="login-label">YOUR WORKSPACE</span>
                <h2>Sign In</h2>
                <p>Enter your credentials to access your account.</p>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin}>
                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="loginEmail" className="form-label">
                    Email Address
                  </label>

                  <input
                    id="loginEmail"
                    type="email"
                    className="form-control login-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="username"
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label
                    htmlFor="loginPassword"
                    className="form-label"
                  >
                    Password
                  </label>

                  <input
                    id="loginPassword"
                    type="password"
                    className="form-control login-input"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn login-submit-btn w-100"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign In →"}
                </button>
              </form>

              <div className="login-divider">
                <span>NEW TO TASKFLOW?</span>
              </div>

              <p className="login-register-text">
                Don't have an account?{" "}
                <Link to="/register">Create an account</Link>
              </p>

              <div className="login-security-note">
                <span>🔒</span>
                Your workspace awaits.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;

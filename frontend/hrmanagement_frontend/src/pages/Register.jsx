
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const req = await fetch(
        "http://localhost:3000/api/emp/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            password,
            role,
          }),
        }
      );

      const data = await req.json();

      if (!req.ok) {
        setError(data.message || "Registration failed. Please try again.");
        return;
      }

      setSuccess("Registration completed successfully!");
      setName("");
      setEmail("");
      setPassword("");
      setRole("");

      // Redirect to login after successful registration
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error("Registration error:", err);
      setError(
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="container">
        <div className="row min-vh-100 justify-content-center align-items-center py-5">

          {/* Left Welcome Section */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="register-welcome">
              <div className="register-brand">
                <span className="register-brand-icon">T</span>
                TaskFlow
              </div>

              <h1>
                Start Your Journey with <span>TaskFlow.</span>
              </h1>

              <p>
                Create your account to organize tasks, collaborate
                with your team, and make your work more productive.
              </p>

              <div className="register-benefit">
                <span>✓</span>
                Simple and organized workflows
              </div>

              <div className="register-benefit">
                <span>✓</span>
                Role-based task management
              </div>

              <div className="register-benefit">
                <span>✓</span>
                A better way to work together
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <div className="register-card">

              <div className="register-mobile-brand d-lg-none">
                <span className="register-brand-icon">T</span>
                TaskFlow
              </div>

              <div className="register-heading">
                <span className="register-label">JOIN TASKFLOW</span>
                <h2>Create Account</h2>
                <p>Fill in your details to get started.</p>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              {success && (
                <div className="alert alert-success" role="status">
                  {success} Redirecting to login...
                </div>
              )}

              <form onSubmit={handleRegister}>
                {/* Name */}
                <div className="mb-3">
                  <label htmlFor="registerName" className="form-label">
                    Full Name
                  </label>

                  <input
                    id="registerName"
                    type="text"
                    className="form-control register-input"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    minLength={2}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="registerEmail" className="form-label">
                    Email Address
                  </label>

                  <input
                    id="registerEmail"
                    type="email"
                    className="form-control register-input"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label
                    htmlFor="registerPassword"
                    className="form-label"
                  >
                    Password
                  </label>

                  <input
                    id="registerPassword"
                    type="password"
                    className="form-control register-input"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    minLength={8}
                    required
                  />

                  <small className="register-hint">
                    Use at least 8 characters.
                  </small>
                </div>

                {/* Role */}
                <div className="mb-4">
                  <label htmlFor="registerRole" className="form-label">
                    Select Your Role
                  </label>

                  <select
                    id="registerRole"
                    className="form-select register-input register-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="">Choose your role</option>
                    <option value="HR">HR</option>
                    <option value="EMPLOYEE">Employee</option>
                  </select>

                  <small className="register-hint">
                    Choose the role assigned to your account.
                  </small>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn register-submit-btn w-100"
                  disabled={loading || Boolean(success)}
                >
                  {loading ? "Creating Account..." : "Create Account →"}
                </button>
              </form>

              <div className="register-divider">
                <span>ALREADY REGISTERED?</span>
              </div>

              <p className="register-login-text">
                Already have an account?{" "}
                <Link to="/login">Sign in</Link>
              </p>

              <div className="register-security-note">
                <span>🔒</span>
                Your next step starts here.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;

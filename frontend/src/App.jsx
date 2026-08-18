import { useState } from "react";
import "./App.css";

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="auth-container">

            <section className="auth-card">

                <div className="brand">

                    <div className="brand-icon">
                        &lt;/&gt;
                    </div>

                    <h1>Create your account</h1>

                    <p>
                        Join the community and start building
                    </p>

                </div>


                <form className="auth-form">

                    {/* Username */}
                    <div className="input-group">

                        <label htmlFor="username">
                            Username
                        </label>

                        <div className="input-wrapper">

                            <span className="input-icon">
                                @
                            </span>

                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Choose a username"
                                autoComplete="username"
                                required
                            />

                        </div>

                    </div>


                    {/* Email */}
                    <div className="input-group">

                        <label htmlFor="email">
                            Email
                        </label>

                        <div className="input-wrapper">

                            <span className="input-icon">
                                ✉
                            </span>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                            />

                        </div>

                    </div>


                    {/* Password */}
                    <div className="input-group">

                        <label htmlFor="password">
                            Password
                        </label>

                        <div className="input-wrapper">

                            <span className="input-icon">
                                ⌑
                            </span>

                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Create a strong password"
                                autoComplete="new-password"
                                required
                            />

                            <button
                                type="button"
                                className="show-password"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>

                        </div>

                    </div>


                    {/* Terms */}
                    <label className="terms">

                        <input
                            type="checkbox"
                            name="terms"
                            required
                        />

                        <span>
                            I agree to the Terms of Service and Privacy Policy
                        </span>

                    </label>


                    {/* Submit */}
                    <button
                        type="submit"
                        className="login-btn"
                    >
                        <span>
                            Create account
                        </span>

                        <span className="arrow">
                            →
                        </span>
                    </button>

                </form>


                <div className="divider">
                    <span>OR</span>
                </div>


                <p className="signup-text">

                    Already have an account?

                    <a href="#">
                        Sign in
                    </a>

                </p>

            </section>

        </main>
    );
}

export default SignUp;
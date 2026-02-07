import { useState } from "react";
import { loginUser, registerUser } from "../services/auth.js";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "worker"
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isRegister) {
        await registerUser(form);
      } else {
        await loginUser(form.email, form.password);
      }
      setMessage("Success! You are signed in.");
    } catch (error) {
      setMessage("Authentication failed. Please try again.");
    }
  };

  return (
    <section>
      <h2 className="section-title">{isRegister ? "Create account" : "Sign in"}</h2>
      <form onSubmit={handleSubmit} className="form card">
        {isRegister && (
          <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} />
        )}
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        {isRegister && (
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="worker">Worker</option>
            <option value="hirer">Hirer</option>
          </select>
        )}
        <button type="submit">{isRegister ? "Register" : "Login"}</button>
      </form>
      <button
        type="button"
        className="button-secondary"
        onClick={() => setIsRegister(!isRegister)}
      >
        {isRegister ? "Already have an account? Sign in" : "New here? Register"}
      </button>
      {message && <p>{message}</p>}
    </section>
  );
};

export default Auth;

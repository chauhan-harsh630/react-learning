import { useState } from "react";
import './index.css'
function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const validateForm  = () => {
    let newError = {};
    if (!form.name) newError.name = "Name is required";
    if (!form.email) newError.email = "Email is required";
    else if (!form.email.includes("@")) newError.email = "Invalid email";
    if (!form.message) newError.message = "Message is required";

    return newError;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });

    //  Remove error for that field
    setErrors((prev) => ({
  ...prev,
  [name]: ""
}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setForm({
      name: "",
      email: "",
      message: "",
    });
    setErrors({});
    console.log(form);
    alert("Form Submitted!");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Contact Form</h1>

        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error" style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error" style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>}

        <label>Message</label>
        <textarea
          name="message"
          placeholder="Enter message"
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error" style={{ color: "red", fontSize: "12px" }}>{errors.message}</p>}

        <button type="submit">Send</button>
      </form>
    </>
  )
}

export default App;
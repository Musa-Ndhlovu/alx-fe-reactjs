import { useState } from "react";
import {Formik, From, Field, ErrorMessage} from "formik"
import * as Yup from "yup"

const RegistrationForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!username || !email || !password) {
        alert("All fields are required!");
        return;
      }
      console.log({ username, email, password });
    };
  
    const validateForm = (values) => {
        let newErrors = {};
    
        if (!username) newErrors.username = "Username is required";
        if (!email) newErrors.email = "Email is required";
        if (!password) newErrors.password = "Password is required";
    
        setErrors(newErrors);
        return newErrors;
      };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    );
  };
  
export default RegistrationForm;
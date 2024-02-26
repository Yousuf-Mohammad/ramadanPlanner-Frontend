import axios from "axios";
import { useState } from "react";

const AccountDeletion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://ramadan-planner-backend.vercel.app/api/auth/delete-account",
        {
          email,
          password,
        }
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Delete Account</h2>
      <p>Please enter your email to confirm account deletion:</p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Your email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Delete Account</button>
    </form>
  );
};

export default AccountDeletion;

import { useState } from "react";

const LoginDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="login-wrapper icon-box"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="icon">👤</span>
      <span>Login</span>

      {open && (
        <div className="hover-dropdown">
          <a href="#">👤 Your Account</a>
          <a href="#">📦 Your Orders</a>
          <hr />
          <p>If you are a new user</p>
          <a href="#" className="login-btn">LOGIN</a>
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
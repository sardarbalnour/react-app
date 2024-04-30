import { useState } from "react";

function From() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const loginHandler = (event) => {
    console.log({ email, password, role });
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const selectHandler = (e) => {
    setRole(e.target.value);
  };

  const genderHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={emailHandler}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={passwordHandler}
      />
      <select value={role} onChange={selectHandler}>
        <option value="user">User</option>
        <option value="writer">Writer</option>
        <option value="admin">Admin</option>
      </select>
      <div>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={genderHandler}
        />
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={genderHandler}
        />
        <input
          type="radio"
          name="gender"
          value="other"
          onChange={genderHandler}
        />
      </div>

      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default From;

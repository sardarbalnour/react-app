import { useState } from "react";

function From() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [gender, setGender] = useState("male");

  const loginHandler = (event) => {
    console.log({ email, password, role, gender });
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
    setGender(e.target.value);
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
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          onChange={genderHandler}
          checked={gender === "male"}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={genderHandler}
          checked={gender === "female"}
        />
        <label htmlFor="other">Other</label>
        <input
          type="radio"
          name="gender"
          id="other"
          value="other"
          onChange={genderHandler}
          checked={gender === "other"}
        />
      </div>

      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default From;

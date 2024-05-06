import { useState } from "react";
import "./courseCard.css";

function CourseCard({ data: { name, description } }) {
  const [selected, setSelected] = useState(true);
  return (
    <li className={`container ${selected && "selected"}`}>
      <h4>{name}</h4>
      <p>{description}</p>
      <button onClick={() => setSelected((s) => !s)}>Change</button>
    </li>
  );
}

export default CourseCard;

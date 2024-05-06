import { useState } from "react";
import "./courseCard.css";

function CourseCard({ data: { name, description } }) {
  const [selected, setSelected] = useState(true);

  const cssStyle = {
    color: "red",
    border: "red 1px solid",
    margin: "10px",
    backgroundColor: "silver",
  };

  const selectedStyle = {
    color: "green",
  };

  return (
    <li>
      <h4>{name}</h4>
      <p>{description}</p>
      <button onClick={() => setSelected((s) => !s)}>Change</button>
    </li>
  );
}

export default CourseCard;

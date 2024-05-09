import { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 8rem;
  text-align: center;
  color: ${(props) => (props.selected ? "blue" : "red")};
  &:hover {
    color: aqua;
  }
  @media (max-width: 1200px) {
    background-color: silver;
  }
`;

function Banner({ title, description, numOfStudents }) {
  //   const {title, description, numOfStudents} = props
  const [selected, setSelected] = useState(true);

  return (
    <>
      <div>
        <hr />
        <h1>{title}</h1>
        <p>{description}</p>
        <span>{numOfStudents} students </span>
        <Title selected={selected}>Hello world</Title>
        <button onClick={() => setSelected((s) => !s)}>Change</button>
        <hr />
      </div>
    </>
  );
}

export default Banner;

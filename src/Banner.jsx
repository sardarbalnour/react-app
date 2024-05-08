import styled from "styled-components";

const Title = styled.h1`
  font-size: 8rem;
  text-align: center;
  color: #bf4f74;
  &:hover {
    color: aqua;
  }
  @media (max-width: 1200px) {
    background-color: silver;
  }
`;

function Banner({ title, description, numOfStudents }) {
  //   const {title, description, numOfStudents} = props
  return (
    <>
      <div>
        <hr />
        <h1>{title}</h1>
        <p>{description}</p>
        <span>{numOfStudents} students </span>
        <Title>Hello world</Title>
        <hr />
      </div>
    </>
  );
}

export default Banner;

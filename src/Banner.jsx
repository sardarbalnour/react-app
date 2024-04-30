function Banner({ title, description, numOfStudents }) {
  //   const {title, description, numOfStudents} = props
  return (
    <div>
      <hr />
      <h1>{title}</h1>
      <p>{description}</p>
      <span>{numOfStudents} students </span>
      <hr />
    </div>
  );
}

export default Banner;

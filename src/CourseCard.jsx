function CourseCard({ data: { name, description } }) {
  // const {name, description} = props.data
  return (
    <li>
      <h4>{name}</h4>
      <p>{description}</p>
    </li>
  );
}

export default CourseCard;

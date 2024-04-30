import CourseCard from "./CourseCard";

function CourseList() {
  const courses = [
    { id: 1, name: "html", description: "This is html course" },
    { id: 2, name: "css", description: "This is css course" },
    { id: 3, name: "js", description: "This is js course" },
    { id: 4, name: "react", description: "This is react course" },
  ];
  return (
    <div>
      <h3>Course List</h3>
      <ul>
        {courses.map((course) => (
          <CourseCard key={course.id} data={course} />
        ))}
      </ul>
    </div>
  );
}

export default CourseList;

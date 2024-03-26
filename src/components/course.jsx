import Content from "./content";


const Course = ({course}) => {
    return(
        <div>
             <header><b>{course.name}</b></header>
             <Content course={course}/>
        </div>
    )
}

export default Course;
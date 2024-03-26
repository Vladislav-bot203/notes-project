import Part from "./part"


const Content = ({course}) => {
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
        <ul>
            {course.parts.map(part =>
            <Part key = {part.id} name = {part.name} exercises = {part.exercises}/>
            )}
            <p><b>total of {total} exercises</b></p>
        </ul>
    )
}

export default Content;
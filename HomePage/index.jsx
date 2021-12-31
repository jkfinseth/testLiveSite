export const HomePage = (props) => {

    return (
        <div classname = "HomePageDisplay">
            <h3> Currently selected job: {props.selectedJob}</h3>
            <h3> Remaining messages: {props.selectedJobLength}</h3>
        </div>
    )
}
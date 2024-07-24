import PropTypes from 'prop-types'
function Students(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Students.propTypes = {
    name: PropTypes.string, 
    age: PropTypes.number,
    isStudent: PropTypes.bool,

}

export default Students
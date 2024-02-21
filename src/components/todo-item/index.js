 function TodoItem ({index, todo}) {
    return (
        <li className="list-group-item"key={index}>
            <input classNmae="form-check-input me-1"
             type="checkbox" />
            <span className="me-2">{todo}</span>
            <button className="btn btn-danger">Delete</button>
        </li>);
}
export default TodoItem; 
//This is a functional component that takes in props from the parent App component and returns JS 

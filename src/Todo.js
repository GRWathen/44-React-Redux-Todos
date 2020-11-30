import { useDispatch } from "react-redux";

import "./Todo.css";

function Todo({ id, text, complete }) {
    const dispatch = useDispatch();

    function completeClick(event) {
        event.preventDefault();
        const id = event.target.parentElement.getAttribute("data-id");
        dispatch({
            type: "COMPLETE", payload: {
                "id": id
            }
        });
    }

    function deleteClick(event) {
        event.preventDefault();
        const id = event.target.parentElement.getAttribute("data-id");
        dispatch({
            type: "DELETE", payload: {
                "id": id
            }
        });
    }

    return (
        <div className="Todo" data-id={id}>
            <button onClick={completeClick}>Complete</button>
            <span className={complete ? "Todo-Complete" : "" }> {text} </span>
            <button onClick={deleteClick}>Delete</button>
        </div>
    );
}

export default Todo;

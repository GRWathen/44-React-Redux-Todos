import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import "./TodoForm.css";

const TodoForm = () => {
    const dispatch = useDispatch();

    function enableButton() {
        const txtTodo = document.querySelector("#txtTodo");

        if (txtTodo.value === "") {
            document.querySelector("#btnSubmit").disabled = true;
        }
        else {
            document.querySelector("#btnSubmit").disabled = false;
        }
    }

    const initialState = {
        textTodo: ""
    }

    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { textTodo } = e.target;
        const key = uuidv4();
        dispatch({
            type: "ADD", payload: {
                "key": key,
                "id": key,
                "text": textTodo.value,
                "complete": false
            }
        });

        setFormData(initialState);
    }

    return (
        <form id="TodoForm" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Enter Todo data</legend>

                <label htmlFor="txtTodo">Todo Text: </label>
                <input
                    id="txtTodo"
                    type="text"
                    name="textTodo"
                    placeholder="Enter todo text"
                    value={formData.textTodo}
                    onChange={handleChange}
                    onInput={enableButton}
                    onBlur={enableButton}
                />
            </fieldset>

            <button id="btnSubmit" disabled>Add Todo</button>
        </form>
    );
}

export default TodoForm;

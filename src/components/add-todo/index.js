
import styles from './index.module.css';
import {useLocalStorage} from "usehooks-ts"
import { useState } from 'react';

function creatTODO(){

}


function AddTodo (){
    const [todos, setTodos] = useLocalStorage
    ("TODO_KEY",[]);    
// let todo;
const [todo, setTodo] = useState("");


function collectInput(event) {
    setTodo(event.target.value);
    // todo= event.target.value;
}
// // const collectInput= (event)=>{setTodo(event.target.value);

// }

function saveTodo(){
    setTodos([...todos,todo]);
}

    return (
        <section className={styles.addTodo}>
            <input 
            onChange={collectInput}
            className={styles.AddTodoInput}
            placeholder='start typing...'/>
            <button onClick={saveTodo}>Create</button>
        </section>
    );
}

export default AddTodo;
import styles from "./index.css";

function AddTodo() {
    return(
       <section className={styles.addTodo}>
        <input placeholder="Start typing..." /> 
        <button>Create</button>  
       </section>
    );
}

export default AddTodo;
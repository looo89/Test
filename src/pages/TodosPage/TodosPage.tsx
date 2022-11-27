import { useEffect } from "react";
import Todos from "../../components/Todos/Todos";
import { useAppDispatch, useAppSelector } from "../../hook";
import { fetchTodos } from "../../store/todos";

import styles from "./styles.module.css"


const TodosPage: React.FC = () => {
  
  const dispatch = useAppDispatch()
  
  const todos = useAppSelector(state=> state.todosReucer.todos)
  let status = useAppSelector(state=> state.todosReucer.status)
  
  useEffect(()=>{
    dispatch(fetchTodos())
  },[]) 

    return (
      <div className={styles.container}>
        {status === 'resolved' && <Todos todos={todos} />}
      </div>
    );
  }
  
  export default TodosPage;
import React from "react"
import { Link } from "react-router-dom"
 

import styles from "./styles.module.css";


const Menu: React.FC = ()=> {
  
  
    return (
      <div className={styles.root}>
        <button className={styles.button}>
          <Link className={styles.link} to="/posts">Posts</Link>
        </button>
        <button className={styles.button}>
          <Link className={styles.link} to="/albums">Albums</Link>
        </button>
        <button className={styles.button}>
          <Link className={styles.link} to="/todos">Todos</Link>
        </button>
          
      </div>
    );
  }
  
  export {Menu}
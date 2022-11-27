
import React from "react"
import { useState } from "react"
import styles from "./styles.module.css"

const Todos = ({todos}) =>{

  
  const todosFalse = todos.filter(item => item.completed === false)
  const todosTrue = todos.filter(item => item.completed === true)

  const board1= {id:1, title: 'сделать', items: [...todosFalse]}
  const board2 ={id:2, title: 'сделано', items: [...todosTrue]}

  const [boards, setBoards]= useState([board1, board2])
  const [currentBoard, setCurrentBoard]= useState(null)
  const [currentItem, setCurrentItem] = useState(null)

  const dragOverHandler=(e)=>{
    e.preventDefault()
  }

  const dragStartHandler=(e, board, item)=>{
    setCurrentBoard(board)
    setCurrentItem(item)
  }


  const dropHandler=(e, board ,item) => {
    e.preventDefault()
    const currentIndex = currentBoard.items.indexOf(currentItem)
    currentBoard.items.splice(currentIndex, 1)
    const dropIndex = board.items.indexOf(item)
    board.items.splice(dropIndex+1, 0, currentItem)
    setBoards(boards.map(b=>{
      if(b.id === board.id){
        return board
      }
      if(b.id===currentBoard.id){
        return currentBoard
      }
      return b
    }))
  }

    return (
      <div  className={styles.container}>
        {boards.map(board=>
          <div key={board.id} className={styles.board}>
            <div>{board.title}</div>
            {board.items.map(item=>
              <div
                onDragOver={(e)=>dragOverHandler(e)}
                onDragStart={(e)=>dragStartHandler(e, board, item)}
                onDrop={(e)=>dropHandler(e, board, item)}
                className={styles.todoItem}
                key={item.id}
                draggable={true}
              >{item.title}
              </div>
            )}
          </div>
        )}
      </div>
      
    );
  }
  
  export default Todos;




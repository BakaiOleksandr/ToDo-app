import { MdOutlineDone } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
export default function List({todos,deleteTodo,toggleTask}) {
  return (
    <div className="todo-list">
        {todos.length === 0
          ? 'No tasks yet'
          : todos.map((el) => (
              <div key={el.id} className={`todo-item ${!el.isComplete&&'not-done'}`}>
                <div className="todo-text">{el.text}</div>
                <MdDeleteForever className="delete-el" onClick={() => deleteTodo(el.id)}/>
                <MdOutlineDone onClick={() => toggleTask(el.id)}/>
                  
              </div>
            ))}
      </div>
  )
}

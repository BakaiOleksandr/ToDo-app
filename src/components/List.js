
export default function List({todos,deleteTodo,toggleTask}) {
  return (
    <div className="todo-list">
        {todos.length === 0
          ? 'No tasks yet'
          : todos.map((el) => (
              <div key={el.id} className="todo-item">
                <div className="todo-el">{el.text}</div>
                <button className="delete-el" onClick={() => deleteTodo(el.id)}>
                  Delete
                </button>
                <button onClick={() => toggleTask(el.id)}>
                  {el.isComplete ? 'Undo' : 'Comlete'}
                </button>
              </div>
            ))}
      </div>
  )
}

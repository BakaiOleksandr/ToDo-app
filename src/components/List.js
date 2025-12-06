import {MdOutlineDone} from 'react-icons/md';
import {MdDeleteForever} from 'react-icons/md';
import {RiFileList3Line} from 'react-icons/ri';
import {AiOutlineFileDone} from 'react-icons/ai';
import {IoMdDoneAll} from 'react-icons/io';

export default function List({todos, deleteTodo, toggleTask}) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="no-tasks-yet">No tasks yet</p>
      ) : (
        todos.map((el) => (
          <div
            key={el.id}
            className={`todo-item ${!el.isComplete && 'not-done'}`}
          >
            {!el.isComplete ? (
              <RiFileList3Line className="icon-list" />
            ) : (
              <AiOutlineFileDone className="icon-list" />
            )}
            <div className="todo-text">{el.text}</div>
            <MdDeleteForever
              className="delete-el"
              onClick={() => deleteTodo(el.id)}
            />
            {!el.isComplete ? (
              <MdOutlineDone
                className="icon-complete incomplete"
                onClick={() => toggleTask(el.id)}
              />
            ) : (
              <IoMdDoneAll
                className="icon-complete"
                onClick={() => toggleTask(el.id)}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
}

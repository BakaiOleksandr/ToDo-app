import {MdOutlineDone} from 'react-icons/md';
import {MdDeleteForever} from 'react-icons/md';
import {RiFileList3Line} from 'react-icons/ri';
import {AiOutlineFileDone} from 'react-icons/ai';
import {IoMdDoneAll} from 'react-icons/io';

export default function List({todos, showQuestion, toggleTask}) {
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
            <MdDeleteForever
              className="delete-el"
              onClick={() => showQuestion(el.id)}
            />

            <div className="todo-text">{el.text}</div>
            {!el.isComplete ? (
              <RiFileList3Line className="icon-list" />
            ) : (
              <AiOutlineFileDone className="icon-list" />
            )}
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

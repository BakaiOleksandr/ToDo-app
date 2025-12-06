import {useRef} from 'react';
import DeleteAllBtn from './DeleteAllBtn';
export default function Form({onSubmit, text, setText, deleteAllTasks, todos}) {
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    onSubmit(e);
    if (textareaRef.current) {
      textareaRef.current.style.height = '2.5rem';
    }
  };

  const handleTextarea = (e) => {
    setText(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };
  return (
    <div className="form-container">
      <form className="form-element" onSubmit={handleSubmit}>
        <textarea
          ref={textareaRef}
          className="todo-textarea"
          name="textarea"
          type="text"
          placeholder="Add a new task"
          value={text}
          onChange={handleTextarea}
        />
        <div className='submit-delete-container'>
          <button type="submit" className="submit-btn">
            Submit
          </button>
          {todos.length > 0 && <DeleteAllBtn onClick={deleteAllTasks} />}
        </div>
      </form>
    </div>
  );
}

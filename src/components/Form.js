export default function Form({onSubmit, text, setText}) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

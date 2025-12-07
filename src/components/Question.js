export default function Question({confirm, cancel}) {
  return (
    <div className="question-background">
      <div className="question">
        <p className="question-text">Are you sure?</p>
        <button className="yes-btn" onClick={confirm}>Yes</button>
        <button className="no-btn" onClick={cancel}>No</button>
      </div>
    </div>
  );
}

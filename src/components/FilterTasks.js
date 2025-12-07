export default function FilterTasks({getIncompletedTasks}) {
  const count = getIncompletedTasks();
  return (
    <div style={{minHeight: '2rem'}}>
      {count > 0 && (
        <p className="task-complited">
          {count} {count > 1 ? 'tasks are' : 'task is'} completed
        </p>
      )}
    </div>
  );
}

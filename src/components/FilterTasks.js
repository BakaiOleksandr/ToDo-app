export default function FilterTasks({getIncompletedTasks}) {
  const count = getIncompletedTasks();
  return <p>{count} task are completed</p>;
}

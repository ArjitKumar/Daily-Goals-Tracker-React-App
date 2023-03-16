const Task = ({ title, description, deleteTask, index }) => {
  // const { title, description, deleteTask, index } = props.res;
  return (
    <div className="task">
      <div>
        <p>{" " + title}</p>
        <span>{" " + description}</span>
      </div>
      <button onClick={() => deleteTask(index)}>-</button>
    </div>
  );
};
export default Task;

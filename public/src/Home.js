import { useState } from "react";
import Task from "./Task";
const Home = () => {
  const value = [
    {
      title: "Arjit's Diary",
      description: "how to clear CGL",
    },
    {
      title: "Krishna's Diary",
      description: "how to clear JEE Main",
    },
  ];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // our array of tasks
  const [tasks, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setTask([
      ...tasks,
      {
        title,
        description,
      },
    ]);
  };
  const deleteTask = (index) => {
    const filteredArr = tasks.filter((val, i) => {
      return i != index;
    });
    setTask(filteredArr);
  };
  return (
    <div className="container">
      <h1> Daily Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
            // console.log(e.target.value);
          }}
        ></input>
        <textarea
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
            // console.log(e.target.value);
          }}
        ></textarea>
        <button type="submit">ADD</button>
      </form>
      {/* Now here we will append our component task
       */}
      {/* <Task res={value[0]} />
      <Task res={value[1]} /> */}
      {/* <Task {...value[1]} /> */}
      {tasks.map((item, index) => {
        return (
          <Task
            key={index}
            title={item.title}
            description={item.description}
            deleteTask={deleteTask}
            index={index}
          />
        );
      })}
    </div>
  );
};
export default Home;

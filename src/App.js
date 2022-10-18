import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useEffect } from 'react'
import { useState } from "react"


function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])


  //add task
  const addTask= (task)=>{
    const id = Math.floor(Math.random() * 10000)+1
    const newTask = {id, ...task}
    setTasks([...tasks,newTask])

  }

  useEffect(() => {
    localStorage.setItem('tasks2', JSON.stringify(tasks));
    console.log('SETITEM')

  }, [tasks]);

  useEffect(() => {
    const tasks2 = JSON.parse(localStorage.getItem('tasks2'));
    if (tasks2) {
     setTasks(tasks2);
    }
    console.log('GETITEM')
  }, []);

  //delete task
  const deleteTask =(id) => {
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  //toggle reminder func
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task)=>
      task.id===id ? {...task,reminder:!task.reminder } : task
      )
    )
    console.log('double clicked')
  }


  return (
    <div className='container'>
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
      {/* //1  */}
    </div>
  );
}

export default App;

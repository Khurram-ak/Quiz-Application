// import logo from './logo.svg';
// import './App.css';
// import { useState } from "react";

// function App() {

//   const [task, setTask] = useState();
//   const [allTask, setAllTask] = useState([]);


//   const addTask = () => {
//     console.log(task);
//     var arr = [...allTask]
//     arr.push(task)
//     setAllTask(arr)
//     console.log(allTask)

//   }
//   return <>
//     <div class="box">
//       <div class="back">
//         <p >To Do List</p>

//         <input placeholder="enter task" onChange={(e) => {
//           setTask(e.target.value)

//         }}></input>
//         <button onClick={addTask}>Add</button>
//         {
//           allTask.map((task, index) => {
//             return <ul>
//               <li>{task} <button>edit</button><button>delete</button></li>
              
//             </ul>       
//           })

//         }
//     </div>

//       </div>
//   </>
// }

// export default App;

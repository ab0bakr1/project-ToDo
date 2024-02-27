import './App.css';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRef, useState } from 'react';
AOS.init();

function App() {
  const [ToDo,setToDo] = useState([])
  const input = useRef()
  const ToDoNum = ToDo.length
  const add = () => {
    const value = input.current.value
    const newValue = {completed : false ,value}
    setToDo([...ToDo, newValue])
    input.current.value = ''
  }
  const itemOK = (index) =>{
    const newToDo = [...ToDo]
    ToDo[index].completed = !ToDo[index].completed
    setToDo(newToDo)
  }
  const itemDelete = (index) =>{
    const newToDo = [...ToDo]
    newToDo.splice(index,1)
    setToDo(newToDo)
  }
  return (
    <div className="App" data-aos="fade-right">
      <div className='todo'>
        <h2>to do list <span className='num'>{ToDoNum}</span></h2>
        <div className='todo-word'>
          <input ref={input} placeholder='' />
          <button onClick={add}>Add</button>
        </div>
        <ul >
          {
            ToDo.map(({value , completed} ,index) => {
              return <div className='list'>
                <li className={completed ? 'completed' : ''} onClick={() => itemOK(index)}>{value}</li>
                <span onClick={() => itemDelete(index)}>❌</span>
                </div>
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;

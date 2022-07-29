import React, { useState,useEffect } from "react";
import useCookie from 'react-use-cookie';
import { Link } from 'react-router-dom'
import { Button } from "./Button";

export const Home = () => {
  // JS
  const [tasks,setTask] = useState([]);
  const [input,setInput] = useState('');
  const [cookieTasks, setCookieTasks] = useCookie('tasks')

    // Functions

  useEffect(function () {
      const localTasks = localStorage.getItem('tasks');

      setCookieTasks(JSON.stringify(tasks), {
        days: 1,
        SameSite: 'Strict',
        Secure: true,
      });
      
      if (!localTasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks))
      } else {
        const parsedTasks = JSON.parse(localTasks);

        setTask(parsedTasks);
      }
  }, []);


  const handleChangeInput = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = () => {
    if (input !== '') {
      localStorage.setItem('tasks', JSON.stringify([...tasks, input]))
    setTask([...tasks, input])
    setInput('')
  }else{
    alert('Введите что-нибудь');
   }
  };

  const handleDelete = (taskIndex) => {
    const filterArray = tasks.filter((task, index) => (
      index !== taskIndex
    ))

    localStorage.setItem('tasks', JSON.stringify(filterArray));
    setTask(filterArray)
  }

  return (
    // HTML
    <main className="w-screen h-screen flex justify-center items-center">

        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>

    <div className="flex flex-col gap-y-4">
      <div className="flex gap-x-3">
        <input value={input} onChange={handleChangeInput} className='border-2 border-black px-2 py-1 w-full'/>
        <Button styleType='submit' onClick={handleSubmit}>Add task</Button>
      </div>
      
      <div className="overflow-auto h-[300px] border border-black p-2">
        <ol className="flex flex-col gap-y-2" >
          {tasks.map((task, index) => (
            <li key={index} className='flex justify-between gap-x-3'>
              <span>

              {task}

              </span>
              <Button styleType='delete' onClick={() => handleDelete(index)}>X</Button>
              {/* <button onClick={() => handleDelete(index)} className='border-2 border-red-500 font-medium px-[7px] rounded-full hover:bg-red-500 hover:text-white'>X</button>  */}
            </li>
          ))}
        </ol>
      </div>
    </div>
    </main>
  );
}

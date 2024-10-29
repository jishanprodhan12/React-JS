import { useEffect, useState } from 'react'
import Vote from './Vote'
import Navbar from './components/Navbar/Navbar'

function Person({ name, age }) {
  console.log(name);
  return (
    <div>
      <h3>name : {name}</h3>
      <p>age : {age}</p>
    </div>
  )
}

import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import LineChart from './components/LineChart/LineChart';
import axios, { Axios } from 'axios';
import { data } from 'autoprefixer';

function App() {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState([])
  useEffect(() => {
    fetch('/Marks.json')
      .then(res => res.json())
      .then(data => setState(data));
  }, [])
  const [axstate , setAxstate]  = useState([])
  useEffect(() => {
    axios('/Marks.json')
    .then(data => setAxstate(data.data));
  }, [])

  return (
    <>

      <h1 className='text-2xl text-center bg-rose-400'>this is from App jsx </h1>
      <span className='flex md:hidden text-3xl' onClick={() => setOpen(!open)}  >

        {
          open ? <RxCross2></RxCross2> : <RiMenu2Fill></RiMenu2Fill>
        }
      </span>
      <Navbar open={open}></Navbar>

      <body className='text-black text-3xl mt-72 md:mt-5 text-center border-2 border-rose-400 p-4'> this is body of the jsx

        {
          <Person name={"jishan"} age={22}></Person>
        }
        <Vote name={"jishan prodhan"} age={22}></Vote>
        <Vote name={"kanta"} age={17}></Vote>
      </body>
      <h2>
        mark of the students :
        {
          state.length
        } using fetch
      </h2>
      <h3>
        mark of the students : 
        {
          axstate.length
        }
         using axios
      </h3>
      <LineChart></LineChart>

    </>
  )
}
export default App

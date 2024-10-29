import { useState } from 'react'
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


function App() {
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0)

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
      <Vote  name={"jishan prodhan"} age={22}></Vote>
      <Vote  name={"kanta"} age={17}></Vote>


      </body>

    </>
  )
}
export default App

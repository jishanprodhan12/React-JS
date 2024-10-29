import { useState } from 'react'
import Vote from './Vote'
import Navbar from './components/Navbar/Navbar'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>

//       <h1>Vite + React</h1>
//       <h1>hi this is jsx</h1>
//       {
//         <Person name={"jishan"} age={22}></Person>
//       }
//       <Vote  name={"jishan prodhan"} age={22}></Vote>
//       <Vote  name={"kanta"} age={17}></Vote>


//     </>
//   )
// }
// function Person({name , age }){
//   console.log(name);
//   return (
//     <div>
//       <h3>name : {name}</h3>
//       <p>age : {age}</p>
//     </div>
//   )
// }

import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";


function App() {
const [open , setOpen] =useState(false)

  return (
    <>

      <h1 className='text-2xl text-center bg-rose-400'>this is from App jsx </h1>
      <span className='flex md:hidden text-3xl' onClick={()=> setOpen(!open)}  >
       
        {
          open ? <RxCross2></RxCross2> : <RiMenu2Fill></RiMenu2Fill>
        }
      </span>
      <Navbar open={open}></Navbar>
   <body className='text-black text-3xl mt-72'> this is body of the jsx </body>

    </>
  )
}
export default App

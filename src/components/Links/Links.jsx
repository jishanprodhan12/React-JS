import React from 'react'

export default function Links({ route }) {
const {id , name , path } = route ;
console.log(name);
    return (
       <>
        <li className='list-none hover:bg-rose-300 mr-8 p-3'><a href={path}> {name}</a></li>
       </>
    )
}

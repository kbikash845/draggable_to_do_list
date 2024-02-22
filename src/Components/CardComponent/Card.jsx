import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteChildList } from '../store/slice';

function Card({cardInfo}) {
    const dispatch = useDispatch()
    function removeChild(){
       console.log("clicked")
       console.log("cardInfo",cardInfo)    
         console.log("id", cardInfo);
         dispatch(deleteChildList(cardInfo));
       
     }
  return (
    <div className='bg-white p-2 mt-2 shadow-md rounded-md'>{cardInfo.title} 
    <button title="Delete Card" className="text-red-600 float-right font-bold" onClick={removeChild}>x</button></div>
  )
}

export default Card
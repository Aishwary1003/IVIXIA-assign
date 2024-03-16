import React from 'react'

const Card = ({item}) => {
  return (
    <div className='flex flex-col justify-center items-center pb-5 max-w-3xl mx-auto' >
        <div className='px-7 py-6 bg-gray-100 border rounded-md'>
        <img src={item.img} />
        <h1 className='text-center text-teal-800 font-bold text-5xl my-3'>{item.para}</h1>
        </div>

        <button className=' w-96 mx-auto bg-orange-400 text-white text-3xl font-bold rounded-lg py-4 mt-4'>Start!</button>
      
    </div>
  )
}

export default Card
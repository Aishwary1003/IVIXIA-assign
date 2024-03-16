import React from 'react';
import data from '../data';
import Card from './Card';


const Home = () => {
  return (
      <div className='bg-slate-200 '>
                <div className='bg-slate-200 pt-16'  >
      {
        data.map((item)=>{return <Card key={item.id} item={item}/>})
      }

   
      
            </div>


      </div>
       
   
    
  )
}

export default Home
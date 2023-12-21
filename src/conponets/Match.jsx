import React from 'react'
import { useState } from 'react'
import Data from '../DataBase/Data'
import 'bootstrap/dist/css/bootstrap.css'
import Addball from './Addball'
import Search from './Search'
export default function Match() {
  const [balls,setBalls]=useState(Data);
  const [filter, setFilter] = useState('');
  const handle=(newBall)=>{
    const updateBall=[...balls,{...newBall, id:balls.length+1}]
    setBalls(updateBall)
  }
    const handelFilter = (newFilter)=>{
      setFilter(newFilter);
    };
    const filtredBall = balls.filter((ball) =>
    ball.name.toLowerCase().includes(filter.toLowerCase()))
    
  
  return (
    <div>
      <Search onSearchChange={handelFilter}/>
      {
        filtredBall.map((ball)=>(
        <div class="card" style={{width: "18rem"}} key={ball.id}>
        <img src={ball.image} class="card-img-top" alt="..."/>
        <div class="card-body">
          <p class="card-text">{ball.marc}</p>
          <p class="card-text">{ball.name}</p>
        </div>
      </div>

        )
        )
      }
      <Addball onAdd={handle}/>
    </div>
  )
}

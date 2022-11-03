import React, { useEffect, useState } from 'react'
import Profiles from './profiles';
import { Leaderboard } from './database';
import './boardstyle.css'

export default function Board() {

const [period, setPeriod] = useState('0');
const [query, setQuery] = useState("");
const handleClick = (e) => {
    setPeriod(e.target.dataset.id)
}
const handleSeacrh =(e)=>{
    setQuery(e.target.value);
}
useEffect(()=>{
        document.querySelectorAll('.board .duration  button').forEach(
            button=>{ 
                let buttonid= button.dataset.id;
                if(buttonid===period){
                     console.log(button.dataset.id)
                    button.classList.add('active');  
                }
                else{
                    button.classList.remove('active')
                }
               
                   
            }
        )
    
  },[period])
  return (
    
    <div className="board">
       
        <h1 className='leaderboard'>Leaderboard</h1>
        <div className="duration">
            <button onClick={handleClick} data-id='7' >7 Days</button>
            <button onClick={handleClick} data-id='30' >30 Days</button>
            <button onClick={handleClick} data-id='0'>All-Time</button>
        </div>
        <div className="titles">
            <h2 className='t1'>Users</h2>
            <input type="text" placeholder='Search User' className='searchBar' onChange={handleSeacrh}/>
            <h2 >Edits</h2>
        </div>
        
        <Profiles Leaderboard={between(Leaderboard, period,query)} query={query}></Profiles>

    </div>
  )
}

function between(data, between,query){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));

    if(query!==""){
        
         let res = data.filter((User)=>{
         return User.name.toLowerCase().includes(query) || User.name.toUpperCase().includes(query) ||User.name.includes(query);
        })  
        return res.sort((a, b) => {
        
        
        if ( a.score === b.score){
            return b.score - a.score;
        } else{
            return b.score - a.score;
        }
    })        
    } 
    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        if (between === 0 || between ==="0") return val;
        return previous <= userDate && today >= userDate;
    })
    // sort with asending order
    return filter.sort((a, b) => {
        
        
        if ( a.score === b.score){
            return b.score - a.score;
        } else{
            return b.score - a.score;
        }
    })

}
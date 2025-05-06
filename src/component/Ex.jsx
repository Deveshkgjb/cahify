import React from 'react'
import Ex2 from './Ex2'
const Ex=(props)=>{
    return (
        <div>Devesh{props.name}
        <Ex2 user={props.name}/>
        </div>
        
    )
}
export default Ex
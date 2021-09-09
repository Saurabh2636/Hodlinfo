import React from 'react'
import './style.css'
import image from './image/intern.png'
const Body = () => {
    return (
        <>
        <h2 style={{textAlign: 'center',color: 'white', marginTop:'40px'}}>Best Price to Trade</h2>
        <div className="body">
        
         <div className="subtitle">
             <h1 >0.69 %</h1>
             <p style={{color: 'white' ,textAlign: 'center'}}> 5 Mins</p>
         </div>
         <div className="subtitle">
             <h1 >0.71 %</h1>
             <p style={{color: 'white',textAlign: 'center'}}> 5 Mins</p>
         </div>
         <div className="subtitle">
              <h1 className="inr">34,53,546</h1>
             <p style={{color: 'white',textAlign: 'center'}}> Average BTC/INR net price including</p>
         </div>
         <div className="subtitle">
            
             <h1 >1.77 %</h1>
             <p style={{color: 'white',textAlign: 'center'}}> 5 Mins</p>
         </div>
         <div className="subtitle">
             <h1 >4.69 %</h1>
             <p style={{color: 'white',textAlign: 'center'}}> 5 Mins</p>
         </div>
        </div>
        <img src={image} width={'100%'}/>
      </>
    )
}

export default Body

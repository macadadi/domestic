import React,{useEffect, useState} from 'react'
import phonep from './phonep.svg'

function Landingbanner():JSX.Element {
    
    const services : string[] =['Home Cleaning','Laundry','Cooking']
    const [count,setCount]= useState<number>(0)
    const scolors :string[] = ['blue','green','orange']
  


    const Elements=()=>{
        setTimeout(()=>{
            if(count == 2){
                setCount( 0)   
            }
            else{
                setCount(count +1)
            }
           
        },2000)
    }
 useEffect(()=>{
     Elements()
 },[count])
    return (
        <div className="container ">
            <div className=" landing-banner row ">
            <div className="landind-left col-md-6 justify-content-center m-auto ">
                <h1> Say goodbye to</h1>
                <div className="services-d" style={{color:scolors[count]}}>
                <h1 >{services[count]}</h1>
                </div>
                <h1>forever</h1>

               <div className="p-div">
               <p>We take care of your chores, so you can get more </p>
                 <p> out of life. It's what you've always dreamed of.</p>
               </div>
                 <div>
                     <button className="btn-start p-3">Start Your new Life</button>
                     <button className="btn-watch">Icon Watch video</button>

                 </div>
            </div>
            <div className="landind-right col-md-6 pb-4 mb-4">
              <div className="outer">
                  <div className="inner">
                     <img src={phonep} />
                  </div>
              </div>
            </div>
        </div>
        </div>
    )
}

export default Landingbanner

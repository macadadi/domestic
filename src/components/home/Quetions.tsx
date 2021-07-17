import React,{useState} from 'react'
import Quizanswers from './Quizanswers'

export type more= {
    more : boolean
}
function Quetions() {
    const pp = [1,2,3,4]
    const [more,setMore]= useState<more | boolean>(false)


    const setToogle =(id :number) =>{
   setMore(!more)
   console.log(id)
       
    }
    return (
        <div className="quiz">
           <div className="container">
               <div className="row">
                   <div className="col-md-6 text-center m-auto pb-4 pt-4">
                       <h2>You Have Quetions ?</h2>
                       <h2>We have Answers.</h2>
                   </div>
                   <div className="col-md-6 pt-4">
                     {pp.map((item,index)=> <Quizanswers item={setToogle} id={index} more={more} />)}
                     
                      
                       </div>

               </div>
           </div>
        </div>
    )
}

export default Quetions

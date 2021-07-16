import React from 'react'
import Singlequetion from './Singlequetion'

function Quetions() {
    return (
        <div className="quiz">
           <div className="container">
               <div className="row">
                   <div className="col-md-6 text-align-center m-auto">
                       <h2>You Have</h2> <h2> Quetions ?</h2>
                       <h2>We have Answers.</h2>
                   </div>
                   <div className="col-md-6">
                       <Singlequetion />
                       </div>

               </div>
           </div>
        </div>
    )
}

export default Quetions

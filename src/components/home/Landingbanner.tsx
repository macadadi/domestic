import React from 'react'
import phonep from './phonep.svg'

function Landingbanner():JSX.Element {
    return (
        <div className="container ">
            <div className=" landing-banner row ">
            <div className="landind-left col-md-6 justify-content-center m-auto text-center">
                <h1> Say goodbye to</h1>
                <h1>market runs</h1>
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

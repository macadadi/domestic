import React from 'react'
import gplay from './gplay.svg'
import aplay from './aplay.svg'
import phonep from './phonep.svg'
import playstore from './playstore.svg'
function Playstore() {
    return (
        <div className="playstore ">
          <div className="container">
          <div className="row justify-content-center pt-4 play-row bg-success">
              <div className="col-md-6 bg-success text-center m-auto">
            <h1>  Get the app!</h1>
            <h4>Sign up on the Domestic app. Be happy.</h4>
            <div className="row justify-content-between ">
              <div className="col-md-6 pb-2 pt-3">
              <img  src={aplay}/>
              </div>
             <div className="col-md-6 pb-2 pt-3">
             <img  src={gplay}/>
             </div>
            </div>
              </div>
              <div className="col-md-6 bg-success h-40">
        
              </div>

          </div>
          <div className="play-phone"> 
              <img src={playstore} /></div>
          </div>
        </div>
    )
}

export default Playstore

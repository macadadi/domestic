


function Mainnavbar() : JSX.Element {
    return (
   <div className="d-flex nav-bar sticky-top">
  <div className=" pt-2 col-md-6 p-4 pt-0 pb-0"><h1>Domestic</h1></div>
  <div className="col-md-6">
      <ul className="our-product d-flex justify-content-around pt-2 ">
          <li className="services">Services 
          <div className="pop-up  ">
           <div className="pop-item d-flex more-div">
        
               <div className="text-center justify-content-center m-auto p-2 ">
                   <h5>
                       Get to know more about us
                   </h5>
               </div>
               <div className="list-div p-2">
                  <div className="m-2 p-2" >
                    <h5>Loundry</h5>
                    <h5>Cleaning</h5>
                    <h5>Gift</h5>
                    <h5>Food</h5>
                    </div >
               </div>
            
           </div>
       </div>
          </li>
          <li>Companies</li>
          <li>Pricing</li>
          <button className="btn-start p-1 get-started">Get Started</button>
      </ul>
  </div>
    </div>
    )
}

export default Mainnavbar

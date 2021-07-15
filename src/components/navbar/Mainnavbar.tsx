


function Mainnavbar() : JSX.Element {
    return (
        <div className="d-flex nav-bar sticky-top">
      <div className=" pt-2 col-md-6">left</div>
      <div className="col-md-6">
          <ul className="our-product d-flex justify-content-around pt-2 ">
              <li>Services</li>
              <li>Companies</li>
              <li>Pricing</li>
              <button className="btn-start p-1 get-started">Get Started</button>
          </ul>
      </div>
        </div>
    )
}

export default Mainnavbar

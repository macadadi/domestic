import React from 'react'
import {Iprop} from './Customers'

type Iprops ={
    item : Iprop
}
const Singlecustomer =({item}:Iprops)=>{
    return(
        <div className=" col-6 col-md-4 ">
            <div className=" customer-outer ">
            <div className="d-flex m-auto ">
          <img src={item.avatar} alt="Avatar" className="avatar p-2"/>
            <div className="p-2 mt-3">
            <h4 className="customer-name  m-0 p-o">{item.name}</h4>
            <h2 className=" pl-2 m-0 customer-handle">{item.handle}</h2>
            </div>
          </div >
            <h2 className="customer-review p-3 pt-0">{item.review}</h2>
            </div>
        </div>
    )
}
export default Singlecustomer


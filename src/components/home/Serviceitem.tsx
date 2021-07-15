import React from 'react'
import { Iservice } from './Servicespage'

 type Iprop ={
    item : Iservice
    index : number
}
const Serviceitem =({item,index }:Iprop) =>{
    const emojis = [`🥘`,`🧺`,`🏠`,`🎁`]
   
    return (
        <div className={`col-md-5  mt-3 m-2 p-2 service-item-d`} style={{backgroundColor:`${item.color}`}}>
          <div  className="p-4 service-item">
          <h2>{emojis[index]}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <button>icon</button>
            <h2>
                image
            </h2>
          </div>
        </div>
    )
}

export default Serviceitem

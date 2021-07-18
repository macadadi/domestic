import React,{useState,useEffect} from 'react'


function Quizanswers({item ,id,p,count}) {
    const [more,setMore]= useState(true)


    const Tooglediv =()=>{
        if(p==id ){
            setMore(!more)
        }
        else{
            setMore(true)
          
        }
    }
   useEffect(()=>{
    Tooglediv()
   },[count])
    return (
        <div>
        <div className="d-flex justify-content-between">
            <h4>What is Eden ?</h4>
           <div className="tooglebtn" onClick={()=>item(id)}> {more ?  <h4>X</h4> :  <h4>-</h4>}</div>
           
        </div>
        <div style={{display:`${more ? 'none' : 'inline'}`}}>
            <p>
            When you sign up on Eden, you can configure a plan that fits your needs, 
            then you get assigned a Gardener to help you manage your home. The app takes
             your food, laundry, and home cleaning needs and turns them into tasks that our
              Gardeners attend to on schedule. The only finger you'll
             be lifting is the one scrolling through the app, monitoring progress.
            </p>
        </div>
    </div>
    )
}

export default Quizanswers

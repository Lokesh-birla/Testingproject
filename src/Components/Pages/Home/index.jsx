import MainLayout from "../../layoute/Mainlayout";
import React, {  useState } from 'react'
import CardData from '../CardData'
const Home = () => {
const [data,usedata]=useState(CardData);
  return (
    <MainLayout>
      <div>Home</div>




 <div className='container'>
 <div className='row d-flex justify-content-center'>
{
  data.map((element,id)=>{ 
   return (
<div className="card p-4 m-4 ALLDATA " style={{width:'20rem'}}>
   <h>{id.id}</h>
   <img style={{height :'200px'}} src={element.image}></img>
 <div className="card-body">
 <h5 className="card-title">{element.name}</h5>   
 <h5 className="card-title">{element.price} ₹</h5>
   <p className="card-text"></p>
   <button className="btn btn-primary"
  
   >Add to Card</button>
 </div>
</div>
)
})
}
</div>
</div>


  


    </MainLayout>
  );
};
export default Home;

import React, { useState } from 'react'
import MainLayout from "../../layoute/Mainlayout";

function Registrar() {

  const[ val,setval]=useState({
    name : '',
    gmail : '',
    pass : ' '
  })
  const Sub = () =>{
  }
  // const [fname, fnamevalue]=useState('');
  const [lname, lnamevalue]=useState('');
  const[pass,setpass]=useState('');
  const [error, seterror]=useState(false);
  const handlesubmit = (e)=>{
    e.preventDefault(); 
    console.log(val)
    if(lname.length==0){
      seterror(true)
  }
  if( pass.length<=4){
    seterror(true)
    
  }

  
  
 };

  return (
    <MainLayout>
 {/* <pre>
  {JSON.stringify(values , undefined ,2)}
 </pre> */}
    <form className="row g-3 " onSubmit={handlesubmit}>
 
  <div className="col-md-12">
    <label for="inputEmail4" className="form-label">Name</label>
    <input type="text" className="form-control" id="inputEmail4"
    name='username'
  // onChange={e=>fnamevalue(e.target.value)}
  onChange={(e)=>setval((p)=>({...p , name: e.target.value}))}
   />
   {/* {error&&fname.length<= 0 ?
   <span className='text-danger'>fill this**</span>:""} */}
   </div>
  <div className="col-md-12">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"
     onChange={e=>lnamevalue(e.target.value)}
    />
    {error&&lname.length<= 0 ?
   <span className='text-danger' >fill this**</span>:""}
  </div>
  <div className="col-md-12">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" 
     onChange={e=>setpass(e.target.value)}
     
    />
        {error && pass.length <= 3 || pass.length >= 11?
   <span className='text-danger' >valide number**</span>:""}
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
 
  <div className="col-md-12">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="col-md-12">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-5">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip" />
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type='submit' className="btn btn-primary" onSubmit={Sub()}>Submit</button>
  </div>
</form>
    
    
    </MainLayout>
  )
}

export default Registrar;
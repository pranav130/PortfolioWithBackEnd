import React, {useEffect, useState} from 'react'
import "../App.css";
import { Link , useNavigate} from "react-router-dom";
import logo from '../images/resume_011.pdf'; 
import pic from '../images/pranavpic.png'; 



const Contact = () => {

  const navigate = useNavigate(); 
  const [userData, setData] = useState({});

const callAboutPage = async () =>{

   try {
      const res = await fetch('/about', {
         method: "GET",
         headers: {
            Accept: "application/json",
            "Content-Type":"application.json"
         },
         credentials:"include"
      });

      const data = await res.json();
      console.log(data);
      setData(data);
      
       if(!res.status === 200){
         const error = new Error(res.error);
         throw error;
       }

   } catch (err) {
      console.log(err);
      navigate('/home');
   }
}

useEffect(() => {
  callAboutPage();
}, []);

  return (
    <>
      <div className="home-page">
      <div className="home-div">
         <h2><b>Contact Me</b></h2>
         <img src={pic} alt="logo" />
         <div className='row' >
                         <div className='col-md-6' >
                            <label ><h3>Designation </h3></label>
                         </div>
                          <div className='col-md-6' >
                            <p><h3>{userData.designation}</h3></p>
                         </div>
                         <div className='col-md-6' >
                            <label ><h3>Name </h3></label>
                         </div>
                          <div className='col-md-6' >
                            <p><h3>{userData.name}</h3></p>
                         </div>
                         <div className='col-md-6' >
                            <label ><h3> Email </h3></label>
                         </div>
                          <div className='col-md-6' >
                            <p><h3>{userData.email}</h3></p>
                         </div>
                         <div className='col-md-6' >
                            <label ><h3> Phone</h3> </label>
                         </div>
                          <div className='col-md-6' >
                            <p><h3>{userData.phone}</h3></p>
                         </div>
                         <div className='col-md-6' >
                            <label ><h4> Download Resume:</h4> </label>
                         </div>
                          <div className='col-md-6' >
                            <Link type='button' className='btn btn-success' to={logo} target="blank" download>Download</Link>
                         </div>
                         
                     </div>
      </div>
      </div>
      
    </>
  )
}

export default Contact

import React, {useEffect, useState} from 'react'
import shivapic from "../images/shiva.jpg";
import { NavLink, useNavigate } from 'react-router-dom';

const bt =  {border: '0px solid #eee',
  color: '#460B13',
  fontFamily:'Apple Chancery, cursive',
  backgroundColor: '#fff',
  paddingLeft: '80px'
}
const btl =  {
  color: '#460B13',
  fontFamily:'Gill Sans, sans-serif',
  paddingLeft: '80px'
}
const cont = {
   maxWidth: '65%',
   marginBottom: '100px',
   paddingBottom: '10px'
 };

 const col = {
   color: 'white',
   width: '70%',
   marginLeft: '45px'
   };
   
 

const About = () => {

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
      <div className='container emp-profile mt-5' style={cont}>
             <form method='GET'>
                   <div className='row'>
                        <div className='col-md-4'>
                           <div className='profile-img' >
                           <img src={shivapic} alt="pic" />
                           </div>
                        </div>

              <div className='col-md-6'>
                      <div className='profile-head'><br/>
                           <h5><b>{userData.name}</b></h5>
                          <h5>{userData.work}</h5>
                            <br/>
                          <ul className='nav nav-tabs' role='tablist'>
                            
                            <li  className= "nav-item">
                              <a className='nav-link active'  id='home-tab'  data-toggle='tab'  role='tab'  href='#home'>About </a>
                            </li>

                            <li className= "nav-item">
                             <a className='nav-link '  id='home-tab'  data-toggle='tab'  role='tab'  href='#profile'>SkillSet </a>
                            </li>
                            <li className= "nav-item">
                             <a className='nav-link '  id='home-tab'  data-toggle='tab'  role='tab'  href='#exp'>Experience </a>
                            </li>

                          </ul>
                
                      </div>
              
                 </div>

           <div className='col-md-2' ><br/>
           <NavLink to='/login' type='button' style={col} className="cl-lg-2 nav-link btn btn-primary">Edit Profile</NavLink>
           </div>

          </div >

          <div className='row' >
            
            <div className='col-md-4' >  
              <div className='pofile-work' >
                 <b><p style={btl}>WORK LINKS</p></b>
                
                <b><a href='https://www.upenergy.in/' target='_link' style={bt}>UPPCL WEBSITE</a><br/></b>
                <b><a href='https://www.upenergy.in/' target='_link' style={bt}>MVVNL</a><br/></b>
                <b><a href='https://www.upenergy.in/' target='_link' style={bt}> PVVNL</a><br/></b>
                <b><a href='https://www.upenergy.in/' target='_link' style={bt}> PuVVNL</a><br/></b>
                <b><a href='https://www.upenergy.in/' target='_link' style={bt}> DVVNL</a><br/></b>
                <b><a href='https://www.upenergy.in/' target='_link' style={bt}>KESCO</a><br/></b>
                 <br/>
              </div>
            </div>
               
              <div className='col-md-8 pl-5 about-info' >
                 <div className='tab-content profile-tab' id='myTabContent' >
                   <div className='tab-pane fade show active' id='home' role='tabpanel'  area-aria-labelledby='home-tab'>
                      <div className='row' >
                         <div className='col-md-6' >
                            <label >Designation </label>
                         </div>
                          <div className='col-md-6' >
                            <p>{userData.designation}</p>
                         </div>
                         <div className='col-md-6' >
                            <label >Name </label>
                         </div>
                          <div className='col-md-6' >
                            <p>{userData.name}</p>
                         </div>
                         <div className='col-md-6' >
                            <label > Email </label>
                         </div>
                          <div className='col-md-6' >
                            <p>{userData.email}</p>
                         </div>
                         <div className='col-md-6' >
                            <label > Phone </label>
                         </div>
                          <div className='col-md-6' >
                            <p>{userData.phone}</p>
                         </div>
                         <div className='col-md-6' >
                            <label > Love Doing </label>
                         </div>
                          <div className='col-md-6' >
                            <p>{userData.hobby}</p>
                         </div>
                      </div>
                   </div>
                   <div className='tab-pane fade show active' id='profile' role='tabpanel'  area-aria-labelledby='profile-tab'>
                      <div className='row' >
                         <div className='col-md-6' >
                            <label > WEB Skills </label>
                         </div>
                          <div className='col-md-6' >
                            <p>{userData.webskill}</p>
                         </div>                 
                        <div className='col-md-6' >
                            <label > Qualifications </label>
                         </div>
                          <div className='col-md-6' >
                            <p>{userData.qualification}</p>
                         </div>
                         <div className='col-md-6' >
                            <label > Languages </label>
                         </div>
                          <div className='col-md-6' >
                            <p>{userData.langs}</p>
                         </div>
                      </div>
                   </div>
                   <div className='tab-pane fade show active' id='exp' role='tabpanel'  area-aria-labelledby='profile-tab'>
                      <div className='row' >
                         <div className='col-md-6' >
                            <label > WEB Projects </label>
                         </div>
                          <div className='col-md-6' >
                            <p>{userData.webproject}</p>
                         </div>                 
                        <div className='col-md-6' >
                            <label > Exam Experience </label>
                         </div>
                          <div className='col-md-6' >
                            <p>{userData.ExamExperience}</p>
                         </div>
                         <div className='col-md-6' >
                            <label > Work Experience </label>
                         </div>
                          <div className='col-md-6' >
                            <p>{userData.WorkExperience}</p>
                         </div>
                      </div>
                   </div>
                 </div>
              </div>

          </div>

        </form>
      </div>
    </>
  )
}

export default About

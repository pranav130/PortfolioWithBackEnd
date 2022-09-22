import React,{useEffect, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import signpic from "../images/logo1.jpg";
// import axios from "axios";

const csinp = {
  borderTopStyle: 'hidden',
  borderRightStyle: 'hidden',
  borderLeftStyle: 'hidden',
  borderBottomStyle: 'groove',
  backgroundColor: '#fff'
};

const cont = {
  maxWidth: '60%'
};

const col = {
color: 'white',
width: '55%',
marginLeft: '25px'
};
const EditPage = () => {
  const navigate1 = useNavigate();
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
      navigate1('/home');
   }
}

useEffect(() => {
  callAboutPage();
}, []);

  const [user,setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""});

    let name, value;
    const handleInputs = (e)=>{
      console.log(e);
      name = e.target.name;
      value = e.target.value;

      setUser({...user, [name]:value});
    }

   const PostData = async (e) =>{
     e.preventDefault();
     const {name,email,phone, work, password, cpassword, 
      designation,hobby,webskill,qualification,langs,webproject,
      ExamExperience,WorkExperience} = user;

     const res = await fetch("/editprofile",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
       name,email,phone, work, password, cpassword,
        designation,hobby,webskill,qualification,langs,
        webproject,ExamExperience,WorkExperience
      })
     }); 
     
       const data = await res.json();

       if (data.status === 422 || !password || !cpassword){
        window.alert("Updation Invalid...!!!");
        console.log("Updation Invalid...!!!");
       }
       else{
        window.alert("Updation Successful...!!!");
        console.log("Updation Successful...!!!");
          
        navigate('/');
       }
      }
  //   if( name && email && phone && work && password && cpassword){
  //     const response = await axios({
  //         method: "post",
  //         url: "http://localhost:5000/register/",
  //         params: { name, email, phone, work, password, cpassword},
  //       }).then( res => {
  //         alert(res.data.message)
  //         navigate("/login")
          

  //     })
  // } else {
  //     alert("invalid input")
  // }
  //  }

  return (
    <>
      <section className='signup'>
          <div className='container mt-5 mb-5' style={cont}>
            <div className='signup-content justify-content-between'>
              <div className='signup-form'><br/>
                <h2 className='form-title'>Edit Profile</h2>
                <form className='register-form align-items-center' method='POST' id='register-form'>
                  
                  <div className='form-group'>
                    <label htmlFor='name'>
                    <i className="zmdi zmdi-account"></i>
                    </label><br/>
                    <input type='text' style={csinp} name='name' id='name' autoComplete='off' 
                    value={user.name} 
                    onChange={handleInputs}
                    placeholder={userData.name} />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='email'>
                    <i className="zmdi zmdi-email"></i>
                    </label> <br></br> 
                    <input type='email' style={csinp} name='email' id='email' autoComplete='off' 
                    value={user.email} 
                    onChange={handleInputs}
                    placeholder={userData.email} />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='phone'>
                    <i className="zmdi zmdi-phone-in-talk"></i>
                    </label> <br></br> 
                    <input type='text' style={csinp} name='phone' id='phone' autoComplete='off' 
                    value={user.phone} 
                    onChange={handleInputs}
                    placeholder='Edit Phone' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='work'>
                    <i className="zmdi zmdi-run"></i>
                    </label> <br></br> 
                    <input type='text' style={csinp} name='work' id='work' autoComplete='off' 
                    value={user.work} 
                    onChange={handleInputs}
                    placeholder='Edit Work' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='designation'>
                    <i className="zmdi zmdi-coffee"></i>
                    </label> <br></br> 
                    <input type='text' style={csinp} name='designation' id='designation' autoComplete='off' 
                    value={user.designation} 
                    onChange={handleInputs}
                    placeholder='Edit Designation' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='hobby'>
                    <i className="zmdi zmdi-bike"></i>
                    </label> <br></br> 
                    <input type='text' style={csinp} name='hobby' id='hobby' autoComplete='off' 
                    value={user.hobby} 
                    onChange={handleInputs}
                    placeholder='Edit Hobby' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='webskill'>
                    <i className="zmdi zmdi-folder-star"></i>
                    </label> <br></br> 
                    <input type='text' style={csinp} name='webskill' id='webskill' autoComplete='off' 
                    value={user.webskill} 
                    onChange={handleInputs}
                    placeholder='Edit Webskill' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='qualification'>
                    <i className="zmdi zmdi-folder-person"></i>
                    </label> <br></br> 
                    <input type='text' style={csinp} name='qualification' id='qualification' autoComplete='off' 
                    value={user.qualification} 
                    onChange={handleInputs}
                    placeholder='Edit Qualification' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='langs'>
                    <i className="zmdi zmdi-radio"></i>
                    </label> <br></br> 
                    <input type='text' style={csinp} name='langs' id='langs' autoComplete='off' 
                    value={user.langs} 
                    onChange={handleInputs}
                    placeholder='Edit Languages' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='webproject'>
                    <i className="zmdi zmdi-receipt"></i>
                    </label> <br></br> 
                    <input type='text' style={csinp} name='webproject' id='webproject' autoComplete='off' 
                    value={user.webproject} 
                    onChange={handleInputs}
                    placeholder='Edit webproject' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='ExamExperience'>
                    <i className="zmdi zmdi-keyboard-hide"></i>
                    </label> <br></br> 
                    <input type='text' style={csinp} name='ExamExperience' id='ExamExperience' autoComplete='off' 
                    value={user.ExamExperience} 
                    onChange={handleInputs}
                    placeholder='Edit ExamExperience' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='WorkExperience'>
                    <i className="zmdi zmdi-laptop-chromebook"></i>
                    </label> <br></br> 
                    <input type='text' style={csinp} name='WorkExperience' id='WorkExperience' autoComplete='off' 
                    value={user.WorkExperience} 
                    onChange={handleInputs}
                    placeholder='Edit WorkExperience' />
                  </div>

                  

                  <div className='form-group'>
                    <label htmlFor='password'>
                    <i className="zmdi zmdi-lock"></i>
                    </label> <br></br> 
                    <input type='password' style={csinp} name='password' id='password' autoComplete='off' 
                    value={user.password} 
                    onChange={handleInputs}
                    placeholder='Your Password' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='cpassword'>
                    <i className="zmdi zmdi-lock"></i>
                    </label> <br></br> 
                    <input type='password' style={csinp} name='cpassword' id='cpassword' autoComplete='off' 
                    value={user.cpassword} 
                    onChange={handleInputs}
                    placeholder='Confirm Your Password' />
                  </div>
                  <br></br>
                  <div className='form-group form-button'>
                             <input type='submit' name='signup' id='signup' className='form-submit btn btn-primary'
                              value='Edit' onClick={PostData} />
                         <br/><br/>    
                
            
                  </div>

                </form>
                </div>
                <div className='signup-image'>
                   <figure>
                    <img src={signpic} alt='SignUp Pic' />
                   </figure><br/>
                   {/* <NavLink to='/login' style={col} type='button' className="cl-lg-2 nav-link btn btn-success">Already A Registered User</NavLink> */}
              
                </div>
                </div>
          </div>
      </section>
    </>
  )

}
export default EditPage

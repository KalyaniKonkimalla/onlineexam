import React, {useState, useContext} from 'react';
import loginpic from '../images/login.svg';
import { NavLink, useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import Signup from '../UserComponent/Signup';
import TestEnroll from "../TestEnrollComponent/enrolltable";

function Login () {

    let history = useHistory();
    const [useremail, setUserEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        const user={useremail,password}
        console.log(user)
        fetch("http://localhost:8080/user/user/login",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(user)
    
      }).then((e)=>{
        if(e.status==500){
          console.log(e.status)
          console.log(alert("Login Error!!"))
        }
        else{
          console.log(alert("login Successfull"));
          history.push("/TestEnroll");
        }
    })
 
}
    return (
        <>
             <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content">
                          
                            <div className="signin-image">
                                <figure>
                                    <img src={loginpic} alt="Login pic" />
                                </figure>
                                <NavLink to="/signup" className="signup-image-link">Create an Account</NavLink>
                            </div>
                       
                        <div className="signin-form">
                            <h2 className="form-title">Sign in</h2>
                            <form m className="register-form" id="register-form">
                             

                                 <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off"
                                        value={useremail}
                                        onChange={(e) => setUserEmail(e.target.value)}
                                        placeholder="Your Email"
                                    />
                                </div>


                                 <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Your Password"
                                    />
                                </div>

                              
                                <div className="form-group form-button"  onClick={handleSubmit}>
                                    <input type="submit" name="signin" id="signin" className="form-submit"
                                        value="Log In" 
                                    />
                                </div>

                            </form>
                        </div>
                      
                    </div>
                </div>
           </section>
       </>
    )
}

export default Login;

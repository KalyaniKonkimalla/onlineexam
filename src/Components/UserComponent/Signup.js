import React, {useState}  from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import signpic from "../images/signup.svg";
import 'bootstrap/dist/css/bootstrap.css';

function Signup()
{
    const [username,setUserName] = useState("")
    const [useremail,setUserEmail] = useState("")
    const [usermobileno,setUserMobileNo] = useState("")
    const [password,setPassword] = useState("")

   async function handleSubmit(e)
    {
        e.preventDefault()
        alert("User successfully registered");

        let item = {username,useremail,usermobileno,password}
        console.warn(item)

        let result = await fetch("http://localhost:8080/user/user/register", {
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        
    }




    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form  className="register-form" id="register-form">
                                
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="username" id="name" autoComplete="off"
                                    value={username}
                                    onChange={(e) =>setUserName(e.target.value)}
                                        placeholder="Your Name"
                                    />
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="useremail" id="email" autoComplete="off"
                                    value={useremail}
                                    onChange={(e)=>setUserEmail(e.target.value)}
                                        placeholder="Your Email"
                                    />
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="phone">
                                        <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input type="number" name="usermobileno" id="phone" autoComplete="off"
                                        value={usermobileno}
                                        onChange={(e)=>setUserMobileNo(e.target.value)}
                                        placeholder="Your Phone"
                                    />
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}
                                        placeholder="Your Password"
                                    />
                                </div>

                               
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit"
                                        value="Register" onClick={handleSubmit}
                                     
                                    />
                                </div>

                            </form>
                        </div>
                        
                            <div className="signup-image">
                                <figure>
                                    <img src={signpic} alt="registration pic" />
                                </figure>
                                <NavLink to="/login" className="signup-image-link">Already registered?</NavLink>
                            </div>
                       
                    </div>
                </div>
           </section>
        </>
    )
}

export default Signup;

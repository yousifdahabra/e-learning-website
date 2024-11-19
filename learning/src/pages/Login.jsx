import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/pages/login.css';
import Header from '../components/base/Header'

import { requestAPI } from '../utlis/request.js'

const Login = () => {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {

  }, [loginForm]);

  return (




    <>
    
    <Header/>
    <div class="flex main-container">
        <div class="nav-container">
            <nav class="flex flex-direction-column justify-content-space-between second-background-color nav">
                <div class="nav-options">
                    <a href="#" class="nav-option active">
                        <i class="fa fa-tachometer" aria-hidden="true"></i>
                        <h3> Login / Sign Up</h3>
                    </a>
                </div>
            </nav>
        </div>
    </div>
    <div id="form_model" class="login-model">
        <div class="login-modal-content flex flex-direction-column align-items-center justify-content-center flex-wrap">
            <div class="form flex flex-direction-column">
                <div class=" flex flex-wrap-nowrap align-items-start  form-group">
                  {error && <label class="alert" id="message_alert">{error}</label>}

                    
                </div>

                <div class=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="User Name">User Name</label>
                    <input id="username" type="text"
                      onChange={(e) => {
                        setLoginForm({
                          ...loginForm,
                          username: e.target.value,
                        });
                    
                    
                      }}
                    
                    
                    />
                </div>
                <div class=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="Password">Password</label>
                    <input id="password"  type="password"
                      onChange={(e) => {
                        setLoginForm({
                          ...loginForm,
                          password: e.target.value,
                        });
                      }}
                    
                    
                    />
                </div>

                <div class=" flex flex-wrap-nowrap align-items-start  form-group">
                    <button id="submit_login_form" class="view" type="button"
                      onClick={ async () => {
                        setError('');
                        const data = new FormData();
                    
                        data.append("username", loginForm.username);
                        data.append("password", loginForm.password);

                       const respons = await axios.request({
                          url:`Login.php`,
                          method:'POST',
                          data:data
                      });
                      const result = respons.data


                        if(result.states == 1){
                          localStorage.setItem("token", result.token);
                          localStorage.setItem("user", result.user);

                          if(result.user.role == 'admin'){
                            navigate("/AdminDashboard");
                          }
                            console.log(result)
                        }else{
                          setError(result.messages);
                        }

                        
                       
                      }}
                    
                    
                    >Submit</button>
                </div>
            </div>
        </div>
    </div>
 

    </>
  );
};

export default Login;

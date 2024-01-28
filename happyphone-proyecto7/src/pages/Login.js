    import { useEffect, useState } from "react";
    import { Link, useNavigate } from "react-router-dom";
    import { ToastContainer, toast } from "react-toastify";
    import 'react-toastify/dist/ReactToastify.css';
    import '../css/login.css'

    export function Login()  {
        const [username, usernameupdate] = useState('');
        const [password, passwordupdate] = useState('');
        // navigator hook
        const usenavigate=useNavigate();
    
        useEffect(()=>{
    sessionStorage.clear();
        },[]);
    
        const ProceedLogin = (e) => {
            e.preventDefault();
            if (validate()) {
                ///implentation
                // console.log('proceed');
                fetch("http://localhost:8000/user/" + username).then((res) => {
                    return res.json(); // to written the data into json format
                }).then((resp) => {
                    //console.log(resp)
                    if (Object.keys(resp).length === 0) {
                        toast.error('Please Enter valid username');
                    } else {
                        if (resp.password === password) {
                            toast.success('Success');
                            sessionStorage.setItem('username',username);
                            sessionStorage.setItem('userrole',resp.role);
                            usenavigate('/')
                        }else{
                            toast.error('Please Enter valid credentials');
                        }
                    }
                }).catch((err) => {
                    // toast.error('Login Failed due to :' + err.message);
                    toast.error('Login Failed! not valid user, veriry username and password. click new user to register!! ');
                });
            }
        }
    
        const ProceedLoginusingAPI = (e) => {
            e.preventDefault();
            if (validate()) {
                ///implentation
                // console.log('proceed');
                let inputobj={"username": username,
                "password": password};
                fetch("https://localhost:44308/User/Authenticate",{
                    method:'POST',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(inputobj)
                }).then((res) => {
                    return res.json();
                }).then((resp) => {
                    console.log(resp)
                    if (Object.keys(resp).length === 0) {
                        toast.error('Login failed, invalid credentials');
                    }else{
                         toast.success('Success');
                         sessionStorage.setItem('username',username);
                         sessionStorage.setItem('jwttoken',resp.jwtToken);
                       usenavigate('/')
                    }
                    // if (Object.keys(resp).length === 0) {
                    //     toast.error('Please Enter valid username');
                    // } else {
                    //     if (resp.password === password) {
                    //         toast.success('Success');
                    //         sessionStorage.setItem('username',username);
                    //         usenavigate('/')
                    //     }else{
                    //         toast.error('Please Enter valid credentials');
                    //     }
                    // }
                }).catch((err) => {
                    toast.error('Login Failed due to :' + err.message);
                });
            }
        }
        const validate = () => {
            let result = true;
            if (username === '' || username === null) {
                result = false;
                // console.log("no hay nombre")
                toast.warning('Por favor introduce el nombre de usuario');
            }
            if (password === '' || password === null) {
                result = false;
                // console.log("no hay controseña")
                 toast.warning('Por favor introduce la contraseña');
            }
            
            return result;
            
        }
       
        return (
            <section className="container">
              
               
                <div className="width-form-login">
                  
                    <form onSubmit={ProceedLogin} className="formulario-login">
                        
                            
                            <h4>LOGIN</h4>
                            
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Nombre de usuario <span className="errmsg">*</span></label>
                                    <input value={username} onChange={e => usernameupdate(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Contraseña <span className="errmsg">*</span></label>
                                    <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="login-button">
                                <button type="submit" className="link-to-return">Login</button>  
                                <Link className="link-to-return" to={'/register'}>Nuevo Usuario</Link>
                            </div>
                        
                    </form>
                </div>
            </section>
         
            
        );
    }

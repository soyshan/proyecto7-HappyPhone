import { useState } from "react";
    import { Link, useNavigate } from "react-router-dom";
    import { toast } from "react-toastify";
    import ReCAPTCHA from "react-google-recaptcha";
    import '../css/login.css'
    
    
    export function Register()  {
    
        const [id, idchange] = useState("");
        const [name, namechange] = useState("");
        const [password, passwordchange] = useState("");
        const [email, emailchange] = useState("");
        const [phone, phonechange] = useState("");
        const [country, countrychange] = useState("india");
        const [address, addresschange] = useState("");
        const [gender, genderchange] = useState("female");
    
        const navigate = useNavigate();
    
        const [isVerified, setIsVerified] = useState(false);
    
    
        const handleRecaptchaChange = (value) => {
            // Handle reCAPTCHA value change, e.g., store it in state
            console.log("reCAPTCHA value:", value);
            setIsVerified(true);
          };
    
        //validation for mandatory fields
        const IsValidate = () => {
            let isproceed = true;
            let errormessage = 'Por favor introduce el valor en ';
            if (id === null || id === '') {
                isproceed = false;
                errormessage += ' Nombre de usuario';
            }
            if (name === null || name === '') {
                isproceed = false;
                errormessage += ' Nombre completo';
            }
            if (password === null || password === '') {
                isproceed = false;
                errormessage += ' contraseña';
            }
            if (email === null || email === '') {
                isproceed = false;
                errormessage += ' Email';
            }
            //patern validation
            if(!isproceed){
                toast.warning(errormessage)
            }else{
                if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
    
                }else{
                    isproceed = false;
                    toast.warning('Por favor introduce un email valido')
                }
            }
            return isproceed;
        }
    
    
        const handlesubmit = (e) => {
                e.preventDefault();
                let regobj = { id, name, password, email, phone, country, address, gender };
                if (IsValidate()) {
                
                fetch("http://localhost:8000/user", {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(regobj)
                }).then((res) => {
                    toast.success('Registered successfully.')
                    navigate('/login');
                }).catch((err) => {
                    toast.error('Failed :' + err.message);
                });
            }
        }
        return (
            <section className="container">
                <div className="width-form-login">
                    <form className="formulario" onSubmit={handlesubmit}>

                              <h4>Registro</h4>
                           
                            <div className="card-body">
    
                                
                                    <div className="lines-form-register">
                                        <div className="form-group">
                                            <label>Nombre de usuario <span className="errmsg">*</span></label>
                                            <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    
                                        <div className="form-group">
                                            <label>Contraseña <span className="errmsg">*</span></label>
                                            <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="lines-form-register">
                                        <div className="form-group">
                                            <label>Nombre completo <span className="errmsg">*</span></label>
                                            <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                        </div>
                                   
                                        <div className="form-group">
                                            <label>Email <span className="errmsg">*</span></label>
                                            <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="lines-form-register">
                                        <div className="form-group">
                                            <label>Teléfono <span className="errmsg"></span></label>
                                            <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    
                                        <div className="form-group">
                                            <label>País <span className="errmsg">*</span></label>
                                            <select value={country} onChange={e => countrychange(e.target.value)} className="form-control">
                                                <option value="spain">España</option>
                                                <option value="france">Francia</option>
                                                <option value="germany">Alemania</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Dirección</label>
                                            <textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control"></textarea>
                                        </div>
                                    </div>
                                    
                                        <div className="form-group">
                                            <label>Sexo</label>
                                            <br/>
                                            <input type="radio" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
                                            <label>Hombre</label>
                                            <input type="radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check"></input>
                                            <label>Mujer</label>
                                        </div>
    
                            </div>
                            <div className="captcha">
                                <ReCAPTCHA 
                                sitekey="6Lc-UlQpAAAAAP4ARjFNQIWVOitb_1rDnTBUsbbG"
                                onChange={handleRecaptchaChange}
                                />
                               <div>

                              
                                <button disabled={!isVerified} type="submit" className="link-to-return">Register</button>
    
                                <Link to={'/login'} className="link-to-return">Close</Link>
                                </div>
                             </div>
                    </form>
                </div>
    
                
            </section>
        );
    }


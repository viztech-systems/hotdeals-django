import {NavLink, useNavigate } from "react-router-dom";
import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { signup } from "../../actions/auth";
import axios from "axios";

let SignUpPage = () => {
    let link = "";
    const navigate = useNavigate();

    const [accountCreated, setAccountCreated] = useState(false);

    const userStatus = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [values, setValues]= useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        re_password:"",
    });

    const {first_name, last_name, email, password, re_password} = values;

    const handleChange = (event) => {
        const {name, value} = event.target;

        setValues({...values, [name]:value});
    }

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = () => {   
        
        if (password === re_password) {
            dispatch(signup(first_name, last_name, email, password, re_password));
            setAccountCreated(true);
        };
    };

    const continueWithGoogle = async () => {
        try {
            const res = await axios.get('http://localhost:3000/auth/o/google-oauth2/?redirect_uri=http://localhost:3000/google')

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    const continueWithFacebook = async () => {
        try {
            const res = await axios.get('http://localhost:3000/auth/o/facebook/?redirect_uri=http://localhost:3000/facebook')

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    if (userStatus.isAuthenticated) {
        navigate("/")
    }

    if (accountCreated) {
        navigate("/userlogin")
    }
    
    
    return(
        <>
            <div className="container-fluid signup-form d-flex flex-column justify-content-center align-items-center" >
                <div className="container-fluid d-flex justify-content-center mb-4 p-0">
                <span className="fs-3 fw-bolder" style={{fontWeight:"400", color:"black"}}>Create an account</span>
                </div>
                <div className="container d-flex justify-content-center px-3">
                    <form method="POST" className="rounded-5" onSubmit={handleSubmit(onSubmit)} noValidate style={{color:"black", fontWeight:"500"}}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control rounded-5 rounded-5" name="first_name" ref={register({ required: "first name is required" })} value={values.first_name} onChange={handleChange} />
                            <p className="warning">{errors.first_name?.message}</p>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control rounded-5" name="last_name" ref={register({ required: "last name is required" })} value={values.last_name} onChange={handleChange} />
                            <p className="warning">{errors.last_name?.message}</p>
                        </div>
                        <div className="form-group">
                            <label>Your email</label>
                            <input type="email" className="form-control rounded-5" name="email"  ref={register({ required: "Email is required", pattern: { value: /\S+@\S+\.\S+/i, message: "This is not a valid email" }})} value={values.email} onChange={handleChange} />
                            <p className="warning">{errors.email?.message}</p>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control rounded-5" name="password" ref={register({ required: "Password is required", minLength: {value: 4, message: "Password must be more than 4 characters" }, maxLength: { value: 20, message: "Password cannot exceed more than 20 characters" }, })} value={values.password} onChange={handleChange} />
                            <p className="warning">{errors.password?.message}</p>
                        </div>
                        <div className="form-group">
                            <label>Re-enter Password</label>
                            <input type="password" className="form-control rounded-5" name="re_password" ref={register({ required: "Password is required", minLength: {value: 4, message: "Password must be more than 4 characters" }, maxLength: { value: 20, message: "Password cannot exceed more than 20 characters" }})} value={values.re_password} onChange={handleChange} />
                            <p className="warning">{errors.re_password?.message}</p>
                        </div>          
                        <div className="form-group">
                            <label className="form-check-label"><input type="checkbox" required /> I accept the <a href={link} style={{color:"blue"}}>Terms of Use</a> &amp; <a href={link} style={{color:"blue"}}>Privacy Policy</a></label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="container btn btn-success btn-lg" ><span className="text-capitalize" style={{fontSize:"14px", fontWeight:"500"}}>Register Now</span></button>
                        </div>
                        <div className="form-group">
                            <button className='container btn btn-danger btn-lg' onClick={continueWithGoogle}><span className="text-capitalize" style={{fontSize:"14px", fontWeight:"500"}}> Sign up With Google </span> </button>
                        </div>
                        <div className="form-group">
                            <button className='container btn btn-primary btn-lg' onClick={continueWithFacebook}><span className="text-capitalize" style={{fontSize:"14px", fontWeight:"500"}}> Sign up With Facebook </span> </button>
                        </div>
                        <div className="text-center mt-3">Already have an account? <NavLink to="/userlogin"><span style={{color:"blue" }} >Sign in</span></NavLink></div>
                        <hr className="container"/>

                        <div className="container-fluid d-flex justify-content-center p-0" >
                            <NavLink to="/" className="nav-link p-2 " style={{color:"blue"}}>Home</NavLink>
                            <NavLink className="nav-link p-2 " style={{color:"blue"}} to="/userlogin">User Login</NavLink>
                            <NavLink to="/adminlogin" className="nav-link p-2 " style={{color:"blue"}}>Admin Login</NavLink>
                        </div>
                    </form>                
                </div>
            </div>
        </>
    );
}

export default SignUpPage;
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../actions/auth';
import axios from "axios";

const UserLoginPage = () => {

    const userStatus = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
       email: "",
       password: "" 
    });

    const {email, password} = loginData;

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setLoginData({...loginData, [name]: value});
    }

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = () =>{
        dispatch(login(email, password));
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

    return(
        <>
            <div className="login-form">
            <div className="container d-flex justify-content-center mb-4">
                <span className="fs-3 fw-bolder text-black">User Sign in</span>
                </div>
                <div className="d-flex justify-content-center">
                <form method="POST" className='rounded-5 py-6 px-4 bg-white text-black' onSubmit={handleSubmit(onSubmit)} style={{fontWeight:"500"}}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control rounded-5" name="email" placeholder="email" ref={register({ required: "Email is required"})} value={login.email} onChange={handleChange} />
                        <p className="warning">{errors.email?.message}</p>
                    </div>
                    <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control rounded-5" name="password" placeholder="Password" ref={register({ required: "password is required" })} value={login.password} onChange={handleChange} />
                            <p className="warning">{errors.password?.message}</p>
                    </div>   
                    <div className="clearfix mb-2">
                        <label className="float-left form-check-label p-1"><input type="checkbox" required /> Remember me</label>
                        <NavLink to="/reset_password" className="float-right text-primary">Forgot Password?</NavLink>
                    </div>       
                    <div className="form-group">
                        <button type="submit" className="container btn btn-primary btn-block login-btn"><span className="text-capitalize" style={{fontSize:"14px", fontWeight:"500"}}>Sign in</span></button>
                    </div>
                    <div className="form-group">
                            <button className='container btn btn-danger btn-lg' onClick={continueWithGoogle}><span className="text-capitalize" style={{fontSize:"14px", fontWeight:"500"}}> Sign up With Google </span> </button>
                    </div>
                    <div className="form-group">
                        <button className='container btn btn-primary btn-lg' onClick={continueWithFacebook}><span className="text-capitalize" style={{fontSize:"14px", fontWeight:"500"}}> Sign up With Facebook </span> </button>
                    </div>                    
                    <div className="hint-text mt-3">Don't have an account? <NavLink to="/signup" className="text-primary">Register Now!</NavLink></div>     
                    <hr className="container m-0"/>
                    <div className="container-sm d-flex justify-content-center">
                        <NavLink to="/" className="nav-link p-2 text-primary">Home</NavLink>
                        <NavLink to="/adminlogin" className="nav-link p-2 text-primary">Admin Login</NavLink>
                    </div>           
                </form>        
                </div>
            </div>            
        </>
    );
}

export default UserLoginPage;
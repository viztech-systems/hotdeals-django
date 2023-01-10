import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset_password } from '../../actions/auth';
import { useForm } from 'react-hook-form';

const ResetPassword = () => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { email } = formData;

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = e => {

        dispatch(reset_password(email));
        setRequestSent(true);
    };

    if (requestSent) {
        navigate('/')
    }

    return (
        <div className="login-form">
            <div className="container d-flex justify-content-center mb-4">
                <span className="fs-3 fw-bolder text-black">Reset Password</span>
                </div>
                <div className="d-flex justify-content-center">
                <form method="POST" className='rounded-5 py-6 px-4 bg-white text-black' onSubmit={handleSubmit(onSubmit)} style={{fontWeight:"500"}}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control rounded-5" name="email" placeholder="email" ref={register({ required: "Email is required"})} value={formData.email} onChange={handleChange} />
                        <p className="warning">{errors.email?.message}</p>
                    </div> 
                    <div className="form-group">
                        <button type="submit" className="container btn btn-primary btn-block login-btn"><span className="text-capitalize" style={{fontSize:"14px", fontWeight:"500"}}>Reset password</span></button>
                    </div>   
                <hr className="container m-0"/>
                    <div className="container-sm d-flex justify-content-center">
                        <NavLink to="/" className="nav-link p-2 text-primary">Home</NavLink>
                </div>           
                </form>        
                </div>
            </div>            
    );
};

export default ResetPassword;

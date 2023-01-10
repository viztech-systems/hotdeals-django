import React, { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset_password_confirm } from '../../actions/auth';
import { useForm } from 'react-hook-form';

const ResetPasswordConfirm = ({match}) => {
    const { uid } = useParams();
    const { token } = useParams();

    const [requestSent, setRequestSent] = useState(false);

    const [formData, setFormData] = useState({
        new_password: "",
        re_new_password: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { new_password, re_new_password } = formData;

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = e => {

        console.log(uid, token)

        dispatch(reset_password_confirm(uid, token, new_password, re_new_password));
        setRequestSent(true);
    };

    if (requestSent) {
        navigate('/')
    }

    return (
        <div className="login-form">
            <div className="container d-flex justify-content-center mb-4">
                <span className="fs-3 fw-bolder text-black">Reset Password Confirm</span>
                </div>
                <div className="d-flex justify-content-center">
                <form method="POST" className='rounded-5 py-6 px-4 bg-white text-black' onSubmit={handleSubmit(onSubmit)} style={{fontWeight:"500"}}>
                    <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control rounded-5" name="new_password" placeholder="New password" ref={register({ required: "password is required" })} value={formData.password} onChange={handleChange} />
                            <p className="warning">{errors.password?.message}</p>
                    </div>   
                    <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control rounded-5" name="re_new_password" placeholder="Confirm new password" ref={register({ required: "password is required" })} value={formData.password} onChange={handleChange} />
                            <p className="warning">{errors.password?.message}</p>
                    </div>   
                    <div className="form-group">
                        <button type="submit" className="container btn btn-primary btn-block login-btn"><span className="text-capitalize" style={{fontSize:"14px", fontWeight:"500"}}>Reset password confirm</span></button>
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

export default ResetPasswordConfirm;

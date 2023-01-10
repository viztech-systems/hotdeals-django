import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { BsPenFill } from "react-icons/bs";


const UserEditInfo = () => {

    const history = useNavigate();
    
    const [values, setValues]= useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        newpassword:""
    });

    const [signinRecord, setSigninRecord]=useState([]);

    const handleChange = (event) => {
        const {name, value} = event.target;

        setValues({...values, [name]:value});
    }

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async () => {
        setSigninRecord([...signinRecord, values]);
        setValues({
            first_name:"",
            last_name:"",
            email:"",
            password:"",
            newpassword:""
        });     
        
        const {first_name, last_name, email, password, newpassword} = values;

        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ first_name, last_name, email, password,newpassword })
        });

        const data = await res.json();

        if(res.status === 422 || !data ) {
            window.alert("invalid registration");
            console.log("invalid registration");
        }else {
            window.alert("successfull registration");
            console.log("successfull registration");

            history("/userlogin");
        }
    };

    return (
            <>
                <div className='col-12 d-flex justify-content-start p-3 border-bottom border-5'><div className=''><span className='fs-5 fw-bold text-body p-1'>Edit Info</span></div><div><span className='p-1'><BsPenFill fontSize="20px"/></span></div></div>
                <div className='col-12 d-flex justify-content-center  py-4'>
                    <form method="POST" className="col-10 col-lg-7 col-sm-8 rounded-5" onSubmit={handleSubmit(onSubmit)} noValidate style={{color:"black", fontWeight:"500"}}>
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
                            <input type="password" className="form-control rounded-5" name="password" ref={register({ required: "Password is required", minLength: {value: 4, message: "Password must be more than 4 characters" }, maxLength: { value: 10, message: "Password cannot exceed more than 10 characters" }})} value={values.password} onChange={handleChange} />
                            <p className="warning">{errors.password?.message}</p>
                        </div>
                        <div className="form-group">
                            <button type="submit" className=" w-100 btn btn-primary btn-lg" ><span className="text-capitalize" style={{fontSize:"14px", fontWeight:"500"}}>Update</span></button>
                        </div>
                    </form>              
                </div>
            </>
    )
}

export default UserEditInfo
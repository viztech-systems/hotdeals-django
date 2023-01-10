import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { verify } from '../../actions/auth';

const ActivateAccount = () => {

    const { uid } = useParams();
    const { token } = useParams();

    const [verified, setVerified] = useState(false);

    const dispatch = useDispatch();

    const link = "";
    const navigate = useNavigate();


    const verifyAccount = () =>{
        dispatch(verify(uid, token));
        setVerified(true);
    }

    if (verified) {
        navigate("/")
    }

    return(
        <>
            <div className="login-form">
            <div className="container d-flex justify-content-center mb-4">
                <span className="fs-3 fw-bolder text-black">Verify Your Account</span>
                </div>
                <div className="d-flex justify-content-center">      
                    <div className="form-group">
                        <button type="button" className="container btn btn-primary btn-block login-btn" onClick={verifyAccount}><span className="text-capitalize" style={{fontSize:"14px", fontWeight:"500"}}>Verify</span></button>
                    </div>        
                </div>
            </div>            
        </>
    );
}

export default ActivateAccount;
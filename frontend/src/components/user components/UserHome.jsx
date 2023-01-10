import Navbar from '../Navbar';
import Footer from "../Footer";
import UserEditInfo from './UserEditInfo';
import UserSubmittedDeals from './UserSubmittedDeals';
import UserVotedDeals from './UserVotedDeals';
import { useState } from 'react';


const UserHome = () => {

    const [value, setValue] = useState({
        editInfo:true,
        submitedDeals:false,
        votedDeals:false
    })

    const handleChange = (e) => {
        if(e === "editInfo"){
            setValue({
                editInfo:true,
                submitedDeals:false,
                votedDeals:false
            })
        }
        else if(e === "submitedDeals"){
            setValue({
                editInfo:false,
                submitedDeals:true,
                votedDeals:false
            })
        }
        else if(e === "votedDeals"){
            setValue({
                editInfo:false,
                submitedDeals:false,
                votedDeals:true
            })
        }
    }

    return(
        <>
            <Navbar />
            <div className='container-lg my-3 p-0'>
                <div className='col-12 d-flex bg-white shadow shadow-3 rounded-4 py-3 px-4 mb-3 '>
                    <div className='col-6'>
                        <span className='fs-3 fw-bold'>Welcome <span className='text-success'>User</span></span>
                    </div>
                    <div className='col-6 d-flex justify-content-end align-items-center'>
                        <span className='fs-6 fw-bold text-muted fst-italic'>user@gmail.com</span>
                    </div>
                </div>
                <div className='col-12 d-flex flex-column flex-lg-row justify-content-between p-0'>
                    <div className='col-12 col-lg-3 col-md-12 col-sm-12 menus'>
                        <div className='col-12 col-md-12 col-lg-11 bg-white h-100 shadow shadow-3 rounded-4'>
                            <div className="list-group list-group-flush col-12 d-flex flex-row flex-lg-column flex-md-row flex-sm-row">
                                <button className="list-group-item list-group-item-action active d-flex justify-content-center justify-content-lg-start align-items-center usermenu text-center text-sm-start rounded-3" data-bs-toggle="list" onClick={()=> handleChange("editInfo")}>Edit Profile</button>
                                <button className="list-group-item list-group-item-action d-flex justify-content-center justify-content-lg-start align-items-center usermenu text-center text-sm-start rounded-3" data-bs-toggle="list" onClick={()=> handleChange("submitedDeals")}>Submitted Deals</button>
                                <button className="list-group-item list-group-item-action d-flex justify-content-center justify-content-lg-start align-items-center usermenu text-center text-sm-start rounded-3 border-bottom" data-bs-toggle="list" onClick={()=> handleChange("votedDeals")}>Voted Deals</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-9 col-md-12 col-sm-12 d-flex flex-column justify-content-center bg-white shadow shadow-3 rounded-4 p-0'>
                        <div style={{display: value.editInfo ? "block": "none"}}>
                            <UserEditInfo/>
                        </div>
                        <div style={{display: value.submitedDeals ? "block": "none"}}>
                            <UserSubmittedDeals/>
                        </div>
                        <div style={{display: value.votedDeals ? "block": "none"}}>
                            <UserVotedDeals/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );

}

export default UserHome;
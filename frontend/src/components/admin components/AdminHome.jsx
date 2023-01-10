import { useState } from 'react';
import Navbar from '../Navbar';
import Footer from "../Footer";
import AdminEditInfo from './AdminEditInfo';
import UsersList from './UsersList';
import DealsList from './DealsList';


const AdminHome = () => {

    const [value, setValue] = useState({
        editInfo:true,
        userList:false,
        allDeals:false
    })

    const handleChange = (e) => {
        if(e === "editInfo"){
            setValue({
                editInfo:true,
                userList:false,
                allDeals:false
            })
        }
        else if(e === "userList"){
            setValue({
                editInfo:false,
                userList:true,
                allDeals:false
            })
        }
        else if(e === "allDeals"){
            setValue({
                editInfo:false,
                userList:false,
                allDeals:true
            })
        }
    }

    return(
        <>
            <Navbar />
            <div className='container-lg my-3 p-0'>
                <div className='col-12 d-flex bg-white shadow shadow-3 rounded-4 py-3 px-2 px-sm-4 mb-3 '>
                    <div className='col-7'>
                        <span className='fs-3 fw-bold'>Welcome <span className='text-success'>Admin</span></span>
                    </div>
                    <div className='col-5 d-flex justify-content-end align-items-center'>
                        <span className='fs-6 fw-bold text-muted fst-italic mail'>admin@gmail.com</span>
                    </div>
                </div>
                <div className='col-12 d-flex flex-column flex-lg-row justify-content-between p-0'>
                    <div className='col-12 col-lg-3 col-md-12 col-sm-12 menus'>
                        <div className='col-12 col-md-12 col-lg-11 bg-white h-100 shadow shadow-3 rounded-4'>
                            <div className="list-group list-group-flush col-12 d-flex flex-row flex-lg-column flex-md-row flex-sm-row">
                                <button className="list-group-item list-group-item-action active d-flex justify-content-center justify-content-lg-start align-items-center usermenu text-center text-sm-start rounded-3" data-bs-toggle="list" onClick={()=> handleChange("editInfo")}>Edit Profile</button>
                                <button className="list-group-item list-group-item-action d-flex justify-content-center justify-content-lg-start align-items-center usermenu text-center text-sm-start rounded-3" data-bs-toggle="list" onClick={()=> handleChange("userList")}>User List</button>
                                <button className="list-group-item list-group-item-action d-flex justify-content-center justify-content-lg-start align-items-center usermenu text-center text-sm-start rounded-3 border-bottom" data-bs-toggle="list" onClick={()=> handleChange("allDeals")}>All Deals</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-9 col-md-12 col-sm-12 d-flex flex-column justify-content-center bg-white shadow shadow-3 rounded-4 p-0'>
                        <div style={{display: value.editInfo ? "block": "none"}}>
                            <AdminEditInfo/>
                        </div>
                        <div style={{display: value.userList ? "block": "none"}}>
                            <UsersList/>
                        </div>
                        <div style={{display: value.allDeals ? "block": "none"}}>
                            <DealsList/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );

}

export default AdminHome;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserDealsData from './UserDealsData';

const UserVotedDeals = () => {
  const [deals, setDeals] = useState(UserDealsData);

    return (
        <>
          <div className="container-fluid p-0">
            <div className='col-12 d-flex justify-content-center p-3 border-bottom border-5'><div className='col-12'><span className='fs-5 fw-bold text-body'>Voted Deals</span></div></div>
            <div className='col-12 d-flex justify-content-center p-2'>
              <div className='col-8 col-sm-6 d-flex justify-content-center'>
                  <div className="input-group rounded">
                      <input type="search" className="form-control border rounded-start" placeholder="Search" aria-label="Search" aria-describedby="search-addon"/>
                      <span className="input-group-text border-0 bg-primary" id="search-addon">
                          <i className="fas fa-search" style={{cursor:"pointer", color:"white"}}></i>
                      </span>
                  </div>
              </div>
            </div>
            <div className="container-fluid row d-flex justify-content-center py-3 m-0"> 
              {deals.map((val, index) => {
                return (
                      <div className="container-fluid d-flex justify-content-center p-0" key={index}>
                        <div className="w-100 card mb-3 list-card border shadow-none">
                          <div className="row h-100">
                            <div className="col-4 h-100 p-0 d-flex justify-content-center align-items-center">
                              <div style={{maxHeight:"100%", maxWidth:"50%"}}>
                                <NavLink to="/dealdetails">
                                  <img src={val.image} className="card-img" alt="dealpictures"/>
                                </NavLink>
                              </div>
                            </div>
                            <div className="col-8 p-0 list-card-body card-body d-flex justify-content-between flex-column justify-content-evenly">
                              <div style={{padding:"10px 10px 0 0"}}>
                                <div className="col-12 mb-2">
                                  <div className="col-sm-3 col-5 d-flex border border-2 rounded-2">
                                      <div className="degree-icons col-3 d-flex justify-content-center" style={{color: "red", cursor:"pointer", fontWeight:"bold"}}>-</div>
                                      <div className="degree-icons col-6 d-flex justify-content-center">1</div>
                                      <div className="degree-icons col-3 d-flex justify-content-center" style={{color: "green", cursor:"pointer", fontWeight:"bold"}}>+</div>
                                  </div>
                                </div>          
                                <NavLink to="/dealdetails"><h5 className="list-card-title card-title m-1 text-uppercase text-body">{val.name}</h5></NavLink>
                                <NavLink to="/dealdetails"><p className="list-card-text card-text text-body m-1">{val.info}</p></NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                    })}
                </div>
            </div>   
        </>
    )
}

export default UserVotedDeals
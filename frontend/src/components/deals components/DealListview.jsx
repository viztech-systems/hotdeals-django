import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import StarRating from './StarRating';

const DealListview = (props) => {

  const {id, dealName, dealImage, dealPrice, dealInfo, dealLink, degree}= props;

  return(
   <>
      <div className="card mb-3 list-card">
        <div className="row h-100">
          <div className="col-4 h-100 p-0 d-flex justify-content-center align-items-center">
            <div style={{maxHeight:"100%", maxWidth:"50%"}}>
              <NavLink to="/dealdetails" className='d-flex justify-content-center'>
                <img src={dealImage} className="card-img" alt="dealpictures" style={{height:"100%", width:"70%"}}/>
              </NavLink>
            </div>
          </div>
          <div className="col-8 p-0 list-card-body card-body d-flex justify-content-between flex-column justify-content-evenly">
              <div style={{padding:"10px 10px 0 0"}}>
                <div className="col-12 mb-2">
                    <div className="col-sm-3 col-5 d-flex border border-2 rounded-2">
                        <div className="degree-icons col-3 d-flex justify-content-center align-items-center" style={{color: "red"}}>-</div>
                        <div className="degree-icons col-6 d-flex justify-content-center align-items-center" style={{fontSize:"16px", color:"#FF5F1F "}}>{degree}°</div>
                        <div className="degree-icons col-3 d-flex justify-content-center align-items-center" style={{color: "green", cursor:"pointer", fontWeight:"bold"}}>+</div>
                    </div>
                </div>          
                <NavLink to="/dealdetails"><h5 className="list-card-title card-title m-1 text-uppercase text-body">{dealName}</h5></NavLink>
                <NavLink to="/dealdetails"><p className="list-card-text card-text text-body m-1">{dealInfo}</p></NavLink>
              </div>
              <div className="w-100 row justify-content-end align-items-center mb-2">
              <div className='col-6'>
                <div className='col-12 d-flex justify-content-start align-items-center'>
                <span className="list-rating-size"><StarRating rating={props.dealRating} edit={false}/></span>
                </div>
              </div>
                <div className="col-6 d-flex justify-content-end p-0">
                  <div className='col-12 col-sm-8'>
                  <NavLink to={`/dealdetails/${id}`}>
                    <button className="w-100 btn btn-outline-success border-1 border-success rounded-3 text-success" style={{backgroundColor:"#CFF6CF"}}><span className='list-deal-button'>{dealPrice}</span></button>
                  </NavLink>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
  </>
  );
};

export default DealListview;
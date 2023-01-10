import React from 'react';
import { NavLink } from 'react-router-dom';
import StarRating from './StarRating';


const DealGridview = (props) => {
  
  const {id, dealName, dealImage, dealPrice, dealInfo, dealLink, degree}= props;

  return (
    <>
      <div className="col">                
          <div className="card h-100 w-100">
              <div className="d-flex align-items-center justify-content-center" style={{height:"60%"}}>
                  <img src={dealImage} style={{height:"60%", width:"50%"}} className="card-img-top" alt="Palm Springs Road"/>
              </div>
              <div className="card-body p-3 py-2" style={{boxSizing:"border-box"}}>
                <div className="col-12 mb-2">
                    <div className="col-6 d-flex border border-1 rounded-2">
                        <div className="degree-icons col-3 d-flex justify-content-center align-items-center" style={{color: "red"}}>-</div>
                        <div className="degree-icons col-6 d-flex justify-content-center align-items-center" style={{fontSize:"14px", color:"orangered"}}>{degree}°</div>
                        <div className="degree-icons col-3 d-flex justify-content-center align-items-center" style={{color: "greenyellow"}}>+</div>
                    </div>
                </div>
                <h5 className="grid-card-title card-title text-body fw-bold">{dealName}</h5>
                <p className="grid-card-text card-text mb-2">{dealInfo}</p>
                <StarRating rating={props.dealRating}/>
            </div>
            <div className="card-footer col-12 d-flex justify-content-end p-2">
              <div className="col-12">
                <NavLink to={`/dealdetails/${id}`}>
                  <button className="w-100 btn btn-outline-success border-1 border-success rounded-3 text-success fs-6" style={{backgroundColor:"#CFF6CF"}}><span style={{fontWeight:"bold"}}>{dealPrice}</span></button>
                </NavLink>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default DealGridview;

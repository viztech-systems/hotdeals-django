import React, { useState } from 'react';
import { FaThList } from "react-icons/fa";
import {BsGridFill} from 'react-icons/bs';

const DealsSearchBar = ({filterItem, catItems, viewEvent}) => {

  const [view , setView] = useState("list");

  const productView = (x) => {
    setView(x);
    viewEvent(x);
  }

    return (
        <>
            <div className="bg-dark d-flex justify-content-center">
              <div className="container-lg p-0 m-2 row d-flex justify-content-center ">  
                <div className="w-100 col-12 d-flex flex-wrap justify-content-between p-0">
                  <div className="col-6 col-xl-2 col-lg-2 col-md-2 d-flex justify-content-start justify-content-xl-between justify-content-lg-between justify-content-md-between order-2 order-md-2 order-sm-2">
                    <div className="col-5 col-xl-6 col-lg-6 col-md-4 col-sm-6 d-flex justify-content-start justify-content-lg-start justify-content-md-start justify-content-sm-center align-items-center hot-btn"><button className='btn btn-outline-primary text-capitalize text-primary rounded-3 border-1 d-flex justify-content-center align-items-center' style={{backgroundColor:"#E4FBFF"}}>Hot</button></div>
                    <div className="col-5 col-xl-6 col-lg-6 col-md-4 col-sm-6 d-flex justify-content-start justify-content-lg-start justify-content-md-start justify-content-sm-center align-items-center new-btn"><button className='btn btn-outline-primary text-capitalize text-primary rounded-3 border-1 d-flex justify-content-center align-items-center' style={{backgroundColor:"#E4FBFF"}}>New</button></div>
                  </div>
                  <div className="dropdown col-xl-1 col-lg-2 col-md-3 col-sm-2 col-3 order-2 order-md-2 order-sm-2 d-flex justify-content-center justify-content-lg-end justify-content-md-end category-btn">
                    <button className="btn btn-outline-primary text-primary rounded-3 border-1 d-flex justify-content-center align-items-center" style={{backgroundColor:"#E4FBFF"}}  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="text-capitalize" style={{fontSize:"12px"}}>Category</span>
                    </button>
                    <ul className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton1">
                    {
                      catItems.map((curElem, index) => {
                        return  <li key={index}><button className="dropdown-item" onClick={() => {filterItem(curElem)}}>{curElem}</button></li>     
                      })
                    }
                    </ul>
                  </div>
                  <div className="col-12 col-xl-7 col-lg-6 col-md-5 mb-2 mb-sm-2 mb-md-0 d-flex justify-content-start justify-content-xl-start justify-content-lg-center justify-content-md-center align-items-center order-1 order-md-2 order-sm-1 search-bar">
                    <form className="d-flex col-12 col-xl-11 col-lg-11 col-md-11">
                      <div className="input-group rounded">
                        <input type="search" className="form-control border-primary rounded-start" placeholder="Search" aria-label="Search" aria-describedby="search-addon"/>
                        <span className="input-group-text border-0 bg-primary" id="search-addon">
                          <i className="fas fa-search" style={{cursor:"pointer", color:"white"}}></i>
                        </span>
                    </div>
                    </form>
                  </div>
                <div className="view-btn col-6 col-xl-1 col-lg-2 col-md-2 d-flex justify-content-center align-items-center order-2 order-md-2 order-sm-2 mt-sm-0 p-0">
                  <div className='col-12 d-flex justify-content-end'>
                  <div className="dropdown">
                    <button
                      className="btn btn-outline-primary text-primary rounded-3 border-1 dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                      style={{backgroundColor:"#E4FBFF"}}
                    >
                      <span className="text-capitalize" style={{fontSize:"14px"}}>{view === "list" ? <FaThList/> : <BsGridFill/>}</span>
                    </button>
                    <ul className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton">
                      <li><button className="dropdown-item m-0 p-2 d-flex justify-content-evenly" style={{cursor:"pointer"}} onClick={() => productView("list")}><FaThList fontSize="18px" color='grey' className='col-4'/><span className='col-6'>List view</span></button></li>
                      <li><button className="dropdown-item m-0 p-2 d-flex justify-content-evenly" style={{cursor:"pointer"}} onClick={() => productView("grid")}><BsGridFill fontSize="18px" color='grey' className='col-4'/><span className='col-6'>Grid view</span></button></li>
                    </ul>
                  </div>
                  </div>
                  {/* <div className="col-2 d-flex justify-content-center"><FaThList fontSize="22px" color='white' onClick={() => viewEvent("list")}/></div>
                  <div className="col-2 d-flex justify-content-center"><BsGridFill fontSize="22px" color='white' onClick={() => viewEvent("grid")}/></div> */}
                </div>
                </div>
              </div>
          </div> 
        </>
    )
}

export default DealsSearchBar

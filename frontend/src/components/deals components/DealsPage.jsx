import React, { useState, useEffect } from 'react'
import DealsSearchBar from './DealsSearchBar';
import Deals from './Deals';
import DealsData from './DealsData';
// import { degreeReducer } from '../reducers/degreeReducer';

const categories = ["all", ...new Set(DealsData.map((curElem) => curElem.category ))];


const DealsPage = () => {

    const [deals, setDeals] =useState([]);

    const [catItems, setCatItems] = useState(categories);

    const [view, setView] = useState("list");

    const filterItem = (itemCategory) =>{

      if(itemCategory === "all"){
        setDeals(DealsData);
        return;
      }

      const updatedCategory = DealsData.filter((curElem) => {
        return curElem.category === itemCategory;
      });
      setDeals(updatedCategory);
    }

    const viewEvent = (view) => {
      setView(view);
      return;
    }

    const loadAPI = async () => {
      const res = await fetch('http://127.0.0.1:8000/api/', {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    });

    const data = await res.json();
    setDeals(data);


    } 

    useEffect(() => {
      loadAPI();
    }, [])
    

    return (
        <>
            <DealsSearchBar filterItem = {filterItem} catItems={catItems} viewEvent={viewEvent}/>
            <Deals deals={deals} view={view} />
        </>
    )
  }

export default DealsPage
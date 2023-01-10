import DealListview from "./DealListview";
import DealGridview from "./DealGridview";
import { FaVideoSlash } from "react-icons/fa";

const Deals = ({deals, view}) =>{

    if(view === "list"){
        return(
            <>
                <div className="container-lg p-4">
                    <div className="row d-flex justify-content-center"> 
                        {deals.map((val, index) => {
                            return (
                                    <DealListview key={index} id={val._id} dealName={val.name} dealImage={val.image} dealPrice={val.price} dealInfo={val.info} degree={val.degree} dealLink ={val.link} dealRating={val.totalRating} />
                                )
                        })}
                    </div>
                </div>   
            </>
        )
    }else if(view === "grid"){
        return(
            <>            
                <div className="container-lg p-4 px-4">
                    <div className="row row-cols-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4"> 
                        {deals.map((val, index) => {
                            return (
                                    <DealGridview key={index} id={val._id} dealName={val.name} dealImage={val.image} dealPrice={val.price} dealInfo={val.info} degree={val.degree} dealLink ={val.link} dealRating={val.totalRating} />
                                )
                        })}
                    </div>
                </div>                        
            </>
        );
    }
}

export default Deals;
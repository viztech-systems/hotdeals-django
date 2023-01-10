import { useState } from 'react';
import StarRating from './StarRating';
import Navbar from '../Navbar';
import Footer from "../Footer";
import DealsData from "./DealsData";
import ReviewData from './UserReviewData';
import { NavLink, useParams } from 'react-router-dom';

const DealDetails = () =>{

    let link = "https://www.amazon.in/Fire-Boltt-Display-Smartwatch-Tracking-Resistance/dp/B09PRGXJJF/ref=sr_1_1_sspa?crid=2EGCC99O9UFGR&keywords=Fire-Boltt+Ninja+2+Max+1.5%2C+Full+Touch+Display+Smartwatch+with+SpO2&qid=1644770004&sprefix=fire-boltt+ninja+2+max+1.5%2C+full+touch+display+smartwatch+with+spo2%2Caps%2C165&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExV1ZCM0pQMEMxMzdSJmVuY3J5cHRlZElkPUEwMTU3NDU0MjVBTEhSR0VUVzA0WSZlbmNyeXB0ZWRBZElkPUEwODg1NDI1MlNJUUdOS01COFpKWSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=";

    const {id} = useParams();
    const productID = Number(id);

    const dateObject = new Date();
    const date = dateObject.toLocaleDateString('en-GB');

    const [review, setReview] = useState({
        cust_name:"",
        cust_rating: 4,
        date: date,
        cust_review:""
    })

    const [deal, setDeal] = useState(DealsData);
    const [allReviews, setAllReviews] =useState(ReviewData);
    const [updatedReviews, setUpdatedReviews] = useState(allReviews);

    const updatedProduct = deal.filter((currElem)=> {
        return currElem.id === productID;
    });

    const rating = (value) => {
       setReview({[rating]:value});
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setReview({...review, [name]:value});
    }

    const handleReview = () => {
        setUpdatedReviews([...allReviews, review])
    } 

    return(
        <>
        <Navbar/>
        {updatedProduct.map((val, index)=> {
            return(
                    <div className='container-lg p-0 mb-2' key={{index}}>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-12 col-md-5 col-sm-12 d-flex justify-content-center align-items-center">
                                    <img src={val.image} className="img-fluid rounded-5" alt="..." style={{maxHeight:"70%", maxWidth:"70%"}}/>
                                </div>
                                <div className="col-12 col-md-7 col-sm-12">
                                    <div className="card-body d-flex flex-column pt-4 px-4 pb-0">
                                        <h5 className="card-title text-body fw-bold">{val.name}</h5>
                                        <p className="card-text text-body dealDetails-card-text my-1">{val.info}</p>
                                        <div className="pb-2"><span className="dealDetails-rating-size"><StarRating rating={val.totalRating} edit={false}/></span></div>
                                        <div className="container-fluid mb-3">
                                            <div className='col-12'>
                                                <NavLink to="/dealdetails">
                                                        <button className="col-12 btn btn-success deal-button"><span className='dealDetails-deal-button'>{val.price}</span></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>       
                        <div className="bg-white rounded shadow-sm p-4">
                            <h5 className="mb-4 fw-bold">Customer Reviews</h5>
                            <div className='container-fluid'>
                                {updatedReviews.map((val, index) => {
                                    return (
                                        <div className='mb-1 p-1' key={index}>
                                            <h4 className='cust-name'>{val.cust_name}</h4>
                                            <h6 className='cust-review-date'>{val.date}</h6>
                                            <StarRating className="mb-2" rating={val.cust_rating} edit={false}/>
                                            {/* <h5>{val.cust_rating}</h5> */}
                                            <p className='cust-review'>{val.cust_review}</p>
                                        </div>
                                    )
                                })}                   
                            </div>
                        </div>
                        
                    </div>
                )
        })}
        <div className="container-lg bg-white rounded shadow-sm p-4 mb-3 rating-review-select-page">
            <h5 className="mb-4">Give product rating</h5>
            <form className='m-2' onSubmit={handleReview}>
                <div className="form-group mb-2">
                    <StarRating className="mb-2" edit={true}/>
                </div>
                <div className="form-group mb-2">
                    <label>Your Comment</label>
                    <textarea className="form-control" style={{height:"100px", boxShadow:"none"}} name="cust_review" value={review.cust_review} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-md" type="submit"> Submit</button>
                </div>
            </form>
        </div>
    <Footer/>
    </>
);
}

export default DealDetails;
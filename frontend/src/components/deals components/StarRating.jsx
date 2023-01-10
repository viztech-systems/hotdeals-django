import { FaStar } from 'react-icons/fa';
import React from 'react'
import ReactStars from 'react-rating-stars-component';


const StarRating = (props) => {
    // const [rating, setRating] = useState(5);
    // const [hover, setHover] = useState(null);
    // return (
    //     <div>
    //         {[...Array(5)].map((star, i) => {
    //             const ratingValue = i+1;
                 
    //             return(
    //                 <label key={i}>
    //                     <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
    //                     <FaStar 
    //                         className="star" 
    //                         color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
    //                         size={props.size}
    //                         onMouseEnter={() => setHover(ratingValue)}
    //                         onMouseLeave={() => setHover(null)} />
    //                 </label>
    //             );
    //         })}
    //     </div>
    // )
    const changedRating = (ratingValue) => {
        console.log(typeof(ratingValue))
        // props.rating(ratingValue);
    }

    return(
        <div>
            <ReactStars
                color="lightgrey"
                activeColor="#FFBF00"
                size={35}
                value={props.rating}
                edit={props.edit}
                count={5}
                isHalf={true}
                onChange={changedRating}
            />
        </div>
    )
}

export default StarRating;

import { res_card_img } from "../utilities/constants";
const RestaurentCard = (props) => {
    const {resDeatils} = props;
    const {name, cuisines, avgRating, costForTwoString, cloudinaryImageId, deliveryTime} = resDeatils?.data;
    return (
        <div className='restaurent-card'>
            <img className="restaurent-card-logo" alt="Hotel Img"src={res_card_img+resDeatils.data.cloudinaryImageId}></img>
            <div className='restaurent-card-desc'>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>Ratings {avgRating}⭐</h4>
                <h4>{costForTwoString}</h4>
                <h4>Delivery Time - {deliveryTime} min</h4>
            </div>
        </div>
    );
}

export default RestaurentCard;
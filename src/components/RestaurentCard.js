import { res_card_img } from "../utilities/constants";
const RestaurentCard = (props) => {
    const {resDeatils} = props;
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, deliveryTime} = resDeatils?.info;
    return (
        <div className='restaurent-card'>
            <img className="restaurent-card-logo" alt="Hotel Img"src={res_card_img+resDeatils.info.cloudinaryImageId}></img>
            <div className='restaurent-card-desc'>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>Ratings {avgRating}⭐</h4>
                <h4>{costForTwo}</h4>
            </div>
        </div>
    );
}

export default RestaurentCard;
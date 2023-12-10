import RestaurentCard from "./RestaurentCard";
import Search from "./Search";
import resList from "../utilities/mockData";
import { useState } from "react";
const Body = () => {
    const [restaurentList,setRestaurentList] = useState(resList);
    return (
        <div className='body'>
        <Search/>
        <button className="filter-btn" onClick={()=>{
            const filteredList = restaurentList.filter((res)=>res.data.avgRating>4);
            setRestaurentList(filteredList);
        }}>Top Rating Restaurents</button>
        <div className='multi-rest'>
        {
            restaurentList.map((restaurant) => <RestaurentCard key={restaurant.data.id} resDeatils={restaurant}/>)
        }
        </div>
        </div>
        
    );
}

export default Body;
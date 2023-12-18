import RestaurentCard from "./RestaurentCard";
import Search from "./Search";
import resList from "../utilities/mockData";
import { useState, useEffect } from "react";
const Body = () => {
    const [restaurentList,setRestaurentList] = useState([]);
    const [filteredRestaurent,setFilteredRestaurent] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
    
        const json = await data.json();
    
        // Optional Chaining
        setRestaurentList(
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurent(
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      };

    return (
        <div className='body'>
            <div className="body-top-bar">
               <div className='search'>
                  <input type="text" className="search-box" placeholder="Search for Restaurants and Foods" value={searchText} onChange={(e)=>{
                   setSearchText(e.target.value)
                    }}>
                  </input>
                  <button className="search-btn" onClick={()=>{
                   const searchedRestaurent = restaurentList.filter((res)=>
                   res.info.name.toLowerCase().includes(searchText.toLowerCase())
                   );
                        // console.log(searchText);
                   setFilteredRestaurent(searchedRestaurent);
                   }
                   }>Search</button>
                </div>
            <button className="filter-btn" onClick={()=>{
            const filteredList = restaurentList.filter((res)=>res.info.avgRating>4);
            setFilteredRestaurent(filteredList);
            }}>Top Rating Restaurents</button>
            </div>
            <div className='multi-rest'>
            {
              filteredRestaurent.map((restaurant) => <RestaurentCard key={restaurant.info.id} resDeatils={restaurant}/>)
            }
            </div>
        </div>
        
    );
}

export default Body;
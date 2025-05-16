import { Button } from "@mui/material";
import React, { useState } from "react";
import errorImage from '../../assets/404.png'

const searchData = [
  {
    id: 1,
    title: "BMW",
    image:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Mercedes",
    image:
      "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Ferrari",
    image:
      "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Audi",
    image:
      "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const filteredSearch = searchData.filter((obj)=>obj.title.toLowerCase().includes(search)).slice(0,8)
  return (
    <div>
      <div className="input">
        <input
          type="text"
          placeholder="Search Here"
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-200 placeholder-gray-400 rounded-lg w-96 p-2 outline-none text-black
        lg:w-96 md:w-96"
        />
      </div>
      <div className="dropdown flex justify-center">
       {search && 
        <div className="block absolute flex-col gap-1">
          <div className="bg-blue-200 w-80 text-center mt-2 mb-1 p-1 rounded-b-2xl">
            {filteredSearch.length >0 ?
            <>
             {filteredSearch.map((item,index)=>{
                return(
                    <div key={index} className=" flex justify-center items-center gap-3 ">
                        <img className="w-25 p-5 " src={item.image} alt="" />
                        <p className="text-xl font-semibold">{item.title}</p>
                        
                    </div>
                )
            })}
            </>:
            <>
            <div className="flex justify-center items-center">
                <img className="w-15 p-2" src={errorImage} alt="" />
            </div>
            </>}
           
            
            </div>
        </div>}
      </div>
    </div>
  );
};

export default SearchBar;

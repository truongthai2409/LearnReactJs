import React, { useState } from "react";
import axios from "axios";

const HackerNew = () => {
  const [hit, setHit] = useState([]);
  const fectchData = async () => {
    try {
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
      console.log(response);
      setHit(response.data?.hits || []);
    } catch (error) { 
      console.log(error);
    }
  };
  console.log("HiT: ", hit)
  React.useEffect(() => {
    fectchData();
  }, []);
  return <div>
    {hit.length > 0 && hit.map((item, index) => <h3 key={item.title}> {item.title}</h3>)}
  </div>;
};

export default HackerNew;

import { useEffect, useState } from "react";
import axios from "axios";

// Bai tap ve Fetching data 

const getPhoto = async () => {
  try {
    try {
      const response = await axios
        .get("https://picsum.photos/v2/list?page=2&limit=8");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  } finally { }
};

const Photos = () => {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    getPhoto().then((response) => {
      console.log(response);
      setPhoto(response);// sau doan nay sex rerender lai code nen se console.log 2 lan 
      // va useState su dung la useState([]) ne khong rerender lai code
    });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {photo.length > 0 && photo.map((item, index) => (
        <div key={item.id} className="p-3 bg-white shadow-md rounded-lg h-[300px]">
          <img src={item.download_url} alt={item.author} className="w-full h-full object-cover rounded-lg"/>
        </div>
      ))}
    </div>
  );
};

export default Photos;

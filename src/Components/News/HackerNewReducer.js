import React, { useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";
// import lodash from "lodash";

const initialState = {
  hit: [],
  query: [],
  loading: true,
  URl: "https://hn.algolia.com/api/v1/search?query=''",
};

const hackerReducer = (state, action) => {
  return state;
};

const HackerNewReducer = () => {
  const [hit, setHit] = useState([]);
  const [query, setQuery] = useState(["react"]);
  const [loading, setLoading] = useState(true);
  const [URL, setURL] = useState(
    "https://hn.algolia.com/api/v1/search?query=''"
  );
  const fetchData = useRef({});

  const [state, dispatch] = useReducer(hackerReducer, initialState);

    fetchData.current = async () => {
      try {
        // setLoading(true);
        //lam loading trang web
        const response = await axios.get(
        //   `https://hn.algolia.com/api/v1/search?query=${query}`
          // phu thuoc state nen dung useRef
        );
        // setHit(response.data?.hits || []);
        // setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    console.log("HiT: ", hit);
      useEffect(() => {
        fetchData.current();
      }, []);
    const handleUpdateEvent = lodash.debounce((e) => {
      setQuery(e.target.value);
    }, 500);

  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4 transition-all focus:border-blue-600">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-green-600 text-black block w-full p-5"
          placeholder="Search ..."
          defaultValuet={state.query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          //   onChange={handleUpdateEvent}
        />
        <button
        //   onClick={() =>
        //     setURL(`https://hn.algolia.com/api/v1/search?query=${query}`)
        //   }
          className="bg-[#3333] text-white font-semibold p-5 rounded-md"
        >
          Submit
        </button>
      </div>
      {state.loading && (
        <div
          className="loading w-8 h-8 rounded-full border-green-600 border-4 
        border-r-4 border-r-transparent animate-spin mx-auto my-10"
        ></div>
      )}
      <div className="flex flex-wrap gap-5">
        {state.hit.length > 0 &&
          state.hit.map((item, index) => (
            <div>
              <h3
                className="p-3 bg-gray-100 rounded-md text-blue-500"
                key={item.title}
              >
                {" "}
                {item.title}
              </h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HackerNewReducer;

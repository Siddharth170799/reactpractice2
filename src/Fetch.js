import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
const Fetch = () => {

const [filteredData,setFilteredData]= useState([])
  const [input, setInput] = useState("");
  const [data1, setData1] = useState([]);
  const [button,setButton]= useState(true)
  const [filteredlow,setFilteredlow]=useState([])




  const dataFetching = async () => {
    try {
      const api = await axios.get("http://localhost:5000/api/get");
      setData1(api.data);
     
      console.log("Data fetched:", api.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


// const dataFetching=async()=>{
//     const api = await axios.get("http://localhost:5000/api/get")
//     setData1(api.data)
//     console.log("hello")
//     console.log(api.data)
    
    
// }

  const PriceLowToHigh =async () => {
    const newData = data1.sort((a, b) => a.Price - b.Price);
    console.log(newData);
    
    setData1(newData)
  await  setFilteredData([])
    setFilteredData(newData)
    console.log(filteredlow)
   
  
  };
  const PriceHighToLow = async() => {
    const newData = data1.sort((a, b) => b.Price - a.Price);
    console.log(newData);
    setData1(newData)
   await setFilteredData([])
    setFilteredData(newData)

   
  };

  const filteredDatas = () => {
    const data2 = data1?.filter((item) =>
      item.Title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(data2);
  };

  const clearFilters=async()=>{
    setButton(!button)
    setFilteredData([])
  }

  useEffect(() => {
    filteredDatas();
  }, [input]);
  useEffect(()=>{
dataFetching();
  },[button])
//   useEffect(()=>{
// clearFilters();
//   },[button])

  return (
    <div>
     

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Search"
          style={{ border: "2px solid black" }}
          onChange={(e) => setInput(e.target.value)}
        />
        <div >
          {" "}
          <button onClick={PriceLowToHigh}>Price Low To High</button>
          <button onClick={PriceHighToLow}>Price High To Low</button>
          <button onClick={clearFilters} style={{backgroundColor:"red"}}>Clear</button>
        </div>
        <div>
         
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredData?.length > 0 ? (
          <>
            {filteredData?.map((item, index) => (
              <div
                key={index}
                className="max-w-sm rounded overflow-hidden shadow-lg m-4"
              >
                <div style={{ textAlign: "center" }}>
                  <img
                    className="w-full"
                    src={item?.Img}
                    alt={item?.Title}
                    style={{
                      height: "250px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item?.Title}</div>
                  <div style={{ textAlign: "center" }}>
                    <b>
                      <h2>{item?.Price}</h2>
                    </b>
                  </div>
                  <p className="text-gray-700 text-base">{item?.Description}</p>
                </div>
              </div>
            ))}
          </>
        ) : (
          data1?.map((item, index) => (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg m-4"
            >
              <div style={{ textAlign: "center" }}>
                <img
                  className="w-full"
                  src={item?.Img}
                  alt={item?.Title}
                  style={{ height: "250px", width: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item?.Title}</div>
                <div style={{ textAlign: "center" }}>
                  <b>
                    <h2>{item?.Price}</h2>
                  </b>
                </div>
                <p className="text-gray-700 text-base">{item?.Description}</p>
              </div>
            </div>
          ))
        )}
        {}
      </div>
    </div>


  )
}

export default Fetch

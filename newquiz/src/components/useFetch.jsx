import { useState, useEffect } from "react";
 
export default function useFetch(url, dataLocation) {
 const [data, setData] = useState([]);
 
 useEffect(() => {
   async function fetchData() {
     const response = await fetch(url);
     const newData = await response.json();
     if (response.status === 200) {
       setData(newData[dataLocation]);
     } else {
       console.error("Opps, something went wrong!");
     }
   }
 
   fetchData();
 }, []);
 
 return data;
}

import { useState, useEffect } from "react";
import axios from "axios";

export default function useCatagory() {
  const [catagories, setCatagories] = useState([]);

  //get cat
  const getCatagories = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/catagory/get-catagory`
      );
      setCatagories(data?.catagory);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCatagories();
  }, []);

  return catagories;
}

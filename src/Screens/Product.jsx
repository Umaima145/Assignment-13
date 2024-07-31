import React from "react";
import { useParams } from "react-router-dom";
import { productData } from '../ProductData';


const Product = () => {
  const { id } = useParams();
  console.log(id);

  const filterData = productData.filter((e, i) => {
    return e.id == id;
  });

  console.log(filterData);

 

  return (
    <div>
      <h1 style={{
        fontFamily:"cursive",
        textAlign:"center",
        marginTop:"30px",
          marginBottom:"30px",
          fontSize:"50px"

      }}>Product Page</h1>

      {filterData.map((e, i) => {
        return (
          <div>
            <img width={"300px"} style={{marginBottom:"30px",marginLeft:"30px"}} src={e.image} alt="" />
            <h1 style={{
                marginLeft:"30px"
            }}>{e.title}</h1>
            <br></br>
            <h1 style={{
                fontSize:"20px",
                fontWeight:"lighter",
                fontFamily:"monospace",
                marginLeft:"30px"
            }}>{e.description}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
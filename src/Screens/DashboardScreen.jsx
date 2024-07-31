import React from 'react';
import "../App.css";
import ProCard from './ProCard';
import { productData } from '../ProductData';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login';
  };
 

     

  return (
      <>  
       <div >
      <h1 style={{color:"white",
        fontSize:"40px",
        textAlign:"center",
        marginTop:"30px",
         marginBottom:"30px"
      }}>Welcome to the Dashboard</h1>
      <button onClick={handleLogout} className="button">Logout</button></div>
     
      {productData.map((e, i) => (
          <div style={{
            display:"inline-block",
           marginLeft:"40px",
           marginBottom:"20px"
          }} >
            <ProCard key={i} id={e.id} title={e.title} image={e.image} desc={e.description} />
          </div>
        ))}

  
   
      
      
    </>

  );
};

export default Dashboard;
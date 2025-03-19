import React from "react";

const DestinationCard = ({ name, location, image, description, price }) => {
  return (
    <div style={{
      width: "250px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "10px",
      textAlign: "center",
      boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
    }}>
      <img src={image} alt={name} style={{ width: "100%", borderRadius: "10px" }} />
      <h3>{name}</h3>
      <p><strong>{location}</strong></p>
      <p>{description}</p>
      <p><strong>{price}</strong></p>
    </div>
  );
};

export default DestinationCard;
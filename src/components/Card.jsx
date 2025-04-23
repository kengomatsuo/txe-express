import React from 'react'

const Card = ({children}) => {
  return (
    <div style={{
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      borderRadius: "10px",
      padding: "2rem 1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyItems: "center",
      justifyContent: "space-around",
      boxSizing: "border-box",
      minWidth: "min(200px)",
      maxWidth: "400px",
      margin: "1rem auto",
      textAlign: "center",
    }}>
      {children}
    </div>
  )
}

export default Card

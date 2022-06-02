import React from 'react'

const Header = () => {
  return (
    <header style={{display : "flex"}}>
      <div style={{width: "100%", border : "2px solid blue", textAlign : "center"}}> 
        <h2>Header publico</h2>
      </div>
      <div style={{position : "absolute", right : "1%", top : "8px"}}>
        <div style={{display : "flex", gap : "1rem"}}> 
        <button style={{ width: "5rem" }}>Ingresar</button>
        <button style={{ width: "5rem" }}>Registrarse</button>

        </div>
      </div>
    </header>
  )
}

export default Header
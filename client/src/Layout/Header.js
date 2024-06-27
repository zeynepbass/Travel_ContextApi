import React from "react";

const Header = () => {
  return (

      <div className="sidebar" id="sidebar">
        <div className="logo " style={{paddingLeft:"100px"}}>
          <p>Menü</p>
        </div>

        <ul className="navigation">
          <li>
            <i className="fa-solid fa-house"></i> Ana Sayfa
          </li>
   
        </ul>
      </div>
      

  );
};

export default Header;

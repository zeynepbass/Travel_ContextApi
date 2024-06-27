import React from 'react'
import {useNavigate} from "react-router-dom"
const TopTable = () => {
  const navigate=useNavigate("/")
  const LogOut=()=>{
    localStorage.removeItem("yonetici");
    navigate("/")
  }
  return (
    <>
          <header className="headerTop">
        <div className="intro">
          <h1>Hoşgeldin</h1>
        </div>

        <div className="profile">
          <img
            src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
            alt="profile"
          />
          <p>Saurabh</p>
          <p style={{cursor:"pointer"}} onClick={()=> LogOut()}>Logout</p>
        
          <p style={{ display: "none" }}>
            <i
              id="dark-mode"
              className="fa-solid fa-moon"
              style={{ color: "darkgray" }}
              title="Switch To Night Mode"
            ></i>
          </p>
        </div>
      </header>

      <div className="stats">
        <div className="stat box">
          <p>
            <i className="fa-solid fa-dollar-sign"></i> Total Sales
          </p>

          <h1>
            <i className="fa-solid fa-indian-rupee-sign"></i> 20,50000
          </h1>

          <p>
            <i
              className="fa-solid fa-arrow-trend-up"
              style={{ color: "green" }}
            ></i>{" "}
            20% More Than Last Month
          </p>
        </div>

        <div className="stat box">
          <p>
            <i className="fa-solid fa-dollar-sign"></i> Total Revenue
          </p>

          <h1>
            <i className="fa-solid fa-indian-rupee-sign"></i> 10,5000
          </h1>

          <p>
            <i
              className="fa-solid fa-arrow-trend-up"
              style={{ color: "green" }}
            ></i>{" "}
            10% More Than Last Month
          </p>
        </div>

        <div className="stat box">
          <p>
            <i className="fa-solid fa-dollar-sign"></i> New Customers Joined
          </p>

          <h1>
            <i className="fa-solid fa-indian-rupee-sign"></i> 3,010
          </h1>

          <p>
            <i
              className="fa-solid fa-arrow-trend-down"
              style={{ color: "red" }}
            ></i>{" "}
            50% Less Than Last Month
          </p>
        </div>

        <div className="stat box">
          <p>
            <i className="fa-solid fa-dollar-sign"></i> Old Client Funds
          </p>

          <h1>
            <i className="fa-solid fa-indian-rupee-sign"></i> 30,00000
          </h1>

          <p>
            <i
              className="fa-solid fa-arrow-trend-up"
              style={{ color: "green" }}
            ></i>{" "}
            10% More Than Last Month
          </p>
        </div>
      </div>
    </>
  )
}

export default TopTable
import React,{useContext,useEffect} from "react";
import {ContextPost} from "../Context/PostContext"
import { Link } from "react-router-dom";
import TopTable from "./TopTable"

const Home = () => {
  const {data,Delete,Response}=useContext(ContextPost)
  useEffect(()=>{

    Response();
 })
  return (
    <div className="main-area" id="main-area">
    <TopTable/>

      <div className="products box">
        <h1>Top Panel</h1>
        <p>
          <Link to="/ekle">
          <img
            src="images/add-file.png"
            alt=""
            width="30"
            height="30"
            style={{ float: "right", cursor: "pointer" }}
          />
          </Link>
        </p>

        <table className="table">
          <thead>
            <tr>
              <th>AD</th>
              <th>YER</th>
              <th>AÇIKLAMA</th>
              <th>PANSİYON</th>
              <th>RANDEVU</th>
              <th>ÜCRET</th>
              <th>RESİM</th>
              <th>İŞLEM</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item,index)=>{
              return(
                <>
               <tr key={index}>
              <td>{item.baslik}</td>
              <td>{item.yer}</td>
              <td>{item.acikla}</td>
              <td>{item.pansiyon}</td>
              <td>{item.randevu}</td>
              <td>{item.price}</td>
              <td></td>
              <td><img src={item.selectedFile} alt="" width="50" height="50"/></td>
              <td>

                <p>
  
                <Link to={`/panel/${item._id}`}>
                  <img
                    src="images/update.png"
                    alt=""
                    width="30"
                    height="30"
                    style={{ float: "right", cursor: "pointer" }}
        
                  />
                  </Link>
   
                  <img
                    src="images/bin.png"
                    alt=""
                    width="30"
                    height="30"
                    style={{ float: "right", cursor: "pointer" }}
                    onClick={()=>Delete(item._id)}
                  />
                </p>
              </td>
            </tr>
                </>
              )
            })}
        
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

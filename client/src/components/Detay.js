import React, { useContext, useEffect } from "react";
import { ContextPost } from "../Context/PostContext";
import { useParams } from "react-router-dom";
import TopTable from "../Layout/TopTable";
import "./form.css";
const Detay = () => {
  const { id } = useParams();
  const { detay, FetchDetay } = useContext(ContextPost);
  useEffect(() => {
    FetchDetay(id);
  }, [id, FetchDetay]);
  return (
    <div className="main-area" id="main-area">
      <TopTable />
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">BAŞLIK:</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={detay.baslik || []}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">YER:</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={detay.yer || []}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">AÇIKLAMA:</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={detay.acikla || []}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">PANSİYON:</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={detay.pansiyon || []}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">RANDEVU:</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={detay.randevu || []}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">ÜCRET:</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={detay.price || []}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">RESİM:</label>
          <img src={detay.selectedFile || []} alt="" width="100" height="100" />
        </div>
      </form>
    </div>
  );
};

export default Detay;

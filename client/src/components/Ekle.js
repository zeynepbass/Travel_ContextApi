import React, { useContext } from "react";
import { ContextPost } from "../Context/PostContext";
import FileBase from 'react-file-base64';
import TopTable from "../Layout/TopTable";
import "./form.css";
const Detay = () => {
  const { ekle,post,handleChange,setPost } = useContext(ContextPost);

  return (
    <div className="main-area" id="main-area">
      <TopTable />
      <h1>Veri Ekle</h1>
      <br />
      <form onSubmit={ekle}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">BAŞLIK:</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="baslik"
            onChange={handleChange}
            value={post.baslik}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">YER:</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="yer"
            onChange={handleChange}
            value={post.yer}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">AÇIKLAMA:</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="acikla"
            onChange={handleChange}
            value={post.acikla}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">PANSİYON:</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="pansiyon"
            onChange={handleChange}
            value={post.pansiyon}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">RANDEVU:</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="randevu"
            onChange={handleChange}
            value={post.randevu}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">ÜCRET:</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="price"
            onChange={handleChange}
            value={post.price}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">RESİM:</label>
          <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setPost({ ...post, selectedFile: base64 })
                  }
                />
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-primary btnSubmit">
            EKLE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Detay;

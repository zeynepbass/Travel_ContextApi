import React from 'react'
import Header from "../Layout/Header"
import "./panel.css"
const Panel = (props) => {
  const data = JSON.parse(localStorage.getItem("yonetici")) ;
  return (
  
<div style={{ display: 'flex' }}>
{data?.role ? (
      <>
  <Header />
  {props.content && props.content}
  </>
  ) : (
    <>
      <h1 className="pt-4" style={{ textAlign: "center" }}>
        İzinsiz Giriş
      </h1>
    </>
  )
  }

</div>

  
  )
}

export default Panel
import React, { useContext,useEffect } from "react";
import Navbar from "./Navbar";
import { ContextPost } from "../Context/PostContext";
const Home = () => {
  const { data,Response } = useContext(ContextPost);
  useEffect(()=>{

    Response();
 })
 const deluxeItems = data.filter(item => item.baslik.toLowerCase().includes("deluxe"));

  return (
    <>
      <Navbar />
      <section className="about">
        <i className="fa-solid fa-globe icon"></i>
        <p>
          <span className="highlight">Lorem</span> ipsum, dolor sit amet
          consectetur adipisicing elit. Harum sed laborum ipsam accusamus.
          Aliquid nesciunt, unde soluta totam ipsam deserunt, maiores dicta
          incidunt expedita vel nisi blanditiis ratione eum exercitationem.
        </p>
      </section>

   <section className="rooms ">
      <h1 className="section-title">Sizin için en iyi oda ve süitleri</h1>
      <p>
        Eşsiz manzaralar, özel hizmetler ve sıcak misafirperverlikle dolu bu
        odalar ve süitler, Yunanistan tatilinizin mükemmel bir parçası olacak.
      </p>
      <div >
        {data && data.map((item, index) => (
          <div className="room" data-aos="fade-up" data-aos-duration="1000" key={index}  >
            <div className="room-img">
              <img
                className="room-image"
                src={item.selectedFile}
                alt="greece-room"
              />
            </div>
            <div className="room-details">
              <h2>{item.baslik}</h2>
              <h3>{item.price}</h3>
              <p>{item.acikla}</p>
              <button className="btn">Detay</button>
            </div>
          </div>
        ))}
      </div>
    </section>

      <section className="subscribe">
        <div className="sub-text">
          <div className="logo2">
            <p className="logo-text">Doğada</p>
            <p className="logo-text">EŞSİZ BİR GÜN</p>
          </div>
          <p className="sub-desc">
            Sakin ve huzurlu bir kaçamak arıyorsanız, bungalovlarımız tam size
            göre. Doğanın kalbinde, kuş sesleri eşliğinde uyanmanın keyfini
            çıkarın ve stres dolu şehir hayatından uzaklaşın.
          </p>
        </div>

        <div className="sub-area">
          <h2>Haberlere kayıt ol</h2>
          <div className="sub-form">
            <input type="text" className="sub-inp" placeholder="Email girin" />
            <button className="btn">Abone Ol</button>
          </div>
        </div>
      </section>

      <section className="food">
        <div
          className="food-detail"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="section-header">
            En iyi konfor ve rahatlık tek bir yerde
          </h1>
          <p>
            Bungalovlarımızda konfor ve lezzetin mükemmel uyumunu keşfedin.
            Doğanın kucağında, her biri özenle tasarlanmış bungalovlarımızda,
            modern olanaklar ve rahatlık sizi bekliyor. Yumuşacık yataklar,
            ferah yaşam alanları ve huzur dolu ortamımızla, şehir hayatının
            stresinden uzaklaşıp yenilenin. Gurme mutfağımızda, taptaze ve yerel
            malzemelerle hazırlanan kahvaltılarla güne başlayın. Mis gibi
            kokular eşliğinde servis edilen lezzetli öğünlerimiz, hem gözünüze
            hem de damağınıza hitap edecek. Akşamları, doğanın sunduğu
            güzelliklerin tadını çıkarırken, özenle hazırlanmış yemeklerimizle
            keyifli anlar yaşayın. Bungalovlarımızda konforlu bir konaklama ve
            lezzet dolu bir gastronomi deneyimi sizleri bekliyor. Gelin, bu
            eşsiz deneyimi bizimle paylaşın ve unutulmaz anılar biriktirin.
          </p>
        </div>
      </section>

      <section className="premium">
        <h1 className="section-title">Sunduğumuz Odalar</h1>
        <p>
          Bungalovlarımızda, doğanın huzurunu ve modern konforu bir arada
          sunuyoruz.
        </p>
        <div>
      {deluxeItems.map((item, index) => (
        <div className="rooms-area" key={index}>
          <div className="room-img">
            <img
              className="room-image"
              src={item.selectedFile}
              alt="vertical-img"
            />
          </div>
          <div className="room-boxes">
            <div
              className="room-box"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="section-title">{item.baslik}</h1>
              <h2>{item.price}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus iure dolor ipsa quam aspernatur illum! Adipisci veniam
                molestias veritatis dicta eveniet, expedita laudantium ipsum
                saepe reiciendis quod, autem modi mollitia.
              </p>
              <button className="btn">Explore More Options</button>
            </div>

            {/* Diğer örnekler için aynı yapıyı kopyalayabilirsiniz */}
            <div
              className="room-box"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="section-title">Premium Lake Side Room</h1>
              <h2>$300</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus iure dolor ipsa quam aspernatur illum! Adipisci veniam
                molestias veritatis dicta eveniet, expedita laudantium ipsum
                saepe reiciendis quod, autem modi mollitia.
              </p>
              <button className="btn">Explore More Options</button>
            </div>

            <div
              className="room-box"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="section-title">Premium Lake Side Room</h1>
              <h2>$300</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus iure dolor ipsa quam aspernatur illum! Adipisci veniam
                molestias veritatis dicta eveniet, expedita laudantium ipsum
                saepe reiciendis quod, autem modi mollitia.
              </p>
              <button className="btn">Explore More Options</button>
            </div>
          </div>
        </div>
      ))}
    </div>
           
      </section>
    </>
  );
};

export default Home;

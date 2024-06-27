import React from 'react';

const Navbar = () => {
    return (
        <>
        <section className="banner">



        <header className="header">

            <div className="logo">
                <p className="logo-text">THORABH</p>
                <p className="logo-text">TRAVELS</p>
            </div>

            <nav className="nav">
                <ul className="nav-links">
                    <li className="nav-link">Home</li>
                    <li className="nav-link">Rooms</li>
                    <li className="nav-link">Premium</li>
                    <li className="nav-link">Gallery</li>
                    <li className="nav-link">About</li>
                </ul>
            </nav>

        </header>



        <div className="banner-details">

            <div className="badge">
            Bizden sizin için en iyi seyahat yerleri
            </div>

            <h1 className="banner-heading" data-aos="fade-up" data-aos-duration="1000">
                Explore The Beauty of Greece
            </h1>

            <button className="btn">
                Şimdi Keşfet
            </button>

            <div className="booking">

                <div className="inp">
                    <label for="checkin">Check In Date</label>
                    <input type="date" id="checkin"/>
                </div>

                <div className="inp">
                    <label for="checkout">Check Out Date</label>
                    <input type="date" id="checkout"/>
                </div>

                <div className="inp">
                    <label for="adults">No of Adults</label>
                    <input type="number" placeholder="0" id="adults"/>
                </div>

                <div className="inp">
                    <label for="child">No of Children</label>
                    <input type="number" placeholder="0" id="child"/>
                </div>

                <div className="inp">
                    <button className="btn book-btn">
                        Şimdi Rezervasyon Yap
                    </button>
                </div>
                

            </div>

        </div>


    </section>
</>
    );
};

export default Navbar;

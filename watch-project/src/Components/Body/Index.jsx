import React from 'react'
import './Index.css'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>

      <div className="main-ind">
        <div className="main-sub-ind">

          <div className="log-phone-ind">
            <span><i className="fa fa-phone" aria-hidden="true"></i></span> <span>0055561517</span>
          </div>

          <div className="text-sub-ind">
            <p>Free Shipping, Ship in 24 hours</p>
            <p>10% off for our new users, use code-TimelessStyle10</p>
            <p>NO COST EMI AVAILABLE ON ORDER ABOVE RS.10,000</p>
          </div>

          <div className="log-cart-ind">
            <span><i className="fa fa-shopping-cart" aria-hidden="true"></i></span> <span>CART O | <Link to={'/Adminlogin'} id='Linkkkkss'><span> LOGIN</span></Link>  OR REGISTER</span>
          </div>

        </div>

      </div>

      <div className="center-ind">
        <img src="../../../public/BACK.avif" alt="" />
      </div>

      <div className="container-fluid">
        <nav className="navbar-id-color navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse nav-main-ind" id="navbarNav">

              <div>
                <a className="nav-link active" aria-current="page" href="#" id="change-section"><span>HOME</span></a>
              </div>
              <div>
                <a className="nav-link active" href="#"><span>BRANDS</span></a>
              </div>
              <div>
                <a className="nav-link active" href="#"><span>MEN</span></a>
              </div>
              <div>
                <a className="nav-link active" href="#"><span>WOMEN</span></a>
              </div>
              <div>
                <a className="nav-link active" href="#"><span>JEWELRY</span></a>
              </div>


              <div>
              <div><a className="nav-link active" href="#"><span>LUXURY</span></a></div>
              </div>



              <div><a className="nav-link active" href="#"><span>OFFERS</span></a></div>

              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search " />
              </form>


              <div> <a className="nav-link active" href="#"><span><i className="fa fa-search" aria-hidden="true"></i></span></a>
              </div>


            </div>
          </div>
        </nav>
      </div>


      <div className="HOME-IND">
        <span>HOME @ Collections &   Guess Collections </span>
      </div>

      <div className="banner">
    

        <div className="mainbtn">
          <div className="buttons-full-data">
            <a href="" >Shop now</a>
           
          </div>
        </div>

      </div>
      <div className="main-ind-brown">
       <div className="data-brown-ind">
       <p id='holi'>Holiday Gift Guide</p>
            <p id='EMI'>Discover the perfect gifts for the holiday season with our holiday gift guide</p>
            <a href="#">Explore Now !</a>
       </div>

      </div>





    </div>
  )
}

export default Index

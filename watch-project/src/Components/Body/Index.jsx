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
            <span><i className="fa fa-shopping-cart" aria-hidden="true"></i></span> <span>CART O <Link to={'/Adminlogin'} id='Linkkkkss'><span>LOGIN</span></Link>  OR REGISTER</span>
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


      {/* <!-- caro-section  --> */}
      <div id="carouselExampleControls" className="carousel slide caro-width" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active text-only">
            <h4>Brad Johns</h4>
            <h5>Default model text</h5>
            <p>Variouseditors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will
              uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model
              text, and a search for lorem ipsum will uncover many web sites still in their infancy. editors now use
              Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still
              in their infancy.</p>
          </div>
          <div className="carousel-item text-only">
            <h4>Morijorch</h4>
            <h5>Default model text</h5>
            <p>editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many
              web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a
              search for lorem ipsum will uncover many web sites still in their infancy. Variouseditors now use Lorem
              Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in
              their infancy. Various</p>
          </div>
          <div className="carousel-item text-only">
            <h4>Rochak</h4>
            <h5>Default model text</h5>
            <p>Variouseditors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will
              uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model
              text, and a search for lorem ipsum will uncover many web sites still in their infancy. editors now use
              Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still
              in their infancy.</p>
          </div>
        </div>
        <div className="prevoise-button-main">
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <i className="fa fa-chevron-left pre-log" aria-hidden="true"></i>
            <span className="visually-hidden ">Previous</span>
          </button>
        </div>
        <div className="next-button-main">
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <i className="fa fa-chevron-right pre-log2" aria-hidden="true"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      





    </div>
  )
}

export default Index

import React, { useEffect, useState } from 'react'
import './Index.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Index = () => {

  const [id, setId] = useState("")
  const naviagate = useNavigate()
  // const navigateItself=useNavigate()
  const [msg, setMsg] = useState("")
  const value = JSON.parse(localStorage.getItem('customer_token'));

  const getName = async () => {
    const res = await axios.get("http://localhost:3003/wholewatch/CustHome", {
      headers: { Authorization: `Bearer ${value}` },
    })
    console.log(res.data);
    setMsg(res.data.msg)
    setId(res.data.id)
  }
  useEffect(() => {
    getName()
  }, [])
  console.log(id);


  const Logout = () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    if (isConfirmed) {
      localStorage.clear();
      naviagate("/")

    }
  };

  const [getProducts, setProducts] = useState([])

  
  const getAllProducts = async () => {
    const res = await axios.get("http://localhost:3003/wholewatch/getAllProducts")
    // console.log(res.data);
    setProducts(res.data)
    console.log(getProducts);
  }
  useEffect(() => {
    getAllProducts()
  }, [])


  // const gotoCartOrWishList=(e)=>{
  //   e.preventDefault()
  //   if(msg.length===0){
  //     alert ("Please Login")
  //     navigateItself("/CustomerLogin")
  //   }
  // }






  return (
    <div>

      <div className="main-ind">
        <div className="main-sub-ind">

          <div className="log-phone-ind">
            <span><i className="fa fa-phone" aria-hidden="true" ></i></span><Link to={`/whishList/${id}`}  id='Linkkkkss'><span id='ind-num'>WISH</span></Link>
          </div>

          <div className="text-sub-ind">
            <p></p>
          </div>

          <div className="log-cart-ind">
            <span><Link to={`CartCustomer/${id}`} id='Linkkkkss' > CART</Link> </span> <span><Link to={'/CustomerReg'} id='Linkkkkss'><span id='log-ind-l'>LOGIN</span></Link>  OR REGISTER</span>
          </div>

        </div>

      </div>
      <div className="nav-top">
        <div className="nav-topl">
          <span id='spanss'>Brand</span>
          <span id='spanss'>App</span><p></p>
          <span id='spanss'>Community</span><p></p>
          <span id='spanss'>Support</span><p></p>
          <span id='spanss'>realme VIP</span><p></p>
          <span id='spanss'>5G</span>
        </div>
        <div className="nav-topr">
          <Link to='/Adminlogin' className="log"><span id='spanss' >Login</span></Link><p></p>
          <span id='spanss'>My Order</span><p></p>
          <span id='cart'>Cart</span>
        </div>
      </div>
    



      <div className="center-ind">
        <img src="../../../public/BACK.avif" alt="" />
      </div>
      <div className="container-fluid">
        <nav className="navbar-id-color navbar-expand-lg navbar-light navbarr">
          <div className="">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse nav-main-ind" id="navbarNav">
              <img src="/realmelogo.png" alt="" />
              <div>
                <a className="nav-link active" aria-current="page" href="#" id="change-section"><span id='spanss'>Home</span></a>
              </div>
              <div>
                <a className="nav-link active" href="#"><span id='spanss'>New Launch</span></a>
              </div>
              <div>
                <a className="nav-link active" href="#"><span id='spanss'>Phone</span></a>
              </div>
              <div>
                <a className="nav-link active" href="#"><span id='spanss'>Audio</span></a>
              </div>
              <div>
                <a className="nav-link active" href="#"><span id='spanss'>Tablet & Wearable</span></a>
              </div>


              <div>
                <div><a className="nav-link active" href="#"><span id='spanss'>Accessories</span></a></div>
              </div>


            </div>
          </div>
        </nav>
      </div>


      <div className="HOME-IND">
        <span>HOME @ Collections &   Guess Collections </span>
        <div className='home-ind-2'>
          {msg ? (
            <>
              <Link className="nav-link mx-2 text-uppercase active" to='/CustomerLogin' id="sign-ind"><i className="fa fa-user" aria-hidden="true"></i>   {msg}  <button className='logout-ind' onClick={Logout}>Logout</button></Link>

            </>
          ) : (
            <Link className="nav-link mx-2 text-uppercase active" to='/CustomerLogin' id="sign-ind">Sign in</Link>
          )}
        </div>
      </div>


      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="carosel-img">
              <img src="/carousel.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carosel-text">
              <h1>realme narzo N53</h1>
              <h4>Sales Champion of the Year</h4>
              <span><i class="fa fa-inr" aria-hidden="true"></i>1,000 Off</span>
              <p><i class="fa fa-inr" aria-hidden="true"></i>7,999* | 4GB+64GB</p>
              <button className='btn1'>Buy Now</button>
              <button className='btn2'>Learn More</button>
            </div>


          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="carosel1-img">
              <img src="/carousel1.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carosel1-text">
              <h1>realme narzo 60x 5G</h1>
              <h4>realme Best Budget 5G Phone</h4>
              <span><i class="fa fa-inr" aria-hidden="true"></i>1,000 Off</span>
              <p><i class="fa fa-inr" aria-hidden="true"></i>11,999* | 4GB+128GB</p>
              <button className='btn11'>Buy Now</button>
              <button className='btn21'>Learn More</button>
            </div>
          </div>


          <div className="carousel-item">
            <div className="carosel1-img">
              <img src="/carousel2.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carosel1-text">
              <h1>realme narzo N55</h1>
              <h4>33W SUPERVOOC Charge</h4>
              <span>*upto<i class="fa fa-inr" aria-hidden="true"></i>3,000 Off</span>
              <p><i class="fa fa-inr" aria-hidden="true"></i>9,999* | 6GB+128GB</p>
              <button className='btn11'>Buy Now</button>
              <button className='btn21'>Learn More</button>
            </div>

          </div>
          <div className="carousel-item">
            <div className="carosel-img">
              <img src="/carousel3.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carosel-text">
              <h1>realme C53</h1>
              <h4>108MP Camera Under 10K</h4>
              <span>*<i class="fa fa-inr" aria-hidden="true"></i>2,500 Off</span>
              <p><i class="fa fa-inr" aria-hidden="true"></i>8,999* | 6GB+64GB</p>
              <button className='btn1'>Buy Now</button>
              <button className='btn2'>Learn More</button>
            </div>

          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="new-launch">
        <h2>New Launch</h2>
        <div className="new-launch-img">
          <img src="/newlaunch.jpg" alt="" />
        </div>
      </div>


      <div className='whole-data-and-img-sect'>
        <div className="ind-6images-full-section"><span>CATEGORIES</span></div>
        <div className="ind-6images-full-section-2"><span>C series</span></div>

        <div className="ind-classic">
          {
            getProducts.filter((data) => data.category_name === 'C series')
              .map((data, index) => (
                <Link key={index} to={`/productDetailsCustomer/${data._id}`} className='Link-view-products-ind'>
                  <div className="ind-1st-image">
                    <img src={data.banner} alt="" />
                  </div>
                  <div className="prices-ind">
                    <div><p className='price-ind'>₹ {data.price}</p></div>
                    <div><strike><p className='og-price'>₹ 79988</p></strike></div>
                  </div>

                </Link>
              ))
          }

        </div>



        <div className="ind-6images-full-section-2"><span>Narzo Series</span></div>

        <div className="ind-classic">
          {
            getProducts.filter((data) => data.category_name === 'Narzo Series')
              .map((data, index) => (
                <Link key={index} to={`/productDetailsCustomer/${data._id}`} className='Link-view-products-ind'>
                  <div className="ind-1st-image">
                    <img src={data.banner} alt="" />
                  </div>
                  <div className="prices-ind">
                    <div><p className='price-ind'>₹ {data.price}</p></div>
                    <div><strike><p className='og-price'>₹ 99988</p></strike></div>
                  </div>

                </Link>
              ))
          }

        </div>


        <div className="ind-6images-full-section-2"><span>Number Series</span></div>

        <div className="ind-classic">
          {
            getProducts.filter((data) => data.category_name === 'Number Series')
              .map((data, index) => (
                <Link key={index} to={`/productDetailsCustomer/${data._id}`} className='Link-view-products-ind'>
                  <div className="ind-1st-image">
                    <img src={data.banner} alt="" />
                  </div>
                  <div className="prices-ind">
                    <div><p className='price-ind'>₹ {data.price}</p></div>
                    <div><strike><p className='og-price'>₹ 89988</p></strike></div>
                  </div>

                </Link>
              ))
          }

        </div>


      </div>
      <div className="feedback-img">
        <img src="/feedback.jpg" alt="" />
      </div>
      <div className="why-img">
        <img src="/whyshp.png" alt="" />
      </div>
      <div className="store-img">
        <img src="/store.jpg" alt="" />
      </div>
      <div className="stores-img">
        <img src="/stores.png" alt="" />
      </div>
      <div className="dare-img">
        <img src="/dare.png" alt="" />
      </div>

      <div className="about-service-images">
        <div className="about-img">
          <img src="/about.jpg" alt="" />
          <div className="about-text">
            <h1>About realme</h1>
            <p>realme is a technology brand that specializes in<br></br>providing technology products with a<br></br>comprehensive superior experience for the youth</p>
            <span>View More <i class="fa fa-angle-right" aria-hidden="true"></i></span>
          </div>
        </div>
        <div className="service-img">
          <img src="/ourservice.jpg" alt="" />
          <div className="service-text">
          <h1>Our Service</h1>
            <p>realme provides our users with genuine,convinient<br></br>professionals services,including consulting,upgrading,<br></br>fixing,change and more</p>
            <span>View More <i class="fa fa-angle-right" aria-hidden="true"></i></span>
          </div>
        </div>
      </div>


      <div className="footer-main">
        <div className="footer-icons-main">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </div>
        <div className="footer-flex-main-contents">
          <div className="footer-first">
            <h3>ABOUT US</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed doLorem ipsum dolor sit amet,</p>
          </div>
          <div className="footer-second">
            <h3>Newsletter</h3>
            <div><a href="">SUBSCRIBE</a></div>
          </div>
          <div className="footer-third">
            <h3>NEED HELP</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed doLorem ipsum dolor sit amet,</p>
          </div>
          <div className="footer-four">
            <h3>CONTACT US</h3>
            <div className="footer-four-for-margin">
              <div><i className="fa fa-map-marker" aria-hidden="true"></i><span><a href="">Gb road 123 london Uk</a></span>
              </div>
              <div><i className="fa fa-phone" aria-hidden="true"></i> <span><a href="">+01 12345678901</a></span></div>
              <div><i className="fa fa-envelope" aria-hidden="true"></i><span><a href="">demo@gmail.com</a></span></div>
            </div>
          </div>





        </div>

      </div>






    </div>
  )
}

export default Index

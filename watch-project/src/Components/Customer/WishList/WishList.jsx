import React from 'react'
import './WishList.scss'
import { Link } from 'react-router-dom'

const WishList = () => {
    return (
        <div>


            <div className="main-ind">

                <div className="main-sub-ind">

                    <div className="log-phone-ind">
                        <span><i className="fa fa-phone" aria-hidden="true" ></i></span><Link to={`/whishList`} id='Linkkkkss' ><span id='ind-num'>WishList</span></Link>
                    </div>


                    <div className="text-sub-ind">
                        <p></p>
                    </div>

                    <div className="log-cart-ind">
                        <span><Link to={`CartCustomer`} id='Linkkkkss' > CART</Link> </span> <span><Link to={'/CustomerReg'} id='Linkkkkss'><span id='log-ind-l'>LOGIN</span></Link>  OR REGISTER</span>
                    </div>


                </div>
            </div>
               

               <div className="Shopping-bag-main">
                <div className="shopping-bag-wish">
                    <span>SHOPPING BAG</span>
                </div>
                <div className="shopping-bag-wish-banner">
                    <div className="shopping-bag-wish-banner-images">
                        <img src="" alt="" />
                    </div>
                    <div className="shopping-bag-wish-banner-data">
                        <p>Item No: NR6248NM01</p>
                        <span></span>
                        <p>Dispatch By2nd Jan 2024</p>
                        <p>  <i className="fa fa-superpowers" aria-hidden="true"></i>  Add Gift Wrap</p>
                        <p> <i className="fa fa-superpowers" aria-hidden="true"></i> Add Gift Message</p>
                     <div className="main-wish">
                     <p> <i className="fa fa-heart-o" aria-hidden="true"></i> Come to Whish</p>
                     <button className='btn-whish'> <i className="fa fa-trash-o" aria-hidden="true"></i> Delete From Bag</button>
                     </div>
                        

                    </div>
                
                </div>
             

                  
               </div>



        </div>
    )
}

export default WishList

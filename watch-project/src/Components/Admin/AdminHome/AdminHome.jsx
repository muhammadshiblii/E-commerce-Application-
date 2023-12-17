import React, { useEffect, useState } from 'react'
import './Adminhome.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AdminHome = () => {

    const navigate=useNavigate()
    const [msg,setMsg]=useState("")
    const value=JSON.parse(localStorage.getItem('admin_token'));
    const getName=async()=>{
        const res=await axios.get("http://localhost:3003/wholewatch/home",{
            headers:{Authorization: `Bearer ${value}`},
        })
        setMsg(res.data.msg)
    }

    useEffect(()=>{
        getName() 
    },[])

    const Logout=(e)=>{
        e.preventDefault();
        const confirmed = window.confirm("Are you sure you want to logout?");
        if (confirmed) {
            localStorage.clear();
           navigate("/Adminlogin")
        }
    }















    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <div className="nav-gifts">GIFTOS</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-main" id="navbarNav">

                        <div>
                            <a className="nav-link active" aria-current="page" href="#" id="change-section"><span>HOME</span></a>
                        </div>
                        <div>
                            <a className="nav-link active" href="#"><span>SHOP</span></a>
                        </div>
                        <div>
                            <a className="nav-link active" href="#"><span>WHY US</span></a>
                        </div>
                        <div>
                            <a className="nav-link active" href="#"><span>BRANDS</span></a>
                        </div>
                        <div>
                            <a className="nav-link active" href="#"><span>CONTACT US</span></a>
                        </div>


                        <div>
                            <a className="nav-link active" href="#"><span><i className="fa fa-user" aria-hidden="true"></i></span></a>
                        </div>



                        <div><a className="nav-link active" href="#"><span>LOGIN</span></a></div>

                        <div><a className="nav-link active" href="#"><span><i className="fa fa-shopping-bag"
                            aria-hidden="true"></i></span></a></div>


                        <div> <a className="nav-link active" href="#"><span><i className="fa fa-search" aria-hidden="true"></i></span></a>
                        </div>


                    </div>
                </div>
            </nav>
         

            <div className="header-left">
        <Link to='/Adminlogin' className='back-btn'>Back</Link>
      </div>



            <div className="display-username">
             <span><i className="fa fa-user" aria-hidden="true"></i>{msg}<button onClick={Logout}><i className="fa fa-sign-out" aria-hidden="true"></i></button></span>
        </div>











        </div>
    )
}

export default AdminHome

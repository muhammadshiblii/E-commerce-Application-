import './Adminforgot.css'
import { Link } from 'react-router-dom'
const Adminfrgpwd = () => {

    return (
        <div>

            <div className="fulll">
                <div className="container-login" id="container">
                    <div className="form-container sign-up-container">
                        <form action="#" className='forms'>
                            <h1 className='headingg'>Forgot Password</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span className='spans' >or use your email for registration</span>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#" className='forms' >
                            <h1 className='headingg'>Change It !!!</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span className='spans'>or use your account</span>
                            <input type="email" placeholder="Email" name="email" />
                            <input type="password" placeholder="Newpassword"   name="password" />
                            <Link className='social' to={'#'}>Change it Now !!</Link>
                            <button className='signin'>Change</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <h1 className='headingg'>Hello, Friend!</h1>
                                <p className='para'>Shop With Us !!! t</p>
                                <Link to={"/Adminlogin"}><button className="ghost" id="signUp">BACK</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    )
}

export default Adminfrgpwd

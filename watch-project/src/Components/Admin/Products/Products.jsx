import React from 'react'
import './Product.scss'

const Products = () => {
  return (
    <div>



	<div className="main-product">
  <div className="wrapper" >
			<div className="inner">
				<form action="">
					<h3>Registration Form</h3>
					<div className="form-group">
						<div className="form-wrapper">
							<label htmlFor="">Product Name</label>
							<input type="text" className="form-control" />
						</div>
						<div className="form-wrapper">
							<label htmlFor="">Description</label>
							<input type="text" className="form-control" />
						</div>
					</div>
					<div className="form-wrapper">
						<label htmlFor="">Price</label>
						<input type="text" className="form-control" />
					</div>
          
					<div className="form-wrapper">
						<label htmlFor="">Number of Stoke</label>
						<input type="password" className="form-control" />
					</div>
					<div className="form-wrapper">
						<label htmlFor="">Add Photo</label>
						<input type="file" id='pphoto' className="form-control" />
					</div>
					<div className="checkbox">
						<label>
							<input type="checkbox" /> I caccept the Terms of Use & Privacy Policy.
							<span className="checkmark"></span>
						</label>
					</div>
					<button>Register Now</button>
				</form>
			</div>
		</div>
  </div>










    </div>
  )
}

export default Products

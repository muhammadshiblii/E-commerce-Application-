import React, { useEffect, useState } from 'react'
import './Product.scss'
import axios from 'axios'

const Products = () => {
	const [getCat, setCat] = useState([])
	const [val, setVal] = useState({
		productname: "",
		category_name: "",
		Description: "",
		price: "",
		stokes: "",
		images: ""

	})

	const GetData = (e) => {
		setVal((pre) => ({ ...pre, [e.target.name]: e.target.value }))
		console.log(val);
	}

	const getCategory = async () => {
		const res = await axios.get("http://localhost:3003/wholewatch/categorygetdata")
		setCat(res.data)
		console.log(res.data);
		console.log(getCat);
	}
	useEffect(() => {
		getCategory()
	}, [])


	const addProduct = async (e) => {
		try {
			e.preventDefault()
			let formData = new FormData();
			console.log(Object.entries(val));
			Object.entries(val).forEach(item => formData.append(item[0], item[1]));
			if (val.images && val.images.length > 0) {
				for (const image of val.images) {
					formData.append('images', image);
				}
			}
			const res = await axios.post("http://localhost:3003/wholewatch/addProduct", formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			if (res.status != 404) {
				alert("Product Added")
			}
		} catch (error) {
			alert("error", error)
		}
	}











	return (
		<div>



			<div className="main-product">
				<div className="wrapper" >
					<div className="inner">
						<form action="" className='data-products' onSubmit={addProduct} >
							<h3>Registration Form</h3>
							<div className="form-group">
								<div className="form-wrapper">
									<label htmlFor="">Product Name</label>
									<input type="text" className="form-control" name='productname' onChange={GetData} />
								</div>

								<div className="form-wrapper">
									<label htmlFor="">Description</label>
									<input type="text" className="form-control" name='Description' onChange={GetData} />
								</div>

							</div>

							<div className="form-wrappers-select">
								<label htmlFor="">Category : </label>
								<select name="category_name"  onChange={GetData} >
									{
										getCat.map((data, index) =>
											<option value={data.category_name} key={index}>{data.category_name}</option>
										)
									}

								</select>


							</div>


							<div className="form-wrapper">
								<label htmlFor="">Price</label>
								<input type="text" className="form-control" name='price' onChange={GetData} />
							</div>

							<div className="form-wrapper">
								<label htmlFor="">Stokes</label>
								<input type="text" className="form-control" name='stokes' onChange={GetData} />
							</div>
							<div className="form-wrapper">
								<label htmlFor="">Add Photo</label>
								<input type="file" id='pphoto' className="form-control" name='images' onChange={e => setVal(p => ({ ...p, [e.target.name]: e.target.files }))} multiple />
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

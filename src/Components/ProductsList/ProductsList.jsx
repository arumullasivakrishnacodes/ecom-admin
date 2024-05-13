import React, { useEffect, useState } from 'react'
import '../ProductsList/ProductsList.css'
import {Link} from 'react-router-dom'

const ProductsList = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchDataInfo = async () => {
    await fetch('https://ecom-api-tau.vercel.app/allproducts')
    .then((res)=>res.json())
    .then((data) => {setAllProducts(data)});
  }

  useEffect(()=> {
    fetchDataInfo();
  }, []);

  return (
    <div className='productlist-main-container'>
      <div className="filter-section">
        <p className='heading'>Filter</p>
        <div className="div-filter-section">
          <select name="Status" id="Status">
            <option value="Men">Status</option>
            <option value="women">Active</option>
            <option value="Kids">Inactive</option>
          </select>

          <select name="category" id="category">
            <option value="Men">Category</option>
            <option value="Men">Men</option>
            <option value="women">Women</option>
            <option value="Kids">Kids</option>
            <option value="Groceries">Groceries</option>
          </select>

          <select name="Stock" id="Stock">
            <option value="Men">Stock</option>
            <option value="women">InStock</option>
            <option value="Kids">OutOfStock</option>
          </select>
        </div>
        
      </div>
      <hr />
      <div className="product-search-section">
        <input type="search" placeholder='Search product' />
        <Link to='/products/addproducts'><button>+ Add Product</button></Link>
      </div>
      <hr />
      <div className="product-list-head-con row">
        <p className='col-6'>Product</p>
        <p className='col-1'>Category</p>
        <p className='col-1'>Stock</p>
        <p className='col-1'>SalePrice</p>
        <p className='col-1'>ListPrice</p>
        <p className='col-1'>Aval</p>
        <p className='col-1'>Status</p>
        <div className="col-1">Action</div>
      </div>
      <hr />

      {
        allProducts.map((product) => {
          return (
            <>
              <div className="product-detail-container row">
              <div className='col-5 product-name-details-container'>
                <div className="image "><img src={product.image} alt="prdImage" /></div>
                <div className="name-details">
                  <p>AllenSolley</p>
                  <p>{product.name}</p>
                </div>
              </div>
              <div className='col-1 product-item'>{product.category}</div>
              <div className='col-1 product-item'><i class={`bi bi-check-circle-fill ${product.available ? '' : 'd-none'}`}></i> <i class={`bi bi-x-circle-fill ${product.available ? 'd-none' : ''}`}></i></div>
              <div className='col-1 product-item'>₹ {product.sale_price}</div>
              <div className='col-1 product-item'>₹ {product.list_price}</div>
              <div className='col-1 product-item'>{product.availability}</div>
              <div className={`col-1 product-item ${product.available ? 'active-class' : 'inactive-class'}`}>{product.available ? 'Active' : 'In-Active'}</div>
              <div className="col-1 action-btn"><i class="bi bi-trash-fill"></i> <i class="bi bi-pencil-square"></i></div>
              </div>
              <hr />
            </>
            
          )
        })
      }
    </div>
  )
}

export default ProductsList
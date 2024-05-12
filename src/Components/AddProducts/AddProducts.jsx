import React, { useState } from 'react'
import '../AddProducts/AddProducts.css'

const AddProducts = () => {
  const [productImage, setProductImage] = useState(false);
  const [errorrevealed, setErrorReavled] = useState(false)

  const handleImageUpload = (event) => {
    setProductImage(event.target.files[0]);
  }

  const handleAddProduct = () => {
    let prdname = document.getElementById('prdname').value;
    let prdimg = document.getElementById('prdimg').value;
    alert(prdimg)
  }

  return (
    <div className='addproducts-main-container'>
      <div className="heading">ADD PRODUCT</div>

      <div className={`error-message-container ${errorrevealed ? '' : 'd-none'}`}>
        <i class="bi bi-exclamation-triangle-fill"></i>
        <p>Please fill all * marked fields</p>
      </div>

      <div className="grid-template-items">
        <div className="product-detail-item">
          <label htmlFor="productname">Name <span className='required'>*</span></label>
          <input type="text" id='prdname' placeholder='Product name...' />
        </div>

        <div className="product-detail-item">
          <label htmlFor="productname">Description <span className='required'>*</span></label>
          <input type="text" id='prddesc' placeholder='Product Description...'/>
        </div>

        <div className="product-detail-item">
          <label htmlFor="productname">Price <span className='required'>*</span></label>
          <input type="number" id='prdprice' placeholder='Product Price ...'/>
        </div>

        <div className="product-detail-item">
          <label htmlFor="productname">Availability <span className='required'>*</span></label>
          <input type="number" id='prdaval' placeholder='Available Items Count ...'/>
        </div>

        <div className="product-detail-item">
          <label htmlFor="productname">Category <span className='required'>*</span></label>
          <select name="category" id="category">
            <option value="Men">Men</option>
            <option value="women">Women</option>
            <option value="Kids">Kids</option>
            <option value="Groceries">Groceries</option>
          </select>
        </div>

        <div className="product-detail-item">
          <label htmlFor="productname">Filters <span>( Give Values by pipe separated)</span></label>
          <input type="text" id='prdfilter' placeholder='filter1 | filter2 | ...' />
        </div>

        <div className="product-detail-item">
          <label htmlFor="productname">Sort <span>( Give Values by pipe separated)</span></label>
          <input type="text" id='prdsort' placeholder='sort | sort | ...' />
        </div>

        <div className="product-detail-item">
          <label htmlFor="productname">Tags <span>( Give Values by pipe separated)</span></label>
          <input type="text" id='prdtags' placeholder='tags | tags | ...'/>
        </div>

        <div className="product-detail-item">
          <label htmlFor="productname">Image <span className='required'>*</span></label>
          <div className={`upload-area ${productImage ? 'd-none' : ''}`}><i class="bi bi-cloud-arrow-up"></i></div>
          <img src={productImage ? URL.createObjectURL(productImage) : ''} alt="" className={`${productImage ? '' : 'd-none'}`} />
          <input type="file" className='uploadedimage' id='prdimg' onChange={handleImageUpload}/>
        </div>

      </div>

      <button className='addproduct' onClick={handleAddProduct}>Add Product</button>
      
    </div>
  )
}

export default AddProducts
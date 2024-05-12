import React from 'react'
import '../AddProducts/AddProducts.css'

const AddProducts = () => {
  return (
    <div className='addproducts-main-container'>
      <div className="heading">ADD PRODUCT</div>

      <div className="grid-template-items">
        <div className="product-detail-item">
          <label htmlFor="productname">Name <span className='required'>*</span></label>
          <input type="text" placeholder='Product name...' />
        </div>

        <div className="product-detail-item">
          <label htmlFor="productname">Description <span className='required'>*</span></label>
          <input type="text" placeholder='Product Description...'/>
        </div>

        <div className="product-detail-item">
          <label htmlFor="productname">Price <span className='required'>*</span></label>
          <input type="number" placeholder='Product Price ...'/>
        </div>

        <div className="product-detail-item">
          <label htmlFor="productname">Availability <span className='required'>*</span></label>
          <input type="number" placeholder='Available Items Count ...'/>
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
          <input type="text" placeholder='filter1 | filter2 | ...' />
        </div>

        <div className="product-detail-item">
          <label htmlFor="productname">Sort <span>( Give Values by pipe separated)</span></label>
          <input type="text" placeholder='sort | sort | ...' />
        </div>

        <div className="product-detail-item">
          <label htmlFor="productname">Tags <span>( Give Values by pipe separated)</span></label>
          <input type="text" placeholder='tags | tags | ...'/>
        </div>

        <div className="product-detail-item">
          <label htmlFor="productname">Image <span className='required'>*</span></label>
          <div className="upload-area"><i class="bi bi-cloud-arrow-up"></i></div>
          <img src="" alt="" className='d-none' />
          <input type="file"/>
        </div>

      </div>
      
    </div>
  )
}

export default AddProducts
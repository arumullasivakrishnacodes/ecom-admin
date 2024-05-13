import React, { useState } from 'react'
import '../AddProducts/AddProducts.css'

const AddProducts = () => {
  const [productImage, setProductImage] = useState(false);
  const [errorrevealed, setErrorReavled] = useState(false)

  const handleImageUpload = (event) => {
    setProductImage(event.target.files[0]);
  }

  const handleAddProduct = async () => {
    let prdname = document.getElementById('prdname').value;
    let prdimg = document.getElementById('prdimg').value;
    let prddesc = document.getElementById('prddesc').value;
    let prdlistprice = document.getElementById('prdlistprice').value;
    let prdsaleprice = document.getElementById('prdsaleprice').value;
    let prdcategory = document.getElementById('category').value;
    let prdaval = document.getElementById('prdaval').value;
    let maskimg = prdimg.split('\product')[1]

    const productobj = {
      'name': prdname,
      'description': prddesc,
      'image': prdcategory === 'Groceries' ? 'https://ik.imagekit.io/ecommerceapi/groceries/product' + maskimg : 'https://ik.imagekit.io/ecommerceapi/Assets/product' + maskimg,
      'category': prdcategory,
      'sale_price': prdsaleprice,
      'list_price': prdlistprice,
      'availability': prdaval
    }

    if (prdname === '' || prdimg === '' || prddesc === '' || prdlistprice === '' || prdsaleprice === '' || prdcategory === '' || prdaval === '') {
      setErrorReavled(true)
      setTimeout(() => {
        setErrorReavled(false);
      }, 2000);
    } else {
      setErrorReavled(false)

      await fetch('https://ecom-api-tau.vercel.app/addproduct', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify(productobj),
        }).then((res) => res.json()).then((data) => {
          data.success ? alert('Product Added'): alert('Failed')
      });
    }
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
          <label htmlFor="productname">List Price <span className='required'>*</span></label>
          <input type="number" id='prdlistprice' placeholder='Product ListPrice ...'/>
        </div>

        <div className="product-detail-item">
          <label htmlFor="productname">Sale Price <span className='required'>*</span></label>
          <input type="number" id='prdsaleprice' placeholder='Product SalePrice ...'/>
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
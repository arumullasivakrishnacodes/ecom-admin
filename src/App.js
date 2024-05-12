import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import './Global.css'
import Dashboard from './Components/Dashboard/Dashboard';
import logo from '../src/img/logo.png'
import Products from './Components/Products/Products';
import Users from './Components/Users/Users';
import AddProducts from './Components/AddProducts/AddProducts';
import ProductsList from './Components/ProductsList/ProductsList';
import AddUser from './Components/AddUser/AddUser';
import UserList from './Components/UsersList/UserList';
import Overview from './Components/Overview/Overview';
import Analytics from './Components/Analytics/Analytics';
import profile from '../src/img/profile.png'

function App() {
  return (
    <BrowserRouter>
      <div className="App row">

      <div className='col-3 main-menu-container'>
        <div className='main-menu'>
          <div className='logo'>
            <img src={logo} alt='logo' />
            <span>admin</span>
          </div>

          <NavLink to='/' className={`menu-item-con-anchor`}>
            <div className='menu-item-con'>
              <div className='item-text'>
                <i class="bi bi-house"></i>
                <span>Dashboard</span>
              </div>
              <i class="bi bi-chevron-right"></i>
            </div>
            <div className='dropdown-container'>
              <ul>
                <NavLink to='/overview' className={`sub-menu-anchor`}><li>Overview</li></NavLink>
                <NavLink to='/analytics' className={`sub-menu-anchor`}><li>Analytics</li></NavLink>
              </ul>
            </div>
          </NavLink>

          <NavLink to='/products' className={`menu-item-con-anchor`}>
            <div className='menu-item-con'>
              <div className='item-text'>
                <i class="bi bi-collection"></i>
                <span>Products</span>
              </div>
              <i class="bi bi-chevron-right"></i>
            </div>

            <div className='dropdown-container'>
              <ul>
                <NavLink to='/products/addproducts' className={`sub-menu-anchor`}><li>Add Products</li></NavLink>
                <NavLink to='/products/productslist' className={`sub-menu-anchor`}><li>Products List</li></NavLink>
              </ul>
            </div>
          </NavLink>

          <NavLink to='/users' className={`menu-item-con-anchor`}>
            <div className='menu-item-con'>
              <div className='item-text'>
                <i class="bi bi-person"></i>
                <span>Users</span>
              </div>
              <i class="bi bi-chevron-right"></i>
            </div>

            <div className='dropdown-container'>
              <ul>
                <NavLink to='/users/adduser' className={`sub-menu-anchor`}><li>Add User</li></NavLink>
                <NavLink to='/users/userslist' className={`sub-menu-anchor`}><li>Users List</li></NavLink>
              </ul>
            </div>
          </NavLink>

        </div>
      </div>

      <div className='col-9'>
        <div className='main-search-container'>
          <i class="bi bi-search"></i>
          <input type='text' placeholder='Search here..'/>
          <img src={profile} alt='profile' />
        </div>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/overview' element={<Overview />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/addproducts' element={<AddProducts />} />
          <Route path='/products/productslist' element={<ProductsList />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/adduser' element={<AddUser />} />
          <Route path='/users/userslist' element={<UserList />} />
        </Routes>
      </div>

      </div>
    </BrowserRouter>
    
  );
}

export default App;

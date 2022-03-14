import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { StateContext } from '.././context/StateProvider'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  const [{ basket }] = useContext(StateContext)

  return (
    <nav className="header">
      <Link to="/">
        <img className="header-logo" 
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
        alt="Amazon Logo" 
        />
      </Link>

      <div className="header-search">
        <input type="text" className='header-search-input'/>
        <SearchIcon className='header-search-icon' />
      </div>

      <div className="header-nav">
        <Link to='/login' className='header-link'>
          <div className="header-option">
            <span className='header-option-line-one'>Hello Matias!</span>
            <span className='header-option-line-two'>Sign In</span>
          </div>
        </Link>

        <Link to='/' className='header-link'>
          <div className="header-option">
            <span className='header-option-line-one'>Returns</span>
            <span className='header-option-line-two'>& Products</span>
          </div>
        </Link>

        <Link to='/' className='header-link'>
          <div className="header-option">
            <span className='header-option-line-one'>Your</span>
            <span className='header-option-line-two'>Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className='header-link'>
          <div className="header-option-basket">
            <ShoppingBasketIcon />
            <span className='header-option-line-two header-basket-count'>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
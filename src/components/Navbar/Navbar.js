import { useState } from 'react';
import Cart from './Cart/Cart';
import { Link } from 'react-router-dom';
import { HOME_ROUTE, LOG_IN_ROUTE, SIGN_IN_ROUTE } from '../../utils/Constants';
import './Navbar.scss';

const Navbar = ({ products, resetCart }) => {
  const [showCartPanel, setShowCartPanel] = useState(false);

  const toggleCartPanel = () =>
    setShowCartPanel(!showCartPanel);

  return (
    <header className='navbar'>
      <nav>
        <ul className='navbar__list'>
          <li className='navbar__link'>
            <Link
              className='link'
              href='/'
              to={HOME_ROUTE}
            >
              Home
            </Link>
          </li>
          <li className='navbar__link'>
            <Link
              className='link'
              href='/'
              to={LOG_IN_ROUTE}
            >
              Log in
            </Link>
          </li>
          <li className='navbar__link'>
            <Link
              className='link'
              href='/'
              to={SIGN_IN_ROUTE}
            >
              Sign in
            </Link>
          </li>
          <li className='navbar__link navbar__link--last'>
            <a
              className='link'
              href='#'
              onClick={() => toggleCartPanel()}
            >
              <Cart
                resetCart={resetCart}
                products={products}
                showCartPanel={showCartPanel}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Navbar;
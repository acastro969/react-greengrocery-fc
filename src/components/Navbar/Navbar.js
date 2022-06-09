import { useState } from 'react';
import Cart from './Cart/Cart';
import './Navbar.scss';

const Navbar = ({ products, resetCart }) => {
  const [showCartPanel, setShowCartPanel] = useState(false);

  const toggleCartPanel = () =>
    setShowCartPanel(!showCartPanel);

  return (
    <header>
      <nav className='navbar'>
        <ul className='navbar__list'>
          <li className='navbar__link'>
            <a
              className='link'
              href='/'
            >
              Home
            </a>
          </li>
          <li className='navbar__link'>
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
import { useState } from 'react';
import Cart from './Cart/Cart';
import { HOME_ROUTE, LOG_IN_ROUTE, SIGN_IN_ROUTE } from '../../utils/Constants';
import * as S from './Navbar.styles';

const Navbar = ({ products, resetCart }) => {
  const [showCartPanel, setShowCartPanel] = useState(false);

  const toggleCartPanel = () =>
    setShowCartPanel(!showCartPanel);

  return (
    <S.Header>
      <nav>
        <S.NavbarList>
          <S.Item>
            <S.NavbarLink
              href='/'
              to={HOME_ROUTE}
            >
              Home
            </S.NavbarLink>
          </S.Item>
          <S.Item>
            <S.NavbarLink
              href='/'
              to={LOG_IN_ROUTE}
            >
              Log in
            </S.NavbarLink>
          </S.Item>
          <S.Item>
            <S.NavbarLink
              href='/'
              to={SIGN_IN_ROUTE}
            >
              Sign in
            </S.NavbarLink>
          </S.Item>
          <S.Item>
            <S.NavbarLink
              as="a"
              href='#'
              onClick={() => toggleCartPanel()}
            >
              <Cart
                resetCart={resetCart}
                products={products}
                showCartPanel={showCartPanel}
              />
            </S.NavbarLink>
          </S.Item>
        </S.NavbarList>
      </nav>
    </S.Header>
  )
};

export default Navbar;
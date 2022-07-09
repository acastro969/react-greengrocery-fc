import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Button from '../../Button/Button';
import ProductDetail from './ProductDetail/ProductDetail';
import * as S from './Cart.styles';

const Cart = ({ products, showCartPanel, resetCart }) => {
  const renderDetails = () => {
    return products.map((p) =>
      <ProductDetail product={p} key={p.id} />
    );
  }

  const calculateTotalProducts = () => {
    let quantity = products.reduce((q, p) => q + p.added, 0);
    return quantity > 9 ? '9+' : quantity;
  }

  const calculateTotalPrice = () => {
    return products.reduce((q, p) => q + p.price * p.added, 0)
      .toFixed(2);
  }

  return (
    <S.Cart>
      <FontAwesomeIcon
        icon={faCartShopping}
      />
      My Cart
      <S.Bubble>
        {calculateTotalProducts()}
      </S.Bubble>
      {showCartPanel === true && (
        <S.Panel>
          {products.length > 0 ? (
            <>
              <S.Products>
                {renderDetails()}
              </S.Products>
              <S.Summary>
                Total: <b>${calculateTotalPrice()}</b>
              </S.Summary>
              <S.ActionsWrapper>
                <Button
                  onClick={() => resetCart()}
                  secondary={true}
                >
                  Clear cart
                </Button>
              </S.ActionsWrapper>
            </>
          ) : (
            <>
              Your cart is empty.
            </>
          )}
        </S.Panel>
      )}
    </S.Cart>
  );
}

export default Cart;
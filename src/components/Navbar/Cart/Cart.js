import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Button from '../../Button/Button';
import ProductDetail from './ProductDetail/ProductDetail';
import './Cart.scss';

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
    <div className='cart'>
      <FontAwesomeIcon
        icon={faCartShopping}
      />
      My Cart
      <span className='bubble'>
          {calculateTotalProducts()}
        </span>
      {showCartPanel === true && (
        <div className='cart__panel'>
          {products.length > 0 ? (
            <>
              <div className='panel__product-list'>
                {renderDetails()}
              </div>
              <div className='panel__summary'>
                Total: <b>${calculateTotalPrice()}</b>
              </div>
              <div className='panel__actions'>
                <Button
                  onClick={() => resetCart()}
                  secondary={true}
                >
                  Clear cart
                </Button>
              </div>
            </>
          ) : (
            <>
              Your cart is empty.
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
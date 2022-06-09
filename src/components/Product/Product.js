import Button from '../Button/Button';
import './Product.scss';

const Product = ({ product, addToCart }) => (
  <div className='product'>
    <div className='product__image'>
      <img src={product.img} alt='' width='100' />
    </div>
    <div className='product__details'>
      <h2 className='product__title'>
        {product.title}
      </h2>
      <p className='product__price'>
        ${product.price} / kg&nbsp;
        {product.addedQuantity > 0 && `(${product.addedQuantity})`}
      </p>
      <div className='product__buttons'>
        <Button
          onClick={() => addToCart(product)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  </div>
);

export default Product;
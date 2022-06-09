import Product from '../Product/Product';
import './Catalog.scss';

const Catalog = ({ products, addToCart }) => {
  const renderProductList = () => {
    return products.map((p) =>
      <Product
        key={p.id}
        product={p}
        addToCart={addToCart}
      />
    )
  }

  return (
    <div className='catalog'>
      {renderProductList()}
    </div>
  );
}

export default Catalog;
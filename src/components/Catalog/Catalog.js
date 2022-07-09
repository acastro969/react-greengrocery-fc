import Product from '../Product/Product';
import * as S from './Catalog.styles.js';

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
    <S.Catalog>
      {renderProductList()}
    </S.Catalog>
  );
}

export default Catalog;
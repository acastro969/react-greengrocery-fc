import Button from '../Button/Button';
import * as S from './Product.styles';

const Product = ({ product, addToCart }) => (
  <S.Product>
    <S.ImageWrapper>
      <img src={product.img} alt='' width='100' />
    </S.ImageWrapper>
    <S.Details>
      <S.Title>
        {product.title}
      </S.Title>
      <S.Price>
        ${product.price} / kg&nbsp;
        {product.addedQuantity > 0 && `(${product.addedQuantity})`}
      </S.Price>
      <S.ActionsWrapper>
        <Button
          onClick={() => addToCart(product)}
        >
          Add to cart
        </Button>
      </S.ActionsWrapper>
    </S.Details>
  </S.Product>
);

export default Product;
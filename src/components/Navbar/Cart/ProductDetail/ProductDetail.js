import * as S from './ProductDetail.styles';

const ProductDetail = ({ product }) => (
  <S.ProductDetail key={product.id}>
    <img
      src={product.img}
      alt=''
      width='40'
    />
    <p>{product.title}</p>
    <p><b>{product.added}</b> kg/s</p>
  </S.ProductDetail>
);

export default ProductDetail;
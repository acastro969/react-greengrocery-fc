import './ProductDetail.scss';

const ProductDetail = ({ product }) => (
  <div
    className='product-detail'
    key={product.id}
  >
    <img
      src={product.img}
      alt=''
      width='40'
    />
    <p>{product.title}</p>
    <p><b>{product.added}</b> kg/s</p>
  </div>
);

export default ProductDetail;
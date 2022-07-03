import Catalog from '../../components/Catalog/Catalog';
import Title from '../../components/Title/Title';

const Home = ({ products, handleClickAddProduct }) => (
  <>
    <Title>
      React Greengrocery
    </Title>
    <Catalog
      products={products}
      addToCart={handleClickAddProduct}
    />
  </>
);

export default Home;
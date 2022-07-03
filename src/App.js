import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';
import LogIn from './pages/LogIn/LogIn';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { DEFAULT_PRODUCTS_LIST, LOG_IN_ROUTE, SIGN_IN_ROUTE } from './utils/Constants';
import SignIn from './pages/SignIn/SignIn';

function App() {
  const [cart, setCart] = useState([]);

  const handleClickAddProduct = (product) => {
    if (cart.filter(ap => ap.id === product.id)[0]) {
      setCart(cart.map(ap => ap.id === product.id ? {...ap, added: ap.added+1} : ap));
    } else {
      setCart(cart.concat({...product, added: 1}));
    }
  }

  const handleClickResetCart = () => {
    setCart([]);
  }

  const renderHomePage = () => <Home products={DEFAULT_PRODUCTS_LIST} handleClickAddProduct={handleClickAddProduct}/>;

  return (
      <Router>
        <Navbar
          products={cart}
          resetCart={handleClickResetCart}
        />
        <Layout>
          <Routes>
              <Route
                index
                element={renderHomePage()}
              />
              <Route
                index
                path={LOG_IN_ROUTE}
                element={<LogIn />}
              />
              <Route
                index
                path={SIGN_IN_ROUTE}
                element={<SignIn />}
              />
          </Routes>
        </Layout>
        <Footer />
      </Router>
  )
};

export default App;
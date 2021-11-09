
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import About from './pages/About';
import Cart from './pages/Cart';
import ContactUs from './pages/ContactUs';
import Customize from './pages/Customize';
import Home from './pages/Home';
import Product from './pages/Product';
import Shop from './pages/Shop';
// import Products from './components/Products/Products'
import Gallery from './pages/Gallery';
import CakeDetails from './pages/CakeDetails';
import CustomerInformation from './pages/CustomerInformation';
import Payment from './pages/Payment';
import Successful from './pages/Successful';
import ProductDetails from './components/ProductDetails/ProductDetails'



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/home' exact component = {Home} />
        <Route path = '/about' exact component = {About} />
        <Route path = '/shop' exact component = {Shop} />
        <Route path = '/shop/:id' exact component={ProductDetails} />
        <Route path = '/customize' exact component = {Customize} />        
        <Route path = '/gallery' exact component = {Gallery} />        
        <Route path = '/contactUs' exact component = {ContactUs} />
        <Route path = '/cart' exact component = {Cart} />
        <Route path = '/product' exact component = {Product} />
        <Route path = '/cakedetailsform' exact component = {CakeDetails} />
        <Route path = '/paymentform' exact component = {Payment} />
        <Route path = '/customerinformationform' exact component = {CustomerInformation} />
        <Route path = '/success' exact component = {Successful} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

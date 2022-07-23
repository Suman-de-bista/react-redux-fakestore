import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Header from './Components/Header';
import {Routes, Route} from 'react-router-dom';
import ProductListing from './Components/ProductListing';
import ProductDetail from './Components/ProductDetail';

function App() {
  return (
    <Provider store ={store}>
    <div className="App">
        <Header/>
        <Routes>
          <Route path='/' exact element = {<ProductListing/>}/>
          <Route path='/product/:productId' exact element = {<ProductDetail/>}/> 
          <Route>404 Not Found!</Route>
        </Routes>
    </div>
    </Provider>
  );
}

export default App;

import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import {Routes,Route} from 'react-router-dom'
import SearchResults from "./searchResults";

import CheckOut from './CheckOut'
import ProductShowcase from "./ProductShowcase";

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={
        <>
          <Header />
          <Home />
          <Footer/>
         </>
        } />


<Route path='/checkOut' element={
        <>
          <Header />
          <CheckOut />
          <Footer/>
         </>
        } />

<Route path='/search-results' element={
        <>
          <Header />
          <SearchResults />
          <Footer/>
         </>
        } />
  <Route path='/product-showcase:id' element={
        <>
          <Header />
          <ProductShowcase />
          <Footer/>
         </>
        } />
    
    </Routes>
    </div>
  );
}

export default App;

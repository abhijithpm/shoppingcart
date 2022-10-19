
import './App.css';
import Navbar from './Component/navbar/navbar'
import Banner from './Component/banner/banner'
import Categories from './Component/categories/categories';
import Items from './Component/items/items'
import Footer from './Component/footer/footer'
import Shoes from './Component/images/shoes.png'
import Bag from './Component/images/bag.png'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Categories/>
      <Items name={"Shoes"} image={Shoes}/>
      <Items name={"Backpack"} image={Bag}/>
      <Footer/>
     
      
    </div>
  );
}

export default App;

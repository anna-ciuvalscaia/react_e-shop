
import './App.css';
// alias import
import ProductModel from './models/Product';
import {ProductFull} from './components/product/Product';
import Money from './models/Money';
import Attribute from './models/Attribute';

function App() {
 

  const products = [
     new ProductModel(1, "Iphone", "https://enter.online/images/detailed/84/apple_iphone_11_purple1qq.png", "4 ГБ/ 128 ГБ/ Single SIM", new Money(100, "USD"), new Attribute("color", "silver")),
     new ProductModel(2, "Samsung", "https://enter.online/images/detailed/89/samsung_galaxy_a515_black1qqq_idsz-mm.png", "6 ГБ/ 128 Гб/ Dual SIM", new Money(180, "USD"), new Attribute("color", "gray")),
     new ProductModel(3, "Xiaomi", "https://enter.online/images/detailed/121/xiaomi_redmi_note_10_black_0_1616503840758.png", "3 ГБ/ 64 ГБ/ Dual SIM", new Money(70, "USD"), new Attribute("color", "black light")),
     new ProductModel(4, "Huawei", "https://enter.online/images/detailed/74/huawei_p30_lite_midnight_black1qqq.png", "4 ГБ/ 128 Гб/ Dual SIM", new Money(140, "USD"), new Attribute("color", "black")),
    ]
  return (
    <div className="App">

  {  products.map(product =>
  <div>
      <ProductFull product={product}/>
  </div>
   ) }
      
    </div>
  );
}

export default App;

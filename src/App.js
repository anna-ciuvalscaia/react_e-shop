
import './App.css';
// alias import
import ProductModel from './models/Product';
import {ProductFull} from './components/product/Product';

function App() {

  const products = [
     new ProductModel(1, "Iphone", "https://enter.online/images/detailed/84/apple_iphone_11_purple1qq.png", "4 ГБ/ 128 ГБ/ Single SIM", "100 $", "silver"),
     new ProductModel(2, "Samsung", "https://enter.online/images/detailed/89/samsung_galaxy_a515_black1qqq_idsz-mm.png", "6 ГБ/ 128 Гб/ Dual SIM", "150 $", "gray"),
     new ProductModel(3, "Xiaomi", "https://enter.online/images/detailed/121/xiaomi_redmi_note_10_black_0_1616503840758.png", "3 ГБ/ 64 ГБ/ Dual SIM", "250 $", "black light"),
     new ProductModel(4, "Huawei", "https://enter.online/images/detailed/74/huawei_p30_lite_midnight_black1qqq.png", "4 ГБ/ 128 Гб/ Dual SIM", "90 $", "black"),
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

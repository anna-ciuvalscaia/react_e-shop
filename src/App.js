
import './App.css';
// alias import
import ProductModel from './models/Product';
import Product from './components/product/Product';

function App() {

  const products = [
     new ProductModel(1, "Iphone", "https://enter.online/images/detailed/84/apple_iphone_11_purple1qq.png"),
     new ProductModel(2, "Samsung", "https://enter.online/images/detailed/89/samsung_galaxy_a515_black1qqq_idsz-mm.png"),
     new ProductModel(3, "Xiaomi", "https://enter.online/images/detailed/121/xiaomi_redmi_note_10_black_0_1616503840758.png"),
     new ProductModel(4, "Huawei", "https://enter.online/images/detailed/74/huawei_p30_lite_midnight_black1qqq.png"),
    ]
  return (
    <div className="App">
       
      {/*<div>
        <Product product={products[0]} />
      </div>
      <div>
        <Product product={products[1]} />
      </div> */}

       {/*
           H2: key ar prinde bine deoarece sunt mai multe produse, ar oferi un ID produsului
           H3
         */}

      {
        products.map(p => <Product key={p.id} {...p}/>)
      }
      
    </div>
  );
}

export default App;

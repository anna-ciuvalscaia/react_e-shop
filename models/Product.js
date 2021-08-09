import Money from "./Money";
import Attribute from "./Attribute";

class Product {
    constructor (id, name, imageUrls, description, {standard, discount}, attributes){
this.id = id;
this.name = name;
this.imageUrls = imageUrls;
this.description = description;
this.price = {
    standard: new Money(100.00, "USD"),
    discount: new Money(50.00, "USD"),
 };
this.attributes = attributes;
    }
    toPOJO() {
return {
    id: this.id,
    name: this.name,
    imageUrls: this.imageUrls,
    description: this.description,
    price: this.price,
    attributes: this.attributes,
}
    }
    toJSON(){
     return JSON.stringify(this.toPOJO())   
    }
}

export default Product
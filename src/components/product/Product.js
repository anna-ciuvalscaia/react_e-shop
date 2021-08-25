

import Image from "../ui/Image";
import Money from "../ui/Money";
import Attribute from "../ui/Attribute";


const Product = ({product: {id, name, imageUrls, price, description, attributes }}) => {
  const images = [imageUrls[0], imageUrls[1]]
    return (
        <>
         <h2>{name}</h2>

       {images.map(url => <Image url={url} alt={name}/>)}
            
            
        
         {/*<Money price={{amount:price.amount, currency:price.currency}}/>*/}
         {/* <Attribute attribute={{name:attributes.name, value:attributes.value}}/>*/}
        </>
        
    )
}

const ProductFull = ({product}) => {
   return (
     <>
       <Product product={product}/>
       
       <Money price={{amount:product.price.amount, currency:product.price.currency}}/>
       <p>{product.description}</p>
       
       <Attribute attribute={{name:product.attributes.name, value:product.attributes.value}}/>
     </>
   
   )
}

export {Product, ProductFull}
import Image from "../ui/Image"

const Product = ({product: {id, name, imageUrls}}) => {
    return (
        <>
         <h2>{name}</h2>
          <Image url={imageUrls} alt={name} />
        </>
        
    )
}

const ProductFull = ({product}) => {
   return (
     <>
       <Product product={product}/>
       <p>{product.description}</p>
     </>
   )
}

export {Product, ProductFull}
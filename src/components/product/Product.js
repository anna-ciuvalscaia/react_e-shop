import Image from "../ui/Image"

const Product = ({id, name, imageUrl}) => {
    return (
        <article id={id}>
         <h2>{name}</h2>
         {/*
           H1: key ar fi necesar in caz daca produsul ar avea mai multe imagini, 
           dar daca contine una cred ca nu este necesar
         */}  
          <Image url={imageUrl} alt={name} />
        </article>
        
    )
}

export default Product
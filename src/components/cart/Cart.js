// props -> const/ imutable
import {useState} from 'react'




const Cart = ({count}) => {
    
    return (
       
         <button>cart ({count})</button>
     )}

   
const AddToCartButton = ({count, setCount}) => {
 
    return (
       
           <button
         onClick={ () => {
             setCount(++count)
         }}
         >Add To Cart</button>

      )}

// Higher Order Component
// Drill Down Component
      const HOC = (props) => {
        let [count,setCount] = useState(props.count)
      return (
          <>
          <Cart count={count}/>
          <AddToCartButton count={count} setCount={setCount}/>
          </>
      )
    
          }




export {Cart, AddToCartButton, HOC }
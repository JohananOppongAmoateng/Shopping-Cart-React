import { useState } from "react/cjs/react.development"

export default function Product(props) {
     const {name,url,price,id} = props.datas
    const [Quantity,setQuantity] = useState(props.datas.quantity)
    
    
     function Increment() {
        setQuantity(
              Quantity +1 
           )         
     }
     function Decrement(){
        setQuantity(
            Quantity -1 
         ) 
     }
     function AddtoCart() {
         return props.setTotal(props.total + Quantity)
     }
    return <div>
        <div>
            <img src={url} alt="dog-leash"/>
            <p>Product:{name}</p>
            <p>Price: `$ ${price}`</p>
            <p>
                <button onClick={() =>{Decrement(id)}}>-</button>
                <span id={id}></span>Quantity:{Quantity}
                <button onClick={Increment}>+</button>
            </p>
            <p><button onClick={AddtoCart}>Add to Cart</button></p>
        </div>
    </div>
}
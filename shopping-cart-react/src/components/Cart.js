import { useState } from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer"
import {Data} from "../Data/Data";
import Product from "./Product"

function Cart() {
    const [Cart,setCart] = useState(Data)
    const [total,setTotal] = useState(0)
   
    
    return <div>
        <NavigationBar/>
        <p>TOTAL ITEMS:{total}</p>
        {
            Cart.map((datas)=>{
               
                return < Product datas={datas} key= {datas.id} total={total} setTotal={setTotal}/>
            })
        }
        <Footer/>
    </div>
}

export default Cart
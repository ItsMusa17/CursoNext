import { use, useState } from "react"
import type { OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState([])
    const [total, setTotal] = useState(0)
    const [auth, setAuth] = useState(false)

    //GENEREARICTS nos permite ser mas flexible con el codigo y ademas reutilizar codigo
    
    return{

    }
}
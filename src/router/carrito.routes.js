import {Router} from "express"
import CartManager from "../controllers/CartManager.js";

const EnrutadoCarrito = Router()

const carritos = new CartManager

EnrutadoCarrito.post("/", async(req, res)=>{
res.send(await carritos.agregarAlCarro())

})


EnrutadoCarrito.get("/", async (req, res )=>{

    res.send(await carritos.leerCarro())
})



export default EnrutadoCarrito
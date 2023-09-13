import {Router} from "express"
import ProductManager from "../controllers/ProductManager.js";

const Enrutador = Router()
const producto = new ProductManager();

Enrutador.post("/", async (req, res) => {
    let nuevoProducto = req.body
    res.send(await producto.agregarProducto(nuevoProducto))

})
Enrutador.get("/", async (req, res) => {
    res.send(await producto.obtenerProductos())

})
Enrutador.get("/:pid", async (req, res) => {
    let pid = req.params.pid
    res.send(await producto.buscarPorID(pid))

})

Enrutador.put("/:pid", async (req, res) => {
    let pid = req.params.pid
    let actualizarProducto = req.body;
    res.send( await producto.actualizarProducto(pid , actualizarProducto));


})

Enrutador.delete("/:pid", async (req, res) => {
    let pid = req.params.pid
    res.send(await producto.borrarProducto(pid))

})

export  default Enrutador
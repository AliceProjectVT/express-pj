import express from "express";
import ProductManager from "./controllers/ProductManager.js";


const producto = new ProductManager();


const app = express()
const PORT = 4000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/productos", async (req, res) => {
    let nuevoProducto = req.body
    res.send(await producto.agregarProducto(nuevoProducto))

})
app.get("/productos", async (req, res) => {
    res.send(await producto.getProducts())

})
app.get("/productos/:id", async (req, res) => {
    let id = req.params.id
    res.send(await producto.buscarPorID(id))

})

app.delete("/productos/:id", async (req, res) => {
    let id = req.params.id
    res.send(await producto.borrarProducto(id))

})
app.listen(PORT, () => {
    console.log(`servidor Express puerto ${PORT} `)

});

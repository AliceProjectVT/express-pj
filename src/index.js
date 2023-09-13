import express from "express";
import Enrutador from "./router/product.routes.js";
import carritoRouter from "./router/carrito.routes.js";



const app = express()
const PORT = 4000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/productos", Enrutador)
app.use("/carrito", carritoRouter)

app.listen(PORT, () => {
    console.log(`servidor Express puerto ${PORT} `)

});

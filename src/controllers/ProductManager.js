import { promises as fs } from 'fs'
import { nanoid } from "nanoid"

class ProductManager {
    constructor() {
        this.path = "./src/models/products.json"
    }

    leerProducto = async () => {
        let productos = await fs.readFile(this.path, "utf-8")
        return JSON.parse(productos);

    }

    editarPoducto = async (producto) => {

        await fs.writeFile(this.path, JSON.stringify(producto))



    }

    agregarProducto = async (producto) => {
        let productoEnCatalogo = await this.leerProducto()
        producto.id = nanoid()
        let catalogo = [...productoEnCatalogo, producto]
        await this.editarPoducto(catalogo);
        return "Producto Agregado"
    }

    borrarProducto = async (id) => {
        let productos = await this.leerProducto()
        let productoExistente = productos.some(prod => prod.id === id)

        if (productoExistente) {
            let filtrar = productos.filter(prod => prod.id != id)
            await this.editarPoducto(filtrar)
            return "Producto Eliminado"
        }
        return "El producto no existe"
    }


    getProducts = async () => {
        return await this.leerProducto()


    }
    buscarPorID = async (id) => {
        let productos = await this.leerProducto();
        let productoPorID = productos.find(prod => prod.id === id)
        if (!productoPorID) return "Producto no encontrado."
        return productoPorID



    }

}
export default ProductManager



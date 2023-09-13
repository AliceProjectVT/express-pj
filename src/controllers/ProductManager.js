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

    inStock = async (pid) => {

        let productos = await this.leerProducto();
       return productos.find(prod => prod.pid === pid)
    }

    agregarProducto = async (producto) => {
        let productoEnCatalogo = await this.leerProducto()
        producto.pid = nanoid()
        let catalogo = [...productoEnCatalogo, producto]
        await this.editarPoducto(catalogo);
        return "Producto Agregado"
    }


    borrarProducto = async (pid) => {
        let productos = await this.leerProducto()
        let productoExistente = productos.some(prod => prod.pid === pid)

        if (productoExistente) {
            let filtrar = productos.filter(prod => prod.pid != pid)
            await this.editarPoducto(filtrar)
            return "Haz Eliminado El Producto Seleccionado"
        }
        return "El producto no existe"
    }


    obtenerProductos = async () => {
        return await this.leerProducto()


    }
    buscarPorID = async (pid) => {
        
        let productoPorID = await this.inStock(pid)
        if (!productoPorID) return "Producto no encontrado."
        return productoPorID



    }
    
    actualizarProducto = async (pid, producto)=>{
        let productoPorID = await this.inStock(pid)
        if(!productoPorID)return "Producto No Encontrado!!!"
        await this.borrarProducto(pid)
        let productoEnCatalogo = await this.leerProducto()
        let productos = [{...producto, pid : pid}, ...productoEnCatalogo]
        await this.editarPoducto(productos)
        return "Producto Actualizado Correctamente! "
      
        }

    

}
export default ProductManager



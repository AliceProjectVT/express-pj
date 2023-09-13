import { promises as fs } from 'fs'
import { nanoid } from "nanoid"



class CartManager {
    constructor() {

        this.path = "./src/models/carrito.json";
    }
    leerCarro = async () => {
        let carro = await fs.readFile(this.path, "utf-8")
        return JSON.parse(carro);

    }

    editarCarro = async (carro) => {

        await fs.writeFile(this.path, JSON.stringify(carro))
    }

    agregarAlCarro = async()=>{
        let enCarro = await this.leerCarro()
        let pid = nanoid()
        let modificar = [{ pid : pid, productos : []}, ...enCarro]
        await this.editarCarro(modificar)
        return "Carrito Agregado"


    }


}

export default CartManager
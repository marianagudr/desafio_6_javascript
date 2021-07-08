class Producto {
    constructor(nombre, tipo, precio){
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
    }
}

class Tienda {
    constructor(nombre){
        this.nombre = nombre;
        this.productos = [];
    }
    agregarProductos(producto){
        this.productos.push(producto);
    }
}

const tiendaOnLine = new Tienda("Tienda online");

while (tiendaOnLine.productos.length < 3) {
    let nombre = prompt("Ingrese el nombre del producto:");
    let tipo = prompt("Ingrese el tipo de producto:");
    let precio = Number(prompt("Ingrese el precio del producto:"));
    tiendaOnLine.agregarProductos(new Producto(nombre, tipo, precio));
}

console.log(tiendaOnLine);

const resumenFilamentos = ["Pla", "Pla Max", "Pla3Di", "Pla Art", "Flex"];
const resumenResinas = ["Resinas UV", "Resinas Daylght"];
const resumenTotal = resumenFilamentos.concat(resumenResinas);

console.log(resumenTotal);

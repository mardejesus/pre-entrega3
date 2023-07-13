class Producto{
    constructor(id, nombre, tipo, precio, imagen){
        this.nombre = nombre;
        this.id = id;
        this.tipo = tipo;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const producto2 = new Producto(2, "Mouse gaming NBX 12000 con software NBX-MS12010","mouse", 26000, "mouse2.jpg");
const producto1 = new Producto(1, "Mouse gaming inalámbrico Logitech G305","mouse", 10000, "mouse1.jpg");
const producto3 = new Producto(3, "Mouse inalámbrico Logitech M170","mouse", 6339, "mouse3.jpg");
const producto4 = new Producto(4, "Mouse óptico económico Noganet NG-611U","mouse", 800, "mouse4.jpg");
const producto5 = new Producto(5, "Teclado mecánico gamer Soul Xk1000 Led","teclado", 12000, "teclado1.jpg");
const producto6 = new Producto(6, "Teclado Noganet 78005 español España color negro","teclado", 1600, "teclado2.jpg");
const producto7 = new Producto(7, "Teclado Logitech K120 español España color negro","teclado", 7000, "teclado3.jpg");
const producto8 = new Producto(8, "Teclado gamer Noganet NKB-560 español España luz RGB","teclado", 4000, "teclado4.jpg");

//CREAR UN ARRAY DE OBJETOS
let estanteria = [] 

// crear o capturar value de key "estanteria" en storage
if(localStorage.getItem("estanteria")){
    estanteria = JSON.parse(localStorage.getItem("estanteria"))
}else{
    console.log(`ENTRA POR PRIMERA VEZ. SETEAMOS ARRAY`)
    estanteria.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8)
    localStorage.setItem("estanteria", JSON.stringify(estanteria))
}

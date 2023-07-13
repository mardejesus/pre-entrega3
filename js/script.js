// DOM
let productosDiv = document.getElementById("articulos");
let ordenar = document.getElementById("selectOrden");
let buscador = document.getElementById("buscador");
let coincidencia = document.getElementById("coincidencia")
let modalBodyCarrito = document.getElementById("modal-bodyCarrito")
let botonCarrito = document.getElementById("botonCarrito")
let precioTotal = document.getElementById("precioTotal")


// carrito (verifico si existe en local storage, si no, lo guardo)
let carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];



// funciones

function mostrarCatalogo(array) {
    productosDiv.innerHTML = "";
    for (let producto of array) {
      let nuevoDivProducto = document.createElement("div");
      nuevoDivProducto.className = "card articulo";
      nuevoDivProducto.style = "width: 18rem;";
      nuevoDivProducto.id = `${producto.id}`;
      nuevoDivProducto.innerHTML = `
        <img src="img/${producto.tipo}${producto.id}.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title">${producto.nombre}</h3>
          <p class="card-text precio">${producto.precio}</p>
          <button id="agregarBtn${producto.id}" class="btn btn-outline-success">Agregar al carrito</button>
        </div>
      `;
        productosDiv.appendChild(nuevoDivProducto);
  
    let agregarBtn = document.getElementById(`agregarBtn${producto.id}`);
    agregarBtn.addEventListener("click", (event) => {
    let productoId = event.target.id.substring(10); // Obtener ID del producto
    let producto = estanteria.find((elem) => elem.id == productoId); // Buscar producto en catálogo
    agregarAlCarrito(producto);
  });
    }
  }

  function agregarAlCarrito(producto) {
    carrito.push(producto); // agregar el producto al arreglo carrito
    localStorage.setItem("carrito", JSON.stringify(carrito)); // guardar el carrito en el local storage
    actualizarModalCarrito(); // actualizar el contenido del modal del carrito
  }

  function actualizarModalCarrito() {
    modalBodyCarrito.innerHTML = ""; // limpiar el contenido del modal
    let precioTotalCarrito = 0;
  
    for (let producto of carrito) {
      let nuevoDivProducto = document.createElement("div");
      nuevoDivProducto.className = "producto-carrito";
      nuevoDivProducto.style = "text-align:center;"
      nuevoDivProducto.innerHTML = `
        <img src="img/${producto.tipo}${producto.id}.jpg" style="width:150px;" alt="">
        <div>
          <h3>${producto.nombre}</h3>
          <p>Precio: ${producto.precio}</p>
          <button class="btn btn-danger botonEliminar" id="botonEliminar${producto.id}">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      `;
      modalBodyCarrito.appendChild(nuevoDivProducto);
  
      precioTotalCarrito += producto.precio;
    }
  
    precioTotal.textContent = `Total: ${precioTotalCarrito}`;
  
    let botonesEliminar = document.getElementsByClassName("botonEliminar");
    for (let i = 0; i < botonesEliminar.length; i++) {
      botonesEliminar[i].addEventListener("click", function () {
        let productoId = this.id.substring(13); // Obtener el ID del producto a eliminar
        eliminarDelCarrito(productoId);
      });
    }
  }
  
  function eliminarDelCarrito(productoId) {
    // Buscar el índice del primer producto coincidente en el carrito
    let index = carrito.findIndex((producto) => producto.id == productoId);
  
    // Si se encuentra el producto en el carrito, eliminarlo
    if (index !== -1) {
      carrito.splice(index, 1); // Eliminar el producto del carrito
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarModalCarrito();
    }
  }  
  
  window.addEventListener("DOMContentLoaded", () => {
    mostrarCatalogo(estanteria);
    actualizarModalCarrito();
  });

  function ordenarMenorMayor(array) {
    const menorMayor = [].concat(array);
    menorMayor.sort((a, b) => a.precio - b.precio);
    mostrarCatalogo(menorMayor);
  }
  
  function ordenarMayorMenor(array) {
    const mayorMenor = [].concat(array);
    mayorMenor.sort((a, b) => b.precio - a.precio);
    mostrarCatalogo(mayorMenor);
  }
  
  function ordenarAlfabeticamenteTitulo(array) {
    const arrayAlfabetico = [].concat(array);
    arrayAlfabetico.sort((a, b) => {
      if (a.nombre > b.nombre) {
        return 1;
      }
      if (a.nombre < b.nombre) {
        return -1;
      }
      return 0;
    });
    mostrarCatalogo(arrayAlfabetico);
  }
  
  // ...
  
  selectOrden.addEventListener("change", () => {
    switch (selectOrden.value) {
      case "1":
        ordenarMayorMenor(estanteria);
        break;
      case "2":
        ordenarMenorMayor(estanteria);
        break;
      case "3":
        ordenarAlfabeticamenteTitulo(estanteria);
        break;
      default:
        mostrarCatalogo(estanteria);
        break;
    }
  });
  

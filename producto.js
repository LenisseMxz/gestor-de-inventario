class Producto{

    constructor(codigo, nombre, cantidad, precio){
        this._codigo = codigo;
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._precio = precio;
    };

    info(){
        return `Codigo: ${this._codigo}\nNombre: ${this._nombre}\nCantidad: ${this._cantidad}\nPrecio: ${this._precio}`;
    };

    infoHtml(){
        return `<p><strong>Codigo: ${this._codigo}<br>Nombre: ${this._nombre}<br>Cantidad: ${this._cantidad}<br>Precio: ${this._precio}</strong></p>`
    };

    get codigo(){
        return this._codigo;
    };

    get nombre(){
        return this._nombre;
    };

    get cantidad(){
        return this._cantidad;
    };

    get precio(){
        return this._precio;
    };
};
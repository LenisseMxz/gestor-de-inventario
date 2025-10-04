class Inventario{

    constructor(){
        this._productos = [];
    };

    agregar(producto){
        this._productos.push(producto);
    };

    eliminar(codigoProducto){

        for(let i = 0; i <= this._productos.length-1; i++){
            if(codigoProducto == this._productos[i].codigo){
                for(let j = i; j <= this._productos.length-1; j++){
                    this._productos[j] = this._productos[j+1];
                };    
                this._productos.pop();
            };
        };
    };

    listar(){

        if(this._productos[0] != null){
            let listadoProductos = "";             
            for(let i = 0; i <= this._productos.length-1; i++){
                if(this._productos[i] != undefined){
                    listadoProductos += `(${this._productos[i].codigo}) ${this._productos[i].nombre}\n\n`;
                }else{
                    listadoProductos += `undefined\n\n`;
                };            
            };
            return `Productos:\n\n` + listadoProductos;
        }else{
            return `No hay objetos para listar.`;
        };
    };

    listarHtml(){

        if(this._productos[0] != null){
            let listadoProductos = "";  
            for(let i = 0; i <= this._productos.length-1; i++){
                if(this._productos[i] != undefined){
                    listadoProductos += `<p><strong>${this._productos[i].nombre}<br></strong></p>`
                }else{
                    listadoProductos += `<p><strong>Undefined<br><strong><p>`
                };
            };
            return listadoProductos;
        }else{
            return `No hay objetos para listar.`;
        };
    };

    buscar(codigoProducto){

        for(let i = 0; i <= this._productos.length-1; i++){
            if(codigoProducto == this._productos[i].codigo){
                return this._productos[i];
            };
        };
        return null;
    };

    buscarHtml(codigoProducto){

        for(let i = 0; i <= this._productos.length-1; i++){
            if(this._productos[i] != undefined && codigoProducto == this._productos[i].codigo){
                return `<p><strong>Codigo: ${this._productos[i].codigo}<br>Nombre: ${this._productos[i].nombre}<br>Cantidad: ${this._productos[i].cantidad}<br>Precio: ${this._productos[i].precio}</strong></p>`
            };
        };
        return `El objeto no existe.`;
    };

    agregarInicio(producto){

        for(let i = this._productos.length; i > 0; i--){
            this._productos[i] = this._productos[i-1];
        };
        this._productos[0] = producto;
    };

    extraerPrimero(){

        if(this._productos[0] != null){
            let primerProducto = this._productos[0];
            for(let i = 0; i <= this._productos.length-1; i++){
                this._productos[i] = this._productos[i+1]; 
            };
            this._productos.pop();
            return primerProducto;
        }else{
            return null;
        }; 
    };

    extraerPrimeroHtml(){

        if(this._productos[0] != null){
            let primerProducto = this._productos[0];
            for(let i = 0; i <= this._productos.length-1; i++){
                this._productos[i] = this._productos[i+1]; 
            };
            this._productos.pop();
            return `<p><strong>Codigo: ${primerProducto.codigo}<br>Nombre: ${primerProducto.nombre}<br>Cantidad: ${primerProducto.cantidad}<br>Precio: ${primerProducto.precio}</strong></p>`
        }else{
            return `No hay objetos para extraer.`;
        };
    };

    insertar(producto, posicion){
        
        if(this._productos[posicion] != undefined){
            for(let i = this._productos.length; i > posicion; i--){
            this._productos[i] = this._productos[i-1];
            };
            this._productos[posicion] = producto;
        }else{
            this._productos[posicion] = producto;
        };   
    };
};
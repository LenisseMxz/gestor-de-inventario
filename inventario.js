class Inventario{

    constructor(){
        this._productos = [];
    };

    /*
    agregar(producto){
        this._productos.push(producto);
    };
    */

    agregarOrdenado(producto){
        if(this._productos.length != 0){
            for(let i = 0; i <= this._productos.length-1; i++){
                if(this._productos[i].codigo != producto.codigo){
                    if(this._productos[i].codigo > producto.codigo){
                        for(let j = this._productos.length; j > i; j--){
                            this._productos[j] = this._productos[j-1];
                        };
                        this._productos[i] = producto;
                        break;
                    }else if (this._productos[i+1] == undefined){
                        this._productos.push(producto);
                        break;
                    };
                }else if(this._productos[i] == undefined){
                    continue;
                }else{
                    return `Código invalido`;
                };
            };
        }else{
            this._productos.push(producto);
        };
        return `<p>Se añadió el objeto:<br><br><strong>Codigo: ${producto.codigo}<br>Nombre: ${producto.nombre}<br>Cantidad: ${producto.cantidad}<br>Precio: ${producto.precio}</strong></p>`;
    };

    eliminar(codigoProducto){

        for(let i = 0; i <= this._productos.length-1; i++){
            if(this._productos[i] != undefined && codigoProducto == this._productos[i].codigo){
                for(let j = i; j <= this._productos.length-1; j++){
                    this._productos[j] = this._productos[j+1];
                };    
                this._productos.pop();
            }else{
                continue;
            };
        };
    };

    /*
    listar(){
        if(this._productos.length != 0){
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
    */

    listarHtml(){
        if(this._productos.length != 0){
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

     listarHtmlInverso(){
        if(this._productos.length != 0){
            let listadoProductos = "";  
            for(let i = this._productos.length-1; i >= 0; i--){
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

    /*
    buscar(codigoProducto){

        for(let i = 0; i <= this._productos.length-1; i++){
            if(this._productos[i] != undefined && codigoProducto == this._productos[i].codigo){
                return this._productos[i];
            }else{
                continue;
            };
        };
        return null;
    };
    */

    buscarHtml(codigoProducto){

        for(let i = 0; i <= this._productos.length-1; i++){
            if(this._productos[i] != undefined && codigoProducto == this._productos[i].codigo){
                return `<p><strong>Codigo: ${this._productos[i].codigo}<br>Nombre: ${this._productos[i].nombre}<br>Cantidad: ${this._productos[i].cantidad}<br>Precio: ${this._productos[i].precio}</strong></p>`
            }else{
                continue;
            };
        };
        return `El objeto no existe.`;
    };

    buscarHtmlBinario(codigoProducto){
        let izq = 0;
        let der = this._productos.length-1;
        let medio = Math.ceil((izq+der)/2);

        while(codigoProducto != this._productos[medio].codigo){
            if(medio == izq || medio == der && this._productos.length != 2){
                return `El objeto no existe.`
            }else if(codigoProducto < this._productos[medio].codigo){
                der = medio-1;
                medio = Math.ceil((izq+der)/2);
            }else if(codigoProducto > this._productos[medio].codigo){
                izq = medio+1;
                medio = Math.ceil((izq+der)/2);
            };
        };
        return `<p><strong>Codigo: ${this._productos[medio].codigo}<br>Nombre: ${this._productos[medio].nombre}<br>Cantidad: ${this._productos[medio].cantidad}<br>Precio: ${this._productos[medio].precio}</strong></p>`;
    };

    /*
    agregarInicio(producto){

        for(let i = this._productos.length; i > 0; i--){
            this._productos[i] = this._productos[i-1];
        };
        this._productos[0] = producto;
    };
    */

    /*
    extraerPrimero(){

        if(this._productos.length != 0){
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
    */

    extraerPrimeroHtml(){

        if(this._productos.length != 0){
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

    /*
    insertar(producto, posicion){

        if(posicion == ""){
            alert(`La posición debe ser un valor mayor a 0.`);
            return `Ninguno`;
        }else{
            if(this._productos[posicion] != undefined){
                for(let i = this._productos.length; i > posicion; i--){
                    this._productos[i] = this._productos[i-1];
                };
                this._productos[posicion] = producto;
                return `<p><strong>${this._productos[posicion].nombre}</strong></p>`;
            }else{
                this._productos[posicion] = producto;
                return `<p><strong>${this._productos[posicion].nombre}</strong></p>`;
            }; 
        };     
    };
    */
};
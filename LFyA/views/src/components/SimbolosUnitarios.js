class SimbolosUnitarios{
    constructor(gramatica, noTerminales){
        this.gramatica = gramatica;
        this.noTerminales = noTerminales;
        this.produccion = new Array();
        var ArregloObjetos = new Array();
        var ArregloObjetosAux = new Array();
        this.ArrayTuplas = new Array();
        this.ArrayTuplasAux = new Array();
        this.eliminacionUnitarios();
    }
    eliminacionUnitarios(){
        function produccionesUnitarias(SimboloNT, Unitario){
            this.SimboloNT = SimboloNT;
            this.Unitario = Unitario;
        }
        //document.write("<br/> ");
		
		
        var p26 = document.createElement("p");
        var n26 = document.createTextNode("La gram\u00E1tica que recibe...");
		p26.appendChild(n26);
		var element26 = document.getElementById("hack.5");
		element26.appendChild(p26);
		
		
		
        for(var i in this.gramatica){
			
			
			
            var p27 = document.createElement("p");
			var n27 = document.createTextNode(""+i+" \u2192 ["+this.gramatica[i]+"]");
			p27.appendChild(n27);
			var element27 = document.getElementById("hack.5");
			element27.appendChild(p27);
			
			
        }

        for(var i in this.gramatica){
            this.produccion = this.gramatica[i];
            for(var j in this.produccion){
                for(var k in this.noTerminales){
                    if(this.produccion[j]==this.noTerminales[k]){
                        this.ArrayTuplas.push(new produccionesUnitarias(i,this.noTerminales[k]));
                        this.produccion.splice(j,1);
                    }
                }
            }
        }
        var auxSNTcnt; 
        var i,j;
        var longi = this.ArrayTuplas.length -1;
        for( i = 0; i < longi ;i++){
            this.ArregloObjetos = this.ArrayTuplas[i];
            this.ArregloObjetosAux = this.ArrayTuplas[i+1];
            this.auxSNTcnt = this.ArregloObjetos.SimboloNT;
            for(j = i; j<longi;j++){
                this.ArregloObjetos = this.ArrayTuplas[j];
                this.ArregloObjetosAux = this.ArrayTuplas[j+1];
                if(this.ArregloObjetos.Unitario == this.ArregloObjetosAux.SimboloNT){
                    var Tupla = new produccionesUnitarias(this.auxSNTcnt, this.ArregloObjetosAux.Unitario);
                    this.ArrayTuplasAux.push(Tupla);
                }
            }
        }
        //document.write("<br/> ");
        this.ArrayTuplas = this.ArrayTuplas.concat(this.ArrayTuplasAux);
        for(var i in this.ArrayTuplas){
            this.ArregloObjetos = this.ArrayTuplas[i];
            this.gramatica[this.ArregloObjetos.SimboloNT] = this.gramatica[this.ArregloObjetos.SimboloNT].concat(this.gramatica[this.ArregloObjetos.Unitario]);
        }
        for (var i in this.gramatica) {
            var temp = this.gramatica[i];
            for (var j in temp) {
                for (var k = j; k <= this.gramatica[i].length; k++) {
                    if (temp[j] == temp[k] && k != j) {
                        temp.splice(k, 1);
                        k--;
                    }
                }
            }
            this.gramatica[i] = temp;
        }
		
		
		
        var p28 = document.createElement("p");
		var n28 = document.createTextNode(" La gram\u00E1tica que retorna...");
		p28.appendChild(n28);
		var element28 = document.getElementById("hack.5");
		element28.appendChild(p28);
		
		
        for(var i in this.gramatica){
			
			
            var p29 = document.createElement("p");
			var n29 = document.createTextNode(" "+i+" \u2192 ["+this.gramatica[i]+"]");
			p29.appendChild(n29);
			var element29 = document.getElementById("hack.5");
			element29.appendChild(p29);
			
			
        }
        //document.write("<br/> ");
    } 
}
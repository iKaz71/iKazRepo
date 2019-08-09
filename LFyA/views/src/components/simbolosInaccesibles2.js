class simbolosInaccesibles2 {
    constructor(gramatica, noTerminales, simboloInicial) {
        this.gramatica = gramatica;
        this.noTerminales = noTerminales;
        this.simboloInicial = simboloInicial;
        this.noTerminalesF = new Array();
        this.noTerminalesF.push(this.simboloInicial);
        this.busqueda();
    }
    busqueda() {
        for (var i in this.noTerminalesF) {
            var temp = this.gramatica[this.noTerminalesF[i]];
            //document.write("<br/>" + temp);
            for (var j in temp) {
                for (var k in this.noTerminales) {
                    if (temp[j].includes(this.noTerminales[k])) {
                        if (!(this.noTerminalesF.includes(this.noTerminales[k]))) {
                            this.noTerminalesF.push(this.noTerminales[k]);
                            this.busqueda();
                        }
                    }
                }
            }
        }
        this.eliminacion();
    }
    eliminacion() {
        for (var i in this.noTerminales) {
            if (!(this.noTerminalesF.includes(this.noTerminales[i]))) {
                delete this.gramatica[this.noTerminales[i]];
            }
        }
    }
    imprimir() {
		
		
        var p15 = document.createElement("p");
        var n15 = document.createTextNode("Arreglo NT inicial: " + this.noTerminales);
		p15.appendChild(n15);
		var element15 = document.getElementById("hack.7");
		element15.appendChild(p15);
		
		
		
        var p16 = document.createElement("p");
        var n16 = document.createTextNode("Arreglo NT Final: " + this.noTerminalesF);
		p16.appendChild(n16);
		var element16 = document.getElementById("hack.7");
		element16.appendChild(p16);
		
		
		
		
        var p17 = document.createElement("p");
        var n17 = document.createTextNode("Gram\u00E1tica Final: ");
		p17.appendChild(n17);
		var element17 = document.getElementById("hack.7");
		element17.appendChild(p17);
		
		
		
		
        for (var j in this.noTerminalesF) {
			
			
			
            var p18 = document.createElement("p");
			var n18 = document.createTextNode("Regla de producci\u00F3n " + this.noTerminalesF[j] + " \u2192 " + this.gramatica[this.noTerminalesF[j]]);
			p18.appendChild(n18);
			var element18 = document.getElementById("hack.7");
			element18.appendChild(p18);
		}
    }
}
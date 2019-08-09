class simbolosVacios {
    constructor(gramatica, noTerminales, simboloInicial) {
        this.gramatica = gramatica;
		this.gramaticaInicial=gramatica;
        this.noTerminales = noTerminales;
        this.simboloInicial = simboloInicial;
        this.lVac = new Array();
        this.bandera = 0;
        this.arreglo = new Array();
        this.busqueda();
    }
    busqueda() {
        for (var i in this.gramatica) {
            this.arreglo = this.gramatica[i];
            for (var j in this.arreglo) {
                if (this.arreglo[j] == "." && !this.lVac.includes(i)) {
                    this.lVac.push(i);
                    this.bandera = 1;
                }
            }
        }
        if (this.bandera == 1) {
            this.combinaciones();
        } else {
            this.gramaticaRes();
        }
    }
    combinaciones() {
        for (var i = 0; i < this.lVac.length; i++) {
            for (var j in this.gramatica) {
                this.arreglo = this.gramatica[j];
                for (var k = 0; k < this.arreglo.length; k++) {
                    if (this.arreglo[k].search(this.lVac[i]) != -1) {
                        var temp = this.arreglo[k].split("");
                        for (var ind in temp) {
                            if (temp[ind] == this.lVac[i]) {
                                temp.splice(ind, 1);
                                temp = temp.join("");
                                if (temp == "") {
                                    temp = temp.replace("", ".");
                                    if (!this.lVac.includes(j)) {
                                        this.lVac.push(j);
                                    }
                                }
                                this.arreglo.push(temp);
                            }
                            temp = this.arreglo[k].split("");
                        }
                    }
                }
            }
        }
        this.eliminacionVacios();
    }
    eliminacionVacios() {
		for (var cont=0;cont<=1;cont++){	
			for (var i in this.gramatica) {
				this.arreglo = this.gramatica[i];
				if (this.arreglo.includes(".")) {
					for (var j in this.arreglo) {
						if (this.arreglo[j] == ".") {
							this.arreglo.splice(j, 1);
							j--;
						}
					}
				}
			}
		}
        this.eliminacionIdem();
    }

    eliminacionIdem() {
        var p;
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
        this.gramaticaRes();
    }

    gramaticaRes() {
        var bandera = 0;
        for (var i in this.gramatica) {
            var temp = this.gramatica[i];
            for (var j in temp) {
                 if (temp[j].includes(this.simboloInicial) && i!=this.simboloInicial) {
                    this.noTerminales.unshift("'" + this.noTerminales[0]);
                    this.simboloInicial = this.noTerminales[0];
                    this.gramatica[this.noTerminales[0]] = [this.noTerminales[1], "."];
                    bandera = 1;
                    break;
                }
            }
            if (bandera == 1) {
                break;
            }
        }
        if (bandera == 0) {
            if(this.gramaticaInicial[this.simboloInicial].indexOf(".")!=-1){
              this.gramatica[this.simboloInicial].push(".");
            }
        }
    }
    getFinal() {
		
		
		
        var p21 = document.createElement("p");
        var n21 = document.createTextNode("Arreglo NT final" + this.noTerminales);
		p21.appendChild(n21);
		var element21 = document.getElementById("hack.4");
		element21.appendChild(p21);
		
		
        for (var j in this.noTerminales) {
			
			
			
			
            var p22 = document.createElement("p");
			var n22 = document.createTextNode("Regla de producci\u00F3n " + this.noTerminales[j] + " \u2192  " + this.gramatica[this.noTerminales[j]]);
			p22.appendChild(n22);
			var element22 = document.getElementById("hack.4");
			element22.appendChild(p22);

	   }
    }
}

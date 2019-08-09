class simbolosMuertosClase2 {
     constructor(gramatica, noTerminales, alfabeto) {
         this.P = gramatica;
         this.NT = noTerminales;
         this.Z = alfabeto;
         this.NTF = new Array();
         this.PF = new Array();
         this.accion();
     }
     accion() {
         var NTUZ = new Array();
         var i = 0;
         for (var Aux in this.Z) {
             NTUZ[i] = this.Z[Aux];
             i = i + 1;
         }
         var Finales = new Array();
         var ListaAux = new Array();
         i = 0;

         var temp = "prueba";
         var nombres = Object.keys(this.P);
         for (var Aux2 in this.P) {
             this.PF[Aux2] = [];
             for (var Aux3 in this.P[Aux2]) {
                 for (var Aux4 in this.Z) {
                     if (this.P[Aux2][Aux3] == this.Z[Aux4]) {
                         this.PF[Aux2].push(this.P[Aux2][Aux3]);

                     }
                 }

             }
             if (this.PF[Aux2].length == 0) {
                 delete this.PF[Aux2];
             }
         }
         var nombres2 = Object.keys(this.PF);
         temp = nombres[0];
         var prueba = this.PF[temp];
         for (var Aux in this.PF) {
             NTUZ.push(Aux);
         }
         var contador = 0;
         while (contador == 0) {
             contador = 1;
             var encontrado = 0;
             var otroCont = 0;
             var nombres2 = Object.keys(this.PF);
             for (var Aux in this.P) {
                 for (var Aux2 in this.P[Aux]) {
                     var arrSC = this.P[Aux][Aux2].split("");
                     for (var Aux3 in arrSC) {
                         otroCont = 0;
                         encontrado = 0;
                         for (var Aux4 in NTUZ) {
                             if (arrSC[Aux3] == NTUZ[Aux4]) {
                                 encontrado = 1;
                             }
                             if (encontrado == 1) {
                                 break;
                             }
                         }
                         if (encontrado == 0) {
                             break;
                         }
                         otroCont = 1;
                     }
                     if (otroCont == 1) {
                         if (nombres2.includes(Aux)) {
                             var n = this.PF[Aux].includes(this.P[Aux][Aux2]);
                             n = !n;
                             if (n) {
                                 this.PF[Aux].push(this.P[Aux][Aux2]);
                             }
                         } else {
                             this.PF[Aux] = [];
                             this.PF[Aux].push(this.P[Aux][Aux2]);
                             NTUZ.push(Aux);
                             contador = 0;

                         }
                     }
                 }
             }
             for (var i in this.PF) {}
         }
		 
		 
		 
        var p8 = document.createElement("p");
        var n8 = document.createTextNode("Arreglo NT inicial " + this.NT);
		p8.appendChild(n8);
		var element8 = document.getElementById("hack.6");
		element8.appendChild(p8); 
		 
		 
		 
		 
         this.NTF = Object.keys(this.PF);
		 
		 
        var p9 = document.createElement("p");
        var n9 = document.createTextNode("Arreglo de NT final " + this.NTF);
		p9.appendChild(n9);
		var element9 = document.getElementById("hack.6");
		element9.appendChild(p9);
		 
		 
		 
        var p10 = document.createElement("p");
        var n10 = document.createTextNode("Gram\u00E1tica Final ");
		p10.appendChild(n10);
		var element10 = document.getElementById("hack.6");
		element10.appendChild(p10); 
		 
		 

         for (var j in this.NTF) {
			 
			 
            var p11 = document.createElement("p");
			var n11 = document.createTextNode("Regla de producci\u00F3n " + this.NTF[j] + " \u2192  " + this.PF[this.NTF[j]]);
			p11.appendChild(n11);
			var element11 = document.getElementById("hack.6");
			element11.appendChild(p11);
			
			
			
			
		 }
     }
 }

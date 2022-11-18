var hora = 0;
var mins = 0;
var segs = 0;

var limites = [60,60,24];
var tipos =[segs,mins,hora];

function validar(tipo, limite){
	if(tipo == limite){
		tipo=0;
		console.log("Si es igual al limite");
	}
}

for(var i=0; tipos.length > i; i++){
	validar(tipos[i],limites[i]);
}

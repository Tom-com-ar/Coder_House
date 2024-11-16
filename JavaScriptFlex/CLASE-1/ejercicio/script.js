alert("Bienvenido a tu comprobacion de aprobado")

let cantidad_examenes = Number(prompt("¿Cuantos examenes vas a comprobar?"))
suma=0


for(let i = 0; i < cantidad_examenes; i++){
    let calificacion = Number(prompt(`Ingresa la calificación del examen ${i+1}:`));
    suma = suma + calificacion;
}

let promedio = suma / cantidad_examenes;
console.log(suma)
console.log(promedio)

if (promedio >= 7){
    alert("Felecitaciones aprobaste tu cuatrimestre con una suma de " + suma + " y con un prmedio de " + promedio.toFixed(1))
}else{
    alert("Para la proxima, estudia un poco mas tu promedio fue de " + promedio.toFixed(1) )
}

alert("Hasta la proxima Coder")

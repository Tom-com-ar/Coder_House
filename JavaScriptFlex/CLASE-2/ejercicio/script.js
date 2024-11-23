function CalcularAreaTriangulo(base , altura){

    if(isNaN(base) || isNaN(altura)){
      return "Ingresa un número valido";
    }
      
  const area = (base * altura) / 2 
  
  return "El triangulo de base " + base + " y altura " + altura + " tiene un area de " + area
  
}

console.log(CalcularAreaTriangulo(5,10))
console.log(CalcularAreaTriangulo("base",10))
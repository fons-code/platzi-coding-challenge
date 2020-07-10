//Ingresar lados del triangulo 
const lado_a = 5;
const lado_b = 5;
const lado_c = 5;

//Ingresar base y altura
const base = 10;
const altura = 15;

//Funciones
const tipoTriangulo = (lado_a,lado_b,lado_c) => {
    if(lado_a == lado_b && lado_a == lado_c)
        return 'Equilatero'
    if(lado_a == lado_b || lado_a == lado_b || lado_c == lado_b)
        return 'Isoceles'
    else{
        return 'Escaleno'
    }
}
const areaTriangulo = (base,altura) => (base * altura) / 2

//Salida
console.log(`El area del triangulo es: ${areaTriangulo(base,altura)}`)
console.log(`Su triangulo es de tipo: ${tipoTriangulo(lado_a,lado_b,lado_c)}`)
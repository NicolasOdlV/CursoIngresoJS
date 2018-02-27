/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad;
    var sexo;
    var estadoCivil;
    var sueldo;
    var nLegajo;
    var nacionalidad;
    var mensaje;
    //contadores de  sexo
    var contadorF=0;
    var contadorM=0;
    //acumuladores de sueldos
    var acumuladorSueldosF=0;
    var acumuladorSueldosM=0;
    var max=8000;
    var promedioM;
    var promedioF;
    
    


for(var i=0;i<3;i++){

   mensaje=alert("Ingrese los datos de la persona "+(i+1));
// pedir y validar edad
    do{
    edad=prompt("Ingrese su edad");
    edad=parseInt(edad);
    document.getElementById("Edad").value=edad;
    }
    while(isNaN(edad)||(edad<18||edad>90));
// pedir y validar sexo
    do{
    sexo=prompt("Ingrese su sexo 'f'(femenino), 'm'(masculino) ");
    document.getElementById("Sexo").value=sexo;
    if (sexo=='m') {
        contadorM++;
    } else if (sexo=='f') {
        contadorF++;
    }  
    }while(sexo!='f'&&sexo!='m');
// pedir y validar sueldo
    do{
    sueldo=prompt("Ingrese el sueldo de la persona");
    sueldo=parseInt(sueldo);
    document.getElementById("Sueldo").value=sueldo;
}while(isNaN(sueldo)||sueldo<8000);    

// pedir y validar estado civil
do{
    estadoCivil=prompt("Ingrese el numero segun corresponda"+" 1-Soltero "+"2-Casado "+"3-Divorciado "+" 4-Viudo");
    estadoCivil=parseInt(estadoCivil);
    switch (estadoCivil) {
        case 1:
        document.getElementById("EstadoCivil").value="Soltero";
        break;
        case 2: 
        document.getElementById("EstadoCivil").value="Casado";
        break;    
        case 3:
        document.getElementById("EstadoCivil").value="Divorciado";
        break;    
        case 4:
        document.getElementById("EstadoCivil").value="Viudo";
        break;                    
        default:
        break;
    }
}while(isNaN(estadoCivil)||(estadoCivil>4));
// pedir y validar nro de legajo
do{
    nLegajo=prompt("Ingrese nro de legajo");
    nLegajo=parseInt(nLegajo);
    if(nLegajo<1000){
        document.getElementById("Legajo").value=(nLegajo+1000);
    }else{
        document.getElementById("Legajo").value=nLegajo;
    }
}while(isNaN(nLegajo)||nLegajo>9999);
// pedir y validar nacionalidad
do{
    nacionalidad=prompt("Ingrese la letra segun corresponda a su nacionalidad "+" a- Argentino "+" e- Extranjero "+" n- Nacionalizado");
    switch (nacionalidad) {
        case "a":
        document.getElementById("Nacionalidad").value="Argentino";
        
        break;
        case "e":
        document.getElementById("Nacionalidad").value="Extranjero";
        break;                   
        case "n":
        document.getElementById("Nacionalidad").value="Nacionalizado";
        break;                    
        default:
        break;
    }
}while(nacionalidad!="a"&&nacionalidad!="e"&&nacionalidad!="n");

if (sexo=="m") {
 acumuladorSueldosM+=sueldo;
 }else if(sexo=="f"){
 acumuladorSueldosF+=sueldo;
  }
}//llave de cierre for

// crear switch para responder cada item
mensaje=prompt("Ingrese el numero que desee: "+" 1-El sueldo maximo de los nacionalizados "+" 2-El sueldo maximo de sexo f y argentina "+" 3-El sueldo promedio m, femenino y ambos");
mensaje=parseInt(mensaje);
switch (mensaje) {
    case 1:
    if(nacionalidad=='n'){
        if(sueldo>max){
            max=sueldo;
        }
        alert("El sueldo maximo es: "+max);
    }
    break;
    case 2:
    if(sexo=="f"&&nacionalidad=="a"){
        if(sueldo>max){
            max=sueldo;
        }
        alert("El sueldo maximo de sexo f y argentina es: "+max);
    }
    break;
    case 3:
            promedioM=(acumuladorSueldosM/contadorM)*0.75;
                 alert("El sueldo promedio masculino es: "+promedioM);
            promedioF=(acumuladorSueldosF/contadorF)*0.75;            
                 alert("El sueldo promedio femenina es: "+promedioF);
                       break;      
          default:
              break;
      }

    }                    





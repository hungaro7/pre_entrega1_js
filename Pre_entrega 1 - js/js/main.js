/* Este programa esta pensado para ser un sistema de gestion para clientes de la metalurgica donde trabajo actualmente
    
    -LOGIN
    primero una funcion de logeo, donde se pide usuario, edad, profesion, si es herrero o una empresa recibe una bonifica
    en el precio de su factura, si es menor de 18 no puede facturar.
    Retorna el valor del descuento si hay

    -MENU
    luego accede a un menu donde puede elegir el area donde desea hacer su trabajo ( corte / plegado / corte laser / estructuras)

    -PRESUPUESTO
    por ultimo se le arma el presupuesto en base al material(espesor de chapa), medidas( para sacar el area de chapa) y cant
    de piezas, se carga la cantidad de piezas solicitadas, por el coef del espesor.
    Retorna un valor de la cotizacion
    
    -------------------------------------------------------------------------------------------------------------------------------
    - Aclaracion, queda pendiente desarrollar el area de estructuras metalicas, plegado de chapas y corte laser, usa la misma funcion
    para presupuestar pero hay otras variables a tener en cuenta

    - Falta una funcion para hacer las liquidaciones de los trabajos con la facturacion, descuentos por oficios

*/

let usuario;
let edad;
let profesion;
let cotizacion;

// -------------------------------- Funcion login ----------------------------------------------

function login() 
{
    alert("Sistema de login, ingrese sus datos: ");

    let usuario= prompt("Ingrese su nombre: ");
    let edad= prompt("Edad:");
    let oficio= prompt("Profesion (Herrero - Empresa - Otros)" );

    console.log("Usuario: (Nombre y apellido) " + usuario);
    console.log("Edad: " + edad);
    console.log("Profesion: (Herrero - Empresa - Otros) " + oficio);

    if(edad<18)
    {
    console.log("Es menor de edad, por lo tanto no se le pueda confeccionar una factura");
    console.log("no aplica descuento");
    console.log("edad: ", edad);
    let factura=false;

    }

        if((oficio == "herrero") || (oficio == "empresa"))
            {
            alert("Recibes un descuento del 15% en tu compra por tu profesion: " + oficio);
            let descuento=0.15;
            alert("Bienvenido Sr/a " + usuario + "¿ En que lo podemos ayudar?" );
            return descuento;
            }
        else
            {
            alert("su profesion no posee ningun beneficio asociado");
            descuento=1;    
            alert("Bienvenido Sr/a " + usuario.toUpperCase() + "¿ En que lo podemos ayudar?" );
            return descuento;
            }
}

// ---------------------------------- Funcion Menu -------------------------------------------
function menu()
{
    while(true)
        {
        let opcion= prompt("Indicar que servicio precisa:\n Corte(C)\n Plegado(P)\n Corte Laser(L)\n Estructuras(E)\n");

        switch(opcion.toLowerCase())
        {
            case "c":
                alert("Ingreso Corte de chapas");
                presupuesto();
                break;
                    
            case "p":
                alert("Ingreso plegado de chapas (Pendiente)");
                menu();
                break;
                    
            case "l":
                alert("Ingreso Corte Laser (Pendiente)");
                menu();
                break;
                    
            case "e":
                alert("Ingreso Estructuras Metalicas (Pendiente)");
                menu();
                break;

            case "s":
                alert("Saliendo del programa");
                break;  
           
            default:
                alert("Error");
                menu();
                    
            }
            return opcion;
        }
    
}

// -----------------------------------Funcion Presupuesto ------------------------------------------

function presupuesto()
{
    let cantidad;
    let aux=true;
    let area=0;
    const coef18=2;
    const coef14=4;
    const coef5=6;
    let coeficiente=0;
    
    let material;
    let kilos;

        while (aux != false)
        {
            alert("Presupuesto - COMPLETE LA OPCION CORRESPONDIENTE:  ");
            material= prompt("Indique el espesor de chapa con el que desea presupuestar:\n 1)Ch 14\n 2)Ch18\n  3)Ch 5\n ");
            let acabado=prompt("Indique el tipo de chapa con el que desea presupuestar:\n 1)SAE 1010\n 2)AISI\n  3)GALVA\n ");
            cantidad=prompt("Indique la cantidad de piezas a presupuestar: ");
            
            console.log("Espesor: " + material);
            console.log("Espesor: " + acabado);
            console.log("Espesor: " + cantidad);

            alert("Su pediddo: " + "\n Material: " + material + "\n Tipo de chapa: " + acabado + "\n Cantidad de piezas: "+ cantidad );
            let confirma= prompt("Es correcto su pedido: ¿ s/n ? ");
            console.log("confirma: " + confirma);

            if(confirma.toLowerCase() === "s")
            {
                aux=false; 
            }
            else
            {
                aux=true;
            }
        }
        
        if(material == 18)
        { coeficiente=coef18;
          kilos=7;
        }
        else
        {
         if(material==14)
         {
         coeficiente=coef14;
         kilos=16;
         }
        else
            {
                if(material==5)
                {
                    coeficiente=coef5;
                    kilos=38;
                }
            }
            
        }
        
        alert("Vamos a proceder a cargar las medidas por pieza");
        console.log("Coeficiente"+ coeficiente);
    
        
        if(aux===false)
        {
            for (let i = 0; i < parseInt(cantidad); i++) 
            {
                alto = parseFloat(prompt("Pieza"+ (i+1) +" Alto: "));
                let ancho = parseFloat(prompt("Pieza" + (i+1) + " Ancho: "));
                area = area +(alto * ancho);
                console.log("Pieza " + (i + 1) + ": " + alto + " x " + ancho + "\n");
                console.log(area);
            }
            
            console.log("\n");
            console.log("area total" + area);
            console.log("coeficiente" + coeficiente);
            console.log("kilos x mt" + kilos);
            console.log("\n");

            cotizacion=parseFloat((area/100)*coeficiente*kilos);
            console.log("area del pedido" + cotizacion);
            

        }
        
        return cotizacion;
            
}


// -------------------------------- Cuerpo del programa --------------------------------------

alert("Bienvenido a Metalurgica SF");

//login(); 

menu();


console.log("presupueso asignado:" + cotizacion);
alert("Su pedido de cotizacion es de: $"+ cotizacion);

alert("Gracias por eleginos, lo esperamos para una proxima compra");


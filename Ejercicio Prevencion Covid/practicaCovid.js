function probarEjercicio() 
{
    let edad;
    let profesion;
    let residencia;
    let amba;

    edad = document.getElementById('edadTxtId').value;
    profesion = document.getElementById('inputGroupSelect01').value;
    residencia = document.getElementById('inputGroupSelect02').value;

    edad = parseInt(edad);

    if (residencia == "Buenos Aires") 
    {
        amba = confirm("¿Usted pertence a la zona del Amba?");
    }
    
    if (edad < 15 && profesion != "Alumno") 
    {
        alert("Es muy chico para tener una profesión");
    }
    else 
    {
        if (edad > 15 && edad < 60 && (amba == false || residencia != "Buenos Aires")) 
        {
            alert("Usa barbijo para transitar!!");
        }
        else 
        {
            if (edad > 60) 
            {
                alert("No puede transitar, es persona de riesgo, quédese en su casa.");
            }
        }
    }
    
    // SWITCH
    /*
    switch (profesion) 
    {
        case "Medico":
            if (edad < 25) 
            {
                alert("Usted es muy joven para ser médico.");
            }
            break;
        case "Alumno":
            if (edad < 15) 
            {
                alert("Respeta y colabora en tu casa, ya pronto volveremos a la escuela");
            }
        case "Enfermero":
        case "Almacenero":
            if (edad > 27 && edad < 60) 
            {
                alert("Usted puede transitar");
            }
        default:
            if (edad > 20 && edad < 60 && amba == true) 
            {
                alert("Solo salí para compras esenciales");
            }
            break;
    }
    */

    // IF    
    if (profesion == "Medico") 
    {
        if (edad < 25) 
        {
            alert("Usted es muy joven para ser médico.");
        }
    }
    else 
    {
        if (profesion == "Alumno") 
        {
            if (edad < 15) 
            {
                alert("Respeta y colabora en tu casa, ya pronto volveremos a la escuela");
            }
        }
        else 
        {
            if (profesion == "Enfermero" || profesion == "Almacenero") 
            {
                if (edad >= 27 && edad <= 60) 
                {
                    alert("Usted puede transitar");
                }
            }
            else   
            {  
                if (edad >= 20 && edad <= 60 && amba == true) 
                {
                    alert("Solo salí para compras esenciales");
                }
            }
        }
    }
}
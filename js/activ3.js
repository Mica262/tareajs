// ACTIVIDAD 3 SWITCH //




let entrada = prompt('Ingresar Número')
while (entrada != "ESC") {
    switch (entrada){
        case '1':
            alert('Tomate')
            break
        case '2':
            alert('Papa')
            break
        case '3':
            alert('Carne')
            break
        case '4':
            alert('Pollo')
            break    
    }
    entrada = prompt('Ingresar Número')
}
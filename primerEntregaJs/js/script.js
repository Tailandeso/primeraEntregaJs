function login() {
    let contrasena = prompt('Ingrese su contraseña');
    if (contrasena===''){
    do{
        alert('No podrá ingresar sin una contraseña')
        Contraseña = prompt('Ingrese su contraseña');
    }while (contrasena==='')
}
    let intentos = 5;
    let ingresar = false;
    for (let i = intentos; i > 0; i--) {
        let contrasena = prompt('Ingresá la contraseña, Tenés ' + i + ' intentos.');
        if (contrasena === contrasena) {
            alert('Bienvenido/a a Mundo Mate');
            ingresar = true;
            break;
        } else {
            alert('Error, Te quedan ' + (i - 1) + ' intentos.');
        }
    }
    return ingresar;
}


if (login()){
    let opcion= prompt('Elije un producto de la linea mate:\n1. Termo \n2. Mate \n3. Bombilla');
    function compramate(opcion){
        let mate
        switch(opcion){
            case '1':
                mate='Termo';
                break;
            case '2':
                mate='Mate';
                break;
            case '3':
                mate='Bombilla';
                break;
            default:
                if (opcion===""){
                    alert('No elegiste un producto correctamente');
                }else{
                    alert('No ingresaste correctamente un producto de la linea mate');
                    };
                    do{
                        opcion=prompt('elija nuevamente un producto de la linea mate que desea adquirir:\n1. Termo \n2. Mate \n3. Bombilla')
                        if (opcion==1){
                            mate='Termo';
                            break;
                        }else if (opcion==2){
                            mate='Mate';
                            break;
                        } else if (opcion==3){
                            mate='Bombilla';
                            break;
                        } else{
                            alert('No elejiste una opción valida')
                        }
                    } while(opcion==="" || opcion !==1 || opcion !== 3);
        }
        return mate
    }
let mate= elección(opcion);
alert('el juego seleccionado es: ' + mate)
} else{
    alert('No pudiste realizar la operación, intente de nuevo más tarde')
}
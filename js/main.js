function validateForm(){
	/* Escribe tú código aquí */
  var formularios = document.getElementsByTagName("input");
//validar todos los campos

  for(var i = 0; i < 4; i++){
     if(formularios[i].value==""){
       alert("Los 4 primeros campos son obligatorios");
       formularios[i].focus();
       return false;
     }
  }
  var patron=/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
      if(!patron.test(formularios[0].value)){ //validar nombre
        alert("Escriba la primera letra de su nombre con Mayúscula");
        formularios[0].focus();
        return false;
      }
      if(!patron.test(formularios[1].value)){//validar apellido
        alert("Escriba la primera letra de su apellido con Mayúscula");
        formularios[1].focus();
        return false;
      }
  var patron2=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

      if(!patron2.test(formularios[2].value)){//validar correo
        alert("Ingrese un correo válido\nEjemplo : yo@ejemplo.com");
        formularios[2].focus();
        return false;
      }
          //validar password
      if(formularios[3].value.length<6){
        alert("Su contraseña debe tener al menos 6 caracteres");
        formularios[3].focus();
        return false;
      }else if (formularios[3].value=="password"||formularios[3].value=="123456"|| formularios[3].value=="098754") {
        alert("Su contraseña no puede ser " + formularios[3].value);
        formularios[3].focus();
        return false;
      }

  var indice = document.getElementById("opcion");
      if(indice.value==0){
        alert("Seleccione un tipo de bicicleta");
        return false;
      }

}

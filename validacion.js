function validarFormulario() {
var nombre = document.getElementById("nombre").value.trim();
var correo = document.getElementById("correo").value.trim();
var telefono = document.getElementById("telefono").value.trim();

if (nombre === "" || correo === "" || telefono === "") {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
  }



for (var i = 0; i < nombre.length; i++) {
    var charCode = nombre.charCodeAt(i);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
      return false;
    }
  }

  if (telefono.length !== 8) {
    alert("El campo 'telefono' debe contener exactamente 8 dígitos numéricos.");
    return false;
  }
  for (var j = 0; j < telefono.length; j++) {
    var digit = telefono.charAt(j);
    if (digit < "0" || digit > "9") {
      alert("El campo 'telefono' solo puede contener dígitos numéricos.");
      return false;
    }
  }

  alert("Formulario enviado correctamente.");
  return true;
}
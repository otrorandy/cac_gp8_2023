


var iframe = document.getElementById("header");

// Evento cuando el cursor se posiciona sobre el iframe
iframe.addEventListener("mouseover", function() {
  iframe.style.height = "250px"; // Cambiar el valor del height cuando el cursor está sobre el iframe
  console.log("no funciona");
});

// Evento cuando el cursor se retira del iframe
iframe.addEventListener("mouseout", function() {
  iframe.style.height = "100px" // Restaurar el valor inicial del height cuando el cursor se retira del iframe
});


  


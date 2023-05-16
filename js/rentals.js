
$(function() {
  $('#todos').on('click', function() {
      
    $('.card-sillones').show();
    $('.card-escritorios').show();
    $('.card-mesas').show();
    $('.card-tecnologia').show();


    $('#escritorios').removeClass("active-tab");
    $('#mesas').removeClass("active-tab");
    $('#tecnologia').removeClass("active-tab");
    $('#sillones').removeClass("active-tab");

    $(this).toggleClass("active-tab").find(".menulink").toggleClass("active");

  });
});



$(function() {
    $('#sillones').on('click', function() {
        
        $('.card-sillones').show();
      // Ocultar todos los contenidos
      $('.card-escritorios').hide();
      $('.card-mesas').hide();
      $('.card-tecnologia').hide();

      $('#todos').removeClass("active-tab");
      $('#escritorios').removeClass("active-tab");
      $('#mesas').removeClass("active-tab");
      $('#tecnologia').removeClass("active-tab");

      $(this).toggleClass("active-tab").find(".menulink").toggleClass("active");

    });
  });



  $(function() {
    $('#mesas').on('click', function() {
        
        $('.card-mesas').show();
      // Ocultar todos los contenidos
      $('.card-escritorios').hide();
      $('.card-sillones').hide();
      $('.card-tecnologia').hide();

      $('#todos').removeClass("active-tab");
      $('#escritorios').removeClass("active-tab");
      $('#sillones').removeClass("active-tab");
      $('#tecnologia').removeClass("active-tab");

      $(this).toggleClass("active-tab").find(".menulink").toggleClass("active");

    });
  });




  $(function() {
    $('#escritorios').on('click', function() {
        $('.card-escritorios').show();
      // Ocultar todos los contenidos
      $('.card-sillones').hide();
      $('.card-mesas').hide();
      $('.card-tecnologia').hide();

      $('#todos').removeClass("active-tab");
      $('#sillones').removeClass("active-tab");
      $('#mesas').removeClass("active-tab");
      $('#tecnologia').removeClass("active-tab");


      $(this).toggleClass("active-tab").find(".menulink").toggleClass("active");

    });
  });

  $(function() {
    $('#tecnologia').on('click', function() {
        $('.card-tecnologia').show();
      // Ocultar todos los contenidos
      $('.card-sillones').hide();
      $('.card-mesas').hide();
      $('.card-escritorios').hide();

      $('#todos').removeClass("active-tab");
      $('#sillones').removeClass("active-tab");
      $('#mesas').removeClass("active-tab");
      $('#escritorios').removeClass("active-tab");


      $(this).toggleClass("active-tab").find(".menulink").toggleClass("active");

    });
  });




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


  



$(function() {
    $('#sillones').on('click', function() {
        
        $('.card-sillones').show();
      // Ocultar todos los contenidos
      $('.card-escritorios').hide();
      $('.card-mesas').hide();
      $('.card-tecnologia').hide();


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

      $('#sillones').removeClass("active-tab");
      $('#mesas').removeClass("active-tab");
      $('#escritorios').removeClass("active-tab");


      $(this).toggleClass("active-tab").find(".menulink").toggleClass("active");

    });
  });


  


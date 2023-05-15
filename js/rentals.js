$(function() {
    $('#sillones').on('click', function() {
        $('.card-sillones').show();
      // Ocultar todos los contenidos
      $('.card-escritorios').hide();

      $(this).toggleClass("active-tab").find(".menulink").toggleClass("active");
      $(this).toggleClass("texto").find(".menulink").toggleClass("active");
      
      // Resaltar la opción seleccionada
      $('.catalogo-menu li').removeClass('active');
      $(this).addClass('active');
      
      // Obtener el índice de la opción seleccionada
      var index = $(this).index();
      
      // Mostrar el contenido correspondiente al índice
      $('.content').eq(index).show();
    });
  });

  $(function() {
    $('#escritorios').on('click', function() {
        $('.card-escritorios').show();
      // Ocultar todos los contenidos
      $('.card-sillones').hide();
      
      // Resaltar la opción seleccionada
      $('.catalogo-menu li').removeClass('active');
      $(this).addClass('active');
      
      // Obtener el índice de la opción seleccionada
      var index = $(this).index();
      
      // Mostrar el contenido correspondiente al índice
      $('.content').eq(index).show();
    });
  });








  ///dddddddd

  $(function() {
    function slideMenu() {
      var activeState = $("#menu-container .menu-list").hasClass("active");
      $("#menu-container .menu-list").animate({left: activeState ? "0%" : "-100%"}, 400);
    }
    $("#menu-wrapper").click(function(event) {
      event.stopPropagation();
      $("#hamburger-menu").toggleClass("open");
      $("#menu-container .menu-list").toggleClass("active");
      slideMenu();
  
      $("body").toggleClass("overflow-hidden");
    });
  
    $(".menu-list").find(".accordion-toggle").click(function() {
      $(this).next().toggleClass("open").slideToggle("fast");
      $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");
  
      $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
      $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
    });
  }); // jQuery load
  
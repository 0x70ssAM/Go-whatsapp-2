$(document).ready(function(){

// set window height 
var windowHeight = $(window).height();
$('.slider').height(windowHeight);

// centering div-info
$('.content').css('marginTop',( $(window).height() - $('.content').height() )/2);
$('.content').css('marginBottom',( $(window).height() - $('.content').height() )/2);

$(window).on('scroll',function(){

    var link = $('.sideNavbar a.dot');
    var top = $(window).scrollTop();

    $('.sec').each(function(){
      var id = $(this).attr('id');
      var height = $(this).height();
      var offset = $(this).offset().top - 150;
      if(top >= offset && top < offset + height){
        link.removeClass('active');
        $('.sideNavbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });

  });
});






var typing = new Typed(".typing",{
    
    strings: ['Freelancer','Web Developer','App Developer','Tester ',],
    typeSpeed: 100,
    backSpeed:60,
  });

  
var typing = new Typed(".typing2",{
    
    strings: ['Freelancer','Web Developer','App Developer','Tester ',],
    typeSpeed: 100,
    backSpeed:60,
  });




//  menu btn //

(function($) { 
    $(function() { 
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        $('.dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
     
    }); 
  })(jQuery);

